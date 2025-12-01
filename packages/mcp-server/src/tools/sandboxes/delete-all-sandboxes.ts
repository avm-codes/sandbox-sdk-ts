// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@avmcodes/sandbox-sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@avmcodes/sandbox-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SandboxSDK from '@avmcodes/sandbox-sdk';

export const metadata: Metadata = {
  resource: 'sandboxes',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/sandboxes/delete-all',
};

export const tool: Tool = {
  name: 'delete_all_sandboxes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sandbox_delete_all_response',\n  $defs: {\n    sandbox_delete_all_response: {\n      type: 'object',\n      properties: {\n        deleted_count: {\n          type: 'number',\n          description: 'Number of sandboxes deleted'\n        },\n        deleted_ids: {\n          type: 'array',\n          description: 'Array of deleted sandbox IDs',\n          items: {\n            type: 'string'\n          }\n        },\n        message: {\n          type: 'string',\n          description: 'Success message'\n        },\n        errors: {\n          type: 'array',\n          description: 'Array of deletion errors, if any',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Sandbox ID that failed to delete'\n              },\n              error: {\n                type: 'string',\n                description: 'Error message'\n              }\n            },\n            required: [              'id',\n              'error'\n            ]\n          }\n        }\n      },\n      required: [        'deleted_count',\n        'deleted_ids',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: SandboxSDK, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.sandboxes.deleteAll()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
