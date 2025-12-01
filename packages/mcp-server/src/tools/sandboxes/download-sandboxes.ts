// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from '@avmcodes/sandbox-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SandboxSDK from '@avmcodes/sandbox-sdk';

export const metadata: Metadata = {
  resource: 'sandboxes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/sandboxes/{id}/download',
};

export const tool: Tool = {
  name: 'download_sandboxes',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Sandbox ID',
      },
      path: {
        type: 'string',
        description: 'File path in sandbox (e.g., /data/myfile.txt)',
      },
    },
    required: ['id', 'path'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: SandboxSDK, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asBinaryContentResult(await client.sandboxes.download(id, body).asResponse());
};

export default { metadata, tool, handler };
