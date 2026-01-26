// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Sandboxes extends APIResource {
  /**
   * @example
   * ```ts
   * const sandbox = await client.sandboxes.create();
   * ```
   */
  create(
    body: SandboxCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxCreateResponse> {
    return this._client.post('/v1/sandboxes/create', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const sandboxes = await client.sandboxes.list();
   * ```
   */
  list(
    query: SandboxListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxListResponse> {
    return this._client.get('/v1/sandboxes/list', { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const sandbox = await client.sandboxes.delete('id');
   * ```
   */
  delete(
    id: string,
    body: SandboxDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxDeleteResponse> {
    return this._client.delete(path`/v1/sandboxes/${id}/delete`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.sandboxes.deleteAll();
   * ```
   */
  deleteAll(options?: RequestOptions): APIPromise<SandboxDeleteAllResponse> {
    return this._client.delete('/v1/sandboxes/delete-all', options);
  }

  /**
   * @example
   * ```ts
   * const response = await client.sandboxes.download('id', {
   *   path: 'path',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(id: string, query: SandboxDownloadParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/v1/sandboxes/${id}/download`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * @example
   * ```ts
   * const response = await client.sandboxes.execute('id', {
   *   command: 'python -c "print(\'Hello, World!\')"',
   * });
   * ```
   */
  execute(
    id: string,
    body: SandboxExecuteParams,
    options?: RequestOptions,
  ): APIPromise<SandboxExecuteResponse> {
    return this._client.post(path`/v1/sandboxes/${id}/execute`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.sandboxes.upload('id', {
   *   path: 'path',
   * });
   * ```
   */
  upload(id: string, body: SandboxUploadParams, options?: RequestOptions): APIPromise<SandboxUploadResponse> {
    return this._client.post(
      path`/v1/sandboxes/${id}/upload`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

/**
 * Pagination metadata
 */
export interface Pagination {
  /**
   * Current page number
   */
  page: number;

  /**
   * Number of items per page
   */
  page_size: number;

  /**
   * Total number of items
   */
  total_items: number;

  /**
   * Total number of pages
   */
  total_pages: number;
}

export interface Sandbox {
  /**
   * Sandbox ID
   */
  id: string;

  /**
   * CPU count
   */
  cpu: number;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Disk size in GB
   */
  disk_size: number;

  /**
   * Memory size in MB
   */
  memory: number;

  /**
   * Sandbox name
   */
  name: string;

  /**
   * Sandbox status
   */
  status: string;
}

export interface SandboxCreateResponse extends Sandbox {
  /**
   * Sandbox ID
   */
  id: string;

  /**
   * CPU count (API units, minimum 1)
   */
  cpu: number;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Memory size in MiB
   */
  memory: number;

  /**
   * Sandbox name
   */
  name: string;

  /**
   * Sandbox status
   */
  status: string;

  /**
   * Storage size in GB
   */
  storage: number;
}

export interface SandboxListResponse {
  /**
   * Array of sandboxes
   */
  data: Array<Sandbox>;

  /**
   * Pagination metadata
   */
  pagination: Pagination;
}

export interface SandboxDeleteResponse {
  id: string;

  message: string;

  /**
   * Whether snapshot was created
   */
  snapshot_created?: boolean;

  /**
   * Name of created snapshot
   */
  snapshot_name?: string;

  /**
   * Whether storage was deleted
   */
  storage_deleted?: boolean;

  /**
   * Name of deleted storage
   */
  storage_name?: string;
}

export interface SandboxDeleteAllResponse {
  /**
   * Number of sandboxes deleted
   */
  deleted_count: number;

  /**
   * Array of deleted sandbox IDs
   */
  deleted_ids: Array<string>;

  /**
   * Success message
   */
  message: string;

  /**
   * Array of deletion errors, if any
   */
  errors?: Array<SandboxDeleteAllResponse.Error>;

  /**
   * Number of storage volumes deleted
   */
  storage_deleted_count?: number;
}

export namespace SandboxDeleteAllResponse {
  export interface Error {
    /**
     * Sandbox ID that failed to delete
     */
    id: string;

    /**
     * Error message
     */
    error: string;
  }
}

export interface SandboxExecuteResponse {
  /**
   * Execution ID
   */
  id: string;

  /**
   * Execution completion timestamp
   */
  completed_at: string;

  /**
   * Execution start timestamp
   */
  created_at: string;

  /**
   * Execution time in milliseconds
   */
  execution_time_ms: number;

  /**
   * Exit code
   */
  exit_code: number;

  /**
   * Execution status
   */
  status: 'running' | 'completed' | 'timeout' | 'error';

  /**
   * Standard error output
   */
  stderr: string;

  /**
   * Standard output
   */
  stdout: string;
}

export interface SandboxUploadResponse {
  /**
   * Success message
   */
  message: string;

  /**
   * Destination path where file was uploaded
   */
  path: string;

  /**
   * File size in bytes
   */
  size: number;
}

export interface SandboxCreateParams {
  /**
   * Environment variables
   */
  env_vars?: { [key: string]: string };

  /**
   * Docker image name (e.g., avmcodes/avm-default-sandbox)
   */
  image?: string;

  /**
   * Custom sandbox name (auto-generated as sandbox-{user_id}-{timestamp} if not
   * provided)
   */
  name?: string;

  resources?: SandboxCreateParams.Resources;

  /**
   * Wait for sandbox to be ready before returning
   */
  wait_for_ready?: boolean;
}

export namespace SandboxCreateParams {
  export interface Resources {
    /**
     * Number of CPUs (minimum: 1, 1 CPU = 0.25 Kubernetes vCPU)
     */
    cpus?: number;

    /**
     * Memory size in MiB
     */
    memory?: number;

    /**
     * Storage size in GB
     */
    storage?: number;
  }
}

export interface SandboxListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Page size
   */
  page_size?: number;
}

export interface SandboxDeleteParams {
  /**
   * Create snapshot before deleting storage
   */
  create_snapshot?: boolean;

  /**
   * Keep storage after deletion (default: false - storage deleted)
   */
  keep_storage?: boolean;

  /**
   * Custom name for the snapshot
   */
  snapshot_name?: string;
}

export interface SandboxDownloadParams {
  /**
   * File path in sandbox (e.g., /data/myfile.txt)
   */
  path: string;
}

export interface SandboxExecuteParams {
  /**
   * Command to execute (full CLI command, supports shell features like redirection,
   * pipes, etc.)
   */
  command: string;

  /**
   * Environment variables
   */
  env?: { [key: string]: string };

  /**
   * Execution timeout in seconds
   */
  timeout?: number;

  /**
   * Working directory for execution
   */
  working_dir?: string;
}

export interface SandboxUploadParams {
  /**
   * Destination path in sandbox (e.g., /data/myfile.txt)
   */
  path: string;

  /**
   * File to upload (binary data)
   */
  file?: unknown;
}

export declare namespace Sandboxes {
  export {
    type Pagination as Pagination,
    type Sandbox as Sandbox,
    type SandboxCreateResponse as SandboxCreateResponse,
    type SandboxListResponse as SandboxListResponse,
    type SandboxDeleteResponse as SandboxDeleteResponse,
    type SandboxDeleteAllResponse as SandboxDeleteAllResponse,
    type SandboxExecuteResponse as SandboxExecuteResponse,
    type SandboxUploadResponse as SandboxUploadResponse,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxListParams as SandboxListParams,
    type SandboxDeleteParams as SandboxDeleteParams,
    type SandboxDownloadParams as SandboxDownloadParams,
    type SandboxExecuteParams as SandboxExecuteParams,
    type SandboxUploadParams as SandboxUploadParams,
  };
}
