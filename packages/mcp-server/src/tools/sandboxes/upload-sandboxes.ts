// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@avmcodes/sandbox-sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@avmcodes/sandbox-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SandboxSDK from '@avmcodes/sandbox-sdk';

export const metadata: Metadata = {
  resource: 'sandboxes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/sandboxes/{id}/upload',
};

export const tool: Tool = {
  name: 'upload_sandboxes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sandbox_upload_response',\n  $defs: {\n    sandbox_upload_response: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string',\n          description: 'Success message'\n        },\n        path: {\n          type: 'string',\n          description: 'Destination path where file was uploaded'\n        },\n        size: {\n          type: 'integer',\n          description: 'File size in bytes'\n        }\n      },\n      required: [        'message',\n        'path',\n        'size'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Sandbox ID',
      },
      path: {
        type: 'string',
        description: 'Destination path in sandbox (e.g., /data/myfile.txt)',
      },
      file: {
        type: 'object',
        description: 'File to upload (binary data)',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'path'],
  },
  annotations: {},
};

export const handler = async (client: SandboxSDK, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.sandboxes.upload(id, body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
