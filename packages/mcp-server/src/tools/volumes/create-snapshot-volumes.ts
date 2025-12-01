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
  httpPath: '/v1/volumes/{id}/snapshot',
};

export const tool: Tool = {
  name: 'create_snapshot_volumes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/volume_create_snapshot_response',\n  $defs: {\n    volume_create_snapshot_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Snapshot ID'\n        },\n        consistency: {\n          type: 'string',\n          description: 'Snapshot consistency level (application-consistent or crash-consistent)'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Creation timestamp'\n        },\n        name: {\n          type: 'string',\n          description: 'Snapshot name'\n        },\n        sandbox_id: {\n          type: 'string',\n          description: 'Sandbox ID that was using the volume'\n        },\n        sandbox_name: {\n          type: 'string',\n          description: 'Sandbox name that was using the volume'\n        },\n        status: {\n          type: 'string',\n          description: 'Snapshot status'\n        },\n        volume_id: {\n          type: 'string',\n          description: 'Source volume ID'\n        },\n        volume_name: {\n          type: 'string',\n          description: 'Source volume name'\n        }\n      },\n      required: [        'id',\n        'consistency',\n        'created_at',\n        'name',\n        'sandbox_id',\n        'sandbox_name',\n        'status',\n        'volume_id',\n        'volume_name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Volume ID',
      },
      name: {
        type: 'string',
        description: 'Snapshot name',
      },
      quick: {
        type: 'boolean',
        description:
          'Quick mode: Only fsfreeze (crash-consistent). Default: Full sync + freeze (application-consistent)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: SandboxSDK, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.volumes.createSnapshot(id, body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
