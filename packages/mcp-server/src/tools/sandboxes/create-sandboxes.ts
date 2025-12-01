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
  httpPath: '/v1/sandboxes/create',
};

export const tool: Tool = {
  name: 'create_sandboxes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sandbox_create_response',\n  $defs: {\n    sandbox_create_response: {\n      allOf: [        {\n          $ref: '#/$defs/sandbox'\n        }\n      ]\n    },\n    sandbox: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Sandbox ID'\n        },\n        cpu: {\n          type: 'number',\n          description: 'CPU count'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Creation timestamp'\n        },\n        memory: {\n          type: 'number',\n          description: 'Memory size in MB'\n        },\n        name: {\n          type: 'string',\n          description: 'Sandbox name'\n        },\n        status: {\n          type: 'string',\n          description: 'Sandbox status'\n        },\n        volumes: {\n          type: 'array',\n          description: 'Volumes mounted on this sandbox',\n          items: {\n            type: 'object',\n            properties: {\n              mount_path: {\n                type: 'string',\n                description: 'Mount path in the container'\n              },\n              volume_id: {\n                type: 'string',\n                description: 'Volume ID'\n              },\n              volume_name: {\n                type: 'string',\n                description: 'Volume name'\n              }\n            },\n            required: [              'mount_path',\n              'volume_id',\n              'volume_name'\n            ]\n          }\n        }\n      },\n      required: [        'id',\n        'cpu',\n        'created_at',\n        'memory',\n        'name',\n        'status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      env_vars: {
        type: 'object',
        description: 'Environment variables',
        additionalProperties: true,
      },
      image: {
        type: 'string',
        description: 'Docker image name (e.g., avmcodes/avm-default-sandbox)',
      },
      name: {
        type: 'string',
        description: 'Sandbox name',
      },
      resources: {
        type: 'object',
        properties: {
          cpus: {
            type: 'number',
            description: 'Number of vCPUs (supports decimals, e.g., 0.25)',
          },
          memory: {
            type: 'integer',
            description: 'Memory size in MiB',
          },
        },
      },
      volumes: {
        type: 'array',
        description: 'Volumes to attach to the sandbox',
        items: {
          type: 'object',
          properties: {
            mount_path: {
              type: 'string',
              description: 'Mount path in the container',
            },
            volume_id: {
              type: 'string',
              description:
                'Volume ID or Snapshot ID. If a snapshot ID is provided, a new volume will be created from the snapshot.',
            },
          },
          required: ['mount_path', 'volume_id'],
        },
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.sandboxes.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
