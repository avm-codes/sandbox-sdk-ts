// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

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
  },
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
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
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
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
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
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
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
          this.indexProse(content, file.name);
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
