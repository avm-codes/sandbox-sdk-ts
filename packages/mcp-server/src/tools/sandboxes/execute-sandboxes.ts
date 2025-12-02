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
  httpPath: '/v1/sandboxes/{id}/execute',
};

export const tool: Tool = {
  name: 'execute_sandboxes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sandbox_execute_response',\n  $defs: {\n    sandbox_execute_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Execution ID'\n        },\n        completed_at: {\n          type: 'string',\n          description: 'Execution completion timestamp'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Execution start timestamp'\n        },\n        execution_time_ms: {\n          type: 'integer',\n          description: 'Execution time in milliseconds'\n        },\n        exit_code: {\n          type: 'integer',\n          description: 'Exit code'\n        },\n        status: {\n          type: 'string',\n          description: 'Execution status',\n          enum: [            'running',\n            'completed',\n            'timeout',\n            'error'\n          ]\n        },\n        stderr: {\n          type: 'string',\n          description: 'Standard error output'\n        },\n        stdout: {\n          type: 'string',\n          description: 'Standard output'\n        }\n      },\n      required: [        'id',\n        'completed_at',\n        'created_at',\n        'execution_time_ms',\n        'exit_code',\n        'status',\n        'stderr',\n        'stdout'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Sandbox ID',
      },
      command: {
        type: 'string',
        description:
          'Command to execute (full CLI command, supports shell features like redirection, pipes, etc.)',
      },
      env: {
        type: 'object',
        description: 'Environment variables',
        additionalProperties: true,
      },
      timeout: {
        type: 'integer',
        description: 'Execution timeout in seconds',
      },
      working_dir: {
        type: 'string',
        description: 'Working directory for execution',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'command'],
  },
  annotations: {},
};

export const handler = async (client: SandboxSDK, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.sandboxes.execute(id, body)));
  } catch (error) {
    if (error instanceof SandboxSDK.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
