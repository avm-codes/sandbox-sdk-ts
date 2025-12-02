// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@avmcodes/sandbox-sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@avmcodes/sandbox-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SandboxSDK from '@avmcodes/sandbox-sdk';

export const metadata: Metadata = {
  resource: 'volumes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/volumes/list',
};

export const tool: Tool = {
  name: 'list_volumes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/volume_list_response',\n  $defs: {\n    volume_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          description: 'Array of volumes',\n          items: {\n            allOf: [              {\n                $ref: '#/$defs/volume'\n              }\n            ]\n          }\n        },\n        pagination: {\n          $ref: '#/$defs/pagination'\n        }\n      },\n      required: [        'data',\n        'pagination'\n      ]\n    },\n    volume: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Volume ID'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Creation timestamp'\n        },\n        name: {\n          type: 'string',\n          description: 'Volume name'\n        },\n        size: {\n          type: 'string',\n          description: 'Volume size'\n        },\n        status: {\n          type: 'string',\n          description: 'Volume status (Pending/Bound/Lost)'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'name',\n        'size',\n        'status'\n      ]\n    },\n    pagination: {\n      type: 'object',\n      description: 'Pagination metadata',\n      properties: {\n        page: {\n          type: 'number',\n          description: 'Current page number'\n        },\n        page_size: {\n          type: 'number',\n          description: 'Number of items per page'\n        },\n        total_items: {\n          type: 'number',\n          description: 'Total number of items'\n        },\n        total_pages: {\n          type: 'number',\n          description: 'Total number of pages'\n        }\n      },\n      required: [        'page',\n        'page_size',\n        'total_items',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'number',
        description: 'Page number',
      },
      page_size: {
        type: 'number',
        description: 'Page size',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: SandboxSDK, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.volumes.list(body)));
  } catch (error) {
    if (error instanceof SandboxSDK.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
