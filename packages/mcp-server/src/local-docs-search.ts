// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list',
    endpoint: '/v1/sandboxes/list',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) sandboxes > (method) list',
    qualified: 'client.sandboxes.list',
    params: ['page?: number;', 'page_size?: number;'],
    response:
      '{ data: { id: string; cpu: number; created_at: string; disk_size: number; memory: number; name: string; status: string; }[]; pagination: { page: number; page_size: number; total_items: number; total_pages: number; }; }',
    markdown:
      "## list\n\n`client.sandboxes.list(page?: number, page_size?: number): { data: sandbox[]; pagination: pagination; }`\n\n**get** `/v1/sandboxes/list`\n\n### Parameters\n\n- `page?: number`\n  Page number\n\n- `page_size?: number`\n  Page size\n\n### Returns\n\n- `{ data: { id: string; cpu: number; created_at: string; disk_size: number; memory: number; name: string; status: string; }[]; pagination: { page: number; page_size: number; total_items: number; total_pages: number; }; }`\n\n  - `data: { id: string; cpu: number; created_at: string; disk_size: number; memory: number; name: string; status: string; }[]`\n  - `pagination: { page: number; page_size: number; total_items: number; total_pages: number; }`\n\n### Example\n\n```typescript\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK();\n\nconst sandboxes = await client.sandboxes.list();\n\nconsole.log(sandboxes);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/v1/sandboxes/list \\\n    -H "x-api-key: $SANDBOX_SDK_API_KEY"',
      },
      python: {
        method: 'sandboxes.list',
        example:
          'import os\nfrom sandbox_sdk import SandboxSDK\n\nclient = SandboxSDK(\n    api_key=os.environ.get("SANDBOX_SDK_API_KEY"),  # This is the default and can be omitted\n)\nsandboxes = client.sandboxes.list()\nprint(sandboxes.data)',
      },
      typescript: {
        method: 'client.sandboxes.list',
        example:
          "import SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK({\n  apiKey: process.env['SANDBOX_SDK_API_KEY'], // This is the default and can be omitted\n});\n\nconst sandboxes = await client.sandboxes.list();\n\nconsole.log(sandboxes.data);",
      },
    },
  },
  {
    name: 'execute',
    endpoint: '/v1/sandboxes/{id}/execute',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) sandboxes > (method) execute',
    qualified: 'client.sandboxes.execute',
    params: [
      'id: string;',
      'command: string;',
      'env?: object;',
      'timeout?: number;',
      'working_dir?: string;',
    ],
    response:
      "{ id: string; completed_at: string; created_at: string; execution_time_ms: number; exit_code: number; status: 'running' | 'completed' | 'timeout' | 'error'; stderr: string; stdout: string; }",
    markdown:
      "## execute\n\n`client.sandboxes.execute(id: string, command: string, env?: object, timeout?: number, working_dir?: string): { id: string; completed_at: string; created_at: string; execution_time_ms: number; exit_code: number; status: 'running' | 'completed' | 'timeout' | 'error'; stderr: string; stdout: string; }`\n\n**post** `/v1/sandboxes/{id}/execute`\n\n### Parameters\n\n- `id: string`\n  Sandbox ID\n\n- `command: string`\n  Command to execute (full CLI command, supports shell features like redirection, pipes, etc.)\n\n- `env?: object`\n  Environment variables\n\n- `timeout?: number`\n  Execution timeout in seconds\n\n- `working_dir?: string`\n  Working directory for execution\n\n### Returns\n\n- `{ id: string; completed_at: string; created_at: string; execution_time_ms: number; exit_code: number; status: 'running' | 'completed' | 'timeout' | 'error'; stderr: string; stdout: string; }`\n\n  - `id: string`\n  - `completed_at: string`\n  - `created_at: string`\n  - `execution_time_ms: number`\n  - `exit_code: number`\n  - `status: 'running' | 'completed' | 'timeout' | 'error'`\n  - `stderr: string`\n  - `stdout: string`\n\n### Example\n\n```typescript\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK();\n\nconst response = await client.sandboxes.execute('id', { command: 'python -c \"print(\\'Hello, World!\\')\"' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/v1/sandboxes/$ID/execute \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $SANDBOX_SDK_API_KEY" \\\n    -d "{\n          \\"command\\": \\"python -c \\\\\\"print(\'Hello, World!\')\\\\\\"\\"\n        }"',
      },
      python: {
        method: 'sandboxes.execute',
        example:
          'import os\nfrom sandbox_sdk import SandboxSDK\n\nclient = SandboxSDK(\n    api_key=os.environ.get("SANDBOX_SDK_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.sandboxes.execute(\n    id="id",\n    command="python -c \\"print(\'Hello, World!\')\\"",\n)\nprint(response.id)',
      },
      typescript: {
        method: 'client.sandboxes.execute',
        example:
          "import SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK({\n  apiKey: process.env['SANDBOX_SDK_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.sandboxes.execute('id', {\n  command: 'python -c \"print(\\'Hello, World!\\')\"',\n});\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/sandboxes/create',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) sandboxes > (method) create',
    qualified: 'client.sandboxes.create',
    params: [
      'env_vars?: object;',
      'image?: string;',
      'name?: string;',
      'resources?: { cpus?: number; memory?: number; storage?: number; };',
      'wait_for_ready?: boolean;',
    ],
    response:
      '{ id: string; cpu: number; created_at: string; disk_size: number; memory: number; name: string; status: string; }',
    markdown:
      "## create\n\n`client.sandboxes.create(env_vars?: object, image?: string, name?: string, resources?: { cpus?: number; memory?: number; storage?: number; }, wait_for_ready?: boolean): object`\n\n**post** `/v1/sandboxes/create`\n\n### Parameters\n\n- `env_vars?: object`\n  Environment variables\n\n- `image?: string`\n  Docker image name (e.g., avmcodes/avm-default-sandbox)\n\n- `name?: string`\n  Custom sandbox name (auto-generated as sandbox-{user_id}-{timestamp} if not provided)\n\n- `resources?: { cpus?: number; memory?: number; storage?: number; }`\n  - `cpus?: number`\n    Number of CPUs (minimum: 1, 1 CPU = 0.25 Kubernetes vCPU)\n  - `memory?: number`\n    Memory size in MiB\n  - `storage?: number`\n    Storage size in GB\n\n- `wait_for_ready?: boolean`\n  Wait for sandbox to be ready before returning\n\n### Returns\n\n- `{ id: string; cpu: number; created_at: string; disk_size: number; memory: number; name: string; status: string; }`\n\n### Example\n\n```typescript\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK();\n\nconst sandbox = await client.sandboxes.create();\n\nconsole.log(sandbox);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/v1/sandboxes/create \\\n    -X POST \\\n    -H "x-api-key: $SANDBOX_SDK_API_KEY"',
      },
      python: {
        method: 'sandboxes.create',
        example:
          'import os\nfrom sandbox_sdk import SandboxSDK\n\nclient = SandboxSDK(\n    api_key=os.environ.get("SANDBOX_SDK_API_KEY"),  # This is the default and can be omitted\n)\nsandbox = client.sandboxes.create()\nprint(sandbox)',
      },
      typescript: {
        method: 'client.sandboxes.create',
        example:
          "import SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK({\n  apiKey: process.env['SANDBOX_SDK_API_KEY'], // This is the default and can be omitted\n});\n\nconst sandbox = await client.sandboxes.create();\n\nconsole.log(sandbox);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/sandboxes/{id}/delete',
    httpMethod: 'delete',
    summary: '',
    description: '',
    stainlessPath: '(resource) sandboxes > (method) delete',
    qualified: 'client.sandboxes.delete',
    params: [
      'id: string;',
      'create_snapshot?: boolean;',
      'keep_storage?: boolean;',
      'snapshot_name?: string;',
    ],
    response:
      '{ id: string; message: string; snapshot_created?: boolean; snapshot_name?: string; storage_deleted?: boolean; storage_name?: string; }',
    markdown:
      "## delete\n\n`client.sandboxes.delete(id: string, create_snapshot?: boolean, keep_storage?: boolean, snapshot_name?: string): { id: string; message: string; snapshot_created?: boolean; snapshot_name?: string; storage_deleted?: boolean; storage_name?: string; }`\n\n**delete** `/v1/sandboxes/{id}/delete`\n\n### Parameters\n\n- `id: string`\n  Sandbox ID\n\n- `create_snapshot?: boolean`\n  Create snapshot before deleting storage\n\n- `keep_storage?: boolean`\n  @deprecated This option is ignored. Storage is always deleted.\n\n- `snapshot_name?: string`\n  Custom name for the snapshot\n\n### Returns\n\n- `{ id: string; message: string; snapshot_created?: boolean; snapshot_name?: string; storage_deleted?: boolean; storage_name?: string; }`\n\n  - `id: string`\n  - `message: string`\n  - `snapshot_created?: boolean`\n  - `snapshot_name?: string`\n  - `storage_deleted?: boolean`\n  - `storage_name?: string`\n\n### Example\n\n```typescript\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK();\n\nconst sandbox = await client.sandboxes.delete('id');\n\nconsole.log(sandbox);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/v1/sandboxes/$ID/delete \\\n    -X DELETE \\\n    -H "x-api-key: $SANDBOX_SDK_API_KEY"',
      },
      python: {
        method: 'sandboxes.delete',
        example:
          'import os\nfrom sandbox_sdk import SandboxSDK\n\nclient = SandboxSDK(\n    api_key=os.environ.get("SANDBOX_SDK_API_KEY"),  # This is the default and can be omitted\n)\nsandbox = client.sandboxes.delete(\n    id="id",\n)\nprint(sandbox.id)',
      },
      typescript: {
        method: 'client.sandboxes.delete',
        example:
          "import SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK({\n  apiKey: process.env['SANDBOX_SDK_API_KEY'], // This is the default and can be omitted\n});\n\nconst sandbox = await client.sandboxes.delete('id');\n\nconsole.log(sandbox.id);",
      },
    },
  },
  {
    name: 'delete_all',
    endpoint: '/v1/sandboxes/delete-all',
    httpMethod: 'delete',
    summary: '',
    description: '',
    stainlessPath: '(resource) sandboxes > (method) delete_all',
    qualified: 'client.sandboxes.deleteAll',
    response:
      '{ deleted_count: number; deleted_ids: string[]; message: string; errors?: { id: string; error: string; }[]; storage_deleted_count?: number; }',
    markdown:
      "## delete_all\n\n`client.sandboxes.deleteAll(): { deleted_count: number; deleted_ids: string[]; message: string; errors?: object[]; storage_deleted_count?: number; }`\n\n**delete** `/v1/sandboxes/delete-all`\n\n### Returns\n\n- `{ deleted_count: number; deleted_ids: string[]; message: string; errors?: { id: string; error: string; }[]; storage_deleted_count?: number; }`\n\n  - `deleted_count: number`\n  - `deleted_ids: string[]`\n  - `message: string`\n  - `errors?: { id: string; error: string; }[]`\n  - `storage_deleted_count?: number`\n\n### Example\n\n```typescript\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK();\n\nconst response = await client.sandboxes.deleteAll();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/v1/sandboxes/delete-all \\\n    -X DELETE \\\n    -H "x-api-key: $SANDBOX_SDK_API_KEY"',
      },
      python: {
        method: 'sandboxes.delete_all',
        example:
          'import os\nfrom sandbox_sdk import SandboxSDK\n\nclient = SandboxSDK(\n    api_key=os.environ.get("SANDBOX_SDK_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.sandboxes.delete_all()\nprint(response.deleted_ids)',
      },
      typescript: {
        method: 'client.sandboxes.deleteAll',
        example:
          "import SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK({\n  apiKey: process.env['SANDBOX_SDK_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.sandboxes.deleteAll();\n\nconsole.log(response.deleted_ids);",
      },
    },
  },
  {
    name: 'upload',
    endpoint: '/v1/sandboxes/{id}/upload',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) sandboxes > (method) upload',
    qualified: 'client.sandboxes.upload',
    params: ['id: string;', 'path: string;', 'file?: object;'],
    response: '{ message: string; path: string; size: number; }',
    markdown:
      "## upload\n\n`client.sandboxes.upload(id: string, path: string, file?: object): { message: string; path: string; size: number; }`\n\n**post** `/v1/sandboxes/{id}/upload`\n\n### Parameters\n\n- `id: string`\n  Sandbox ID\n\n- `path: string`\n  Destination path in sandbox (e.g., /data/myfile.txt)\n\n- `file?: object`\n  File to upload (binary data)\n\n### Returns\n\n- `{ message: string; path: string; size: number; }`\n\n  - `message: string`\n  - `path: string`\n  - `size: number`\n\n### Example\n\n```typescript\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK();\n\nconst response = await client.sandboxes.upload('id', { path: 'path' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/v1/sandboxes/$ID/upload \\\n    -H \'Content-Type: multipart/form-data\' \\\n    -H "x-api-key: $SANDBOX_SDK_API_KEY" \\\n    -F path=path',
      },
      python: {
        method: 'sandboxes.upload',
        example:
          'import os\nfrom sandbox_sdk import SandboxSDK\n\nclient = SandboxSDK(\n    api_key=os.environ.get("SANDBOX_SDK_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.sandboxes.upload(\n    id="id",\n    path="path",\n)\nprint(response.message)',
      },
      typescript: {
        method: 'client.sandboxes.upload',
        example:
          "import SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK({\n  apiKey: process.env['SANDBOX_SDK_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.sandboxes.upload('id', { path: 'path' });\n\nconsole.log(response.message);",
      },
    },
  },
  {
    name: 'download',
    endpoint: '/v1/sandboxes/{id}/download',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) sandboxes > (method) download',
    qualified: 'client.sandboxes.download',
    params: ['id: string;', 'path: string;'],
    response: 'string',
    markdown:
      "## download\n\n`client.sandboxes.download(id: string, path: string): string`\n\n**get** `/v1/sandboxes/{id}/download`\n\n### Parameters\n\n- `id: string`\n  Sandbox ID\n\n- `path: string`\n  File path in sandbox (e.g., /data/myfile.txt)\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK();\n\nconst response = await client.sandboxes.download('id', { path: 'path' });\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.example.com/v1/sandboxes/$ID/download \\\n    -H "x-api-key: $SANDBOX_SDK_API_KEY"',
      },
      python: {
        method: 'sandboxes.download',
        example:
          'import os\nfrom sandbox_sdk import SandboxSDK\n\nclient = SandboxSDK(\n    api_key=os.environ.get("SANDBOX_SDK_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.sandboxes.download(\n    id="id",\n    path="path",\n)\nprint(response)\ncontent = response.read()\nprint(content)',
      },
      typescript: {
        method: 'client.sandboxes.download',
        example:
          "import SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK({\n  apiKey: process.env['SANDBOX_SDK_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.sandboxes.download('id', { path: 'path' });\n\nconsole.log(response);\n\nconst content = await response.blob();\nconsole.log(content);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Sandbox SDK Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/avm_sdk.svg?label=pypi%20(stable))](https://pypi.org/project/avm_sdk/)\n\nThe Sandbox SDK Python library provides convenient access to the Sandbox SDK REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Sandbox SDK MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40avmcodes%2Fsandbox-sdk-mcp&config=eyJuYW1lIjoiQGF2bWNvZGVzL3NhbmRib3gtc2RrLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3NhbmRib3gtc2RrLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtYXBpLWtleSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40avmcodes%2Fsandbox-sdk-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsandbox-sdk.stlmcp.com%22%2C%22headers%22%3A%7B%22x-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\n The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install avm_sdk\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom sandbox_sdk import SandboxSDK\n\nclient = SandboxSDK(\n    api_key=os.environ.get("SANDBOX_SDK_API_KEY"),  # This is the default and can be omitted\n)\n\nsandboxes = client.sandboxes.list()\nprint(sandboxes.data)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `SANDBOX_SDK_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncSandboxSDK` instead of `SandboxSDK` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom sandbox_sdk import AsyncSandboxSDK\n\nclient = AsyncSandboxSDK(\n    api_key=os.environ.get("SANDBOX_SDK_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  sandboxes = await client.sandboxes.list()\n  print(sandboxes.data)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install avm_sdk[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom sandbox_sdk import DefaultAioHttpClient\nfrom sandbox_sdk import AsyncSandboxSDK\n\nasync def main() -> None:\n  async with AsyncSandboxSDK(\n    api_key=os.environ.get("SANDBOX_SDK_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    sandboxes = await client.sandboxes.list()\n    print(sandboxes.data)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom sandbox_sdk import SandboxSDK\n\nclient = SandboxSDK()\n\nsandbox = client.sandboxes.create(\n    resources={\n        "cpus": 1,\n        "memory": 512,\n        "storage": 10,\n    },\n)\nprint(sandbox.resources)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `sandbox_sdk.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `sandbox_sdk.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `sandbox_sdk.APIError`.\n\n```python\nimport sandbox_sdk\nfrom sandbox_sdk import SandboxSDK\n\nclient = SandboxSDK()\n\ntry:\n    client.sandboxes.list()\nexcept sandbox_sdk.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept sandbox_sdk.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept sandbox_sdk.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom sandbox_sdk import SandboxSDK\n\n# Configure the default for all requests:\nclient = SandboxSDK(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).sandboxes.list()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom sandbox_sdk import SandboxSDK\n\n# Configure the default for all requests:\nclient = SandboxSDK(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = SandboxSDK(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).sandboxes.list()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `SANDBOX_SDK_LOG` to `info`.\n\n```shell\n$ export SANDBOX_SDK_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom sandbox_sdk import SandboxSDK\n\nclient = SandboxSDK()\nresponse = client.sandboxes.with_raw_response.list()\nprint(response.headers.get(\'X-My-Header\'))\n\nsandbox = response.parse()  # get the object that `sandboxes.list()` would have returned\nprint(sandbox.data)\n```\n\nThese methods return an [`APIResponse`](https://github.com/avm-codes/sandbox-sdk-python/tree/main/src/sandbox_sdk/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/avm-codes/sandbox-sdk-python/tree/main/src/sandbox_sdk/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.sandboxes.with_streaming_response.list() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom sandbox_sdk import SandboxSDK, DefaultHttpxClient\n\nclient = SandboxSDK(\n    # Or use the `SANDBOX_SDK_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom sandbox_sdk import SandboxSDK\n\nwith SandboxSDK() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/avm-codes/sandbox-sdk-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport sandbox_sdk\nprint(sandbox_sdk.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Sandbox SDK TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@avmcodes/sandbox-sdk.svg?label=npm%20(stable))](https://npmjs.org/package/@avmcodes/sandbox-sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@avmcodes/sandbox-sdk)\n\nThis library provides convenient access to the Sandbox SDK REST API from server-side TypeScript or JavaScript.\n\n\n\nThe full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Sandbox SDK MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40avmcodes%2Fsandbox-sdk-mcp&config=eyJuYW1lIjoiQGF2bWNvZGVzL3NhbmRib3gtc2RrLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3NhbmRib3gtc2RrLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtYXBpLWtleSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40avmcodes%2Fsandbox-sdk-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsandbox-sdk.stlmcp.com%22%2C%22headers%22%3A%7B%22x-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @avmcodes/sandbox-sdk\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK({\n  apiKey: process.env['SANDBOX_SDK_API_KEY'], // This is the default and can be omitted\n});\n\nconst sandboxes = await client.sandboxes.list();\n\nconsole.log(sandboxes.data);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK({\n  apiKey: process.env['SANDBOX_SDK_API_KEY'], // This is the default and can be omitted\n});\n\nconst sandboxes: SandboxSDK.SandboxListResponse = await client.sandboxes.list();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst sandboxes = await client.sandboxes.list().catch(async (err) => {\n  if (err instanceof SandboxSDK.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new SandboxSDK({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.sandboxes.list({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new SandboxSDK({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.sandboxes.list({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new SandboxSDK();\n\nconst response = await client.sandboxes.list().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: sandboxes, response: raw } = await client.sandboxes.list().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(sandboxes.data);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `SANDBOX_SDK_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new SandboxSDK({\n  logger: logger.child({ name: 'SandboxSDK' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.sandboxes.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\nimport fetch from 'my-fetch';\n\nconst client = new SandboxSDK({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new SandboxSDK({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport SandboxSDK from '@avmcodes/sandbox-sdk';\n\nconst client = new SandboxSDK({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport SandboxSDK from 'npm:@avmcodes/sandbox-sdk';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new SandboxSDK({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/avm-codes/sandbox-sdk-ts/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
