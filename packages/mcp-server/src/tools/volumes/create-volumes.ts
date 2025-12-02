// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@avmcodes/sandbox-sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@avmcodes/sandbox-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SandboxSDK from '@avmcodes/sandbox-sdk';

export const metadata: Metadata = {
  resource: 'volumes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/volumes/create',
};

export const tool: Tool = {
  name: 'create_volumes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/volume',\n  $defs: {\n    volume: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Volume ID'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Creation timestamp'\n        },\n        name: {\n          type: 'string',\n          description: 'Volume name'\n        },\n        size: {\n          type: 'string',\n          description: 'Volume size'\n        },\n        status: {\n          type: 'string',\n          description: 'Volume status (Pending/Bound/Lost)'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'name',\n        'size',\n        'status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Volume name',
      },
      size: {
        type: 'string',
        description: "Volume size (e.g., '10Gi', '100Mi')",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: SandboxSDK, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.volumes.create(body)));
  } catch (error) {
    if (error instanceof SandboxSDK.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
