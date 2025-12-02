// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@avmcodes/sandbox-sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@avmcodes/sandbox-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SandboxSDK from '@avmcodes/sandbox-sdk';

export const metadata: Metadata = {
  resource: 'sandboxes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/sandboxes/list',
};

export const tool: Tool = {
  name: 'list_sandboxes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sandbox_list_response',\n  $defs: {\n    sandbox_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          description: 'Array of sandboxes',\n          items: {\n            $ref: '#/$defs/sandbox'\n          }\n        },\n        pagination: {\n          $ref: '#/$defs/pagination'\n        }\n      },\n      required: [        'data',\n        'pagination'\n      ]\n    },\n    sandbox: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Sandbox ID'\n        },\n        cpu: {\n          type: 'number',\n          description: 'CPU count'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Creation timestamp'\n        },\n        memory: {\n          type: 'number',\n          description: 'Memory size in MB'\n        },\n        name: {\n          type: 'string',\n          description: 'Sandbox name'\n        },\n        status: {\n          type: 'string',\n          description: 'Sandbox status'\n        },\n        volumes: {\n          type: 'array',\n          description: 'Volumes mounted on this sandbox',\n          items: {\n            type: 'object',\n            properties: {\n              mount_path: {\n                type: 'string',\n                description: 'Mount path in the container'\n              },\n              volume_id: {\n                type: 'string',\n                description: 'Volume ID'\n              },\n              volume_name: {\n                type: 'string',\n                description: 'Volume name'\n              }\n            },\n            required: [              'mount_path',\n              'volume_id',\n              'volume_name'\n            ]\n          }\n        }\n      },\n      required: [        'id',\n        'cpu',\n        'created_at',\n        'memory',\n        'name',\n        'status'\n      ]\n    },\n    pagination: {\n      type: 'object',\n      description: 'Pagination metadata',\n      properties: {\n        page: {\n          type: 'number',\n          description: 'Current page number'\n        },\n        page_size: {\n          type: 'number',\n          description: 'Number of items per page'\n        },\n        total_items: {\n          type: 'number',\n          description: 'Total number of items'\n        },\n        total_pages: {\n          type: 'number',\n          description: 'Total number of pages'\n        }\n      },\n      required: [        'page',\n        'page_size',\n        'total_items',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.sandboxes.list(body)));
  } catch (error) {
    if (error instanceof SandboxSDK.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
