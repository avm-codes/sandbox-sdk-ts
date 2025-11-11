// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as VolumesAPI from './volumes';
import * as SandboxesAPI from './sandboxes';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Volumes extends APIResource {
  /**
   * @example
   * ```ts
   * const volume = await client.volumes.create();
   * ```
   */
  create(body: VolumeCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Volume> {
    return this._client.post('/v1/volumes/create', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const volumes = await client.volumes.list();
   * ```
   */
  list(
    query: VolumeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VolumeListResponse> {
    return this._client.get('/v1/volumes/list', { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const volume = await client.volumes.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<VolumeDeleteResponse> {
    return this._client.delete(path`/v1/volumes/${id}/delete`, options);
  }

  /**
   * @example
   * ```ts
   * const response = await client.volumes.createSnapshot('id', {
   *   name: 'my-snapshot-2024-01-15',
   * });
   * ```
   */
  createSnapshot(
    id: string,
    body: VolumeCreateSnapshotParams,
    options?: RequestOptions,
  ): APIPromise<VolumeCreateSnapshotResponse> {
    return this._client.post(path`/v1/volumes/${id}/snapshot`, { body, ...options });
  }
}

export interface Volume {
  /**
   * Volume ID
   */
  id: string;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Volume name
   */
  name: string;

  /**
   * Volume size
   */
  size: string;

  /**
   * Volume status (Pending/Bound/Lost)
   */
  status: string;
}

export interface VolumeListResponse {
  /**
   * Array of volumes
   */
  data: Array<VolumeListResponse.Data>;

  /**
   * Pagination metadata
   */
  pagination: SandboxesAPI.Pagination;
}

export namespace VolumeListResponse {
  export interface Data extends VolumesAPI.Volume {
    /**
     * Volume or Snapshot ID
     */
    id: string;

    /**
     * Creation timestamp
     */
    created_at: string;

    /**
     * Whether the volume is currently mounted by a sandbox (always false for
     * snapshots)
     */
    in_use: boolean;

    /**
     * Volume or Snapshot name
     */
    name: string;

    /**
     * Volume size (for volumes) or source volume size (for snapshots)
     */
    size: string;

    /**
     * Volume status (Pending/Bound/Lost) or Snapshot status (Ready/Pending)
     */
    status: string;

    /**
     * Type: 'volume' for persistent volumes, 'snapshot' for point-in-time snapshots
     */
    type: 'volume' | 'snapshot';

    /**
     * Sandbox information if volume is in use (only for volumes)
     */
    mounted_by?: Data.MountedBy;

    /**
     * Source volume ID for snapshots
     */
    source_volume_id?: string;

    /**
     * Source volume name for snapshots
     */
    source_volume_name?: string;
  }

  export namespace Data {
    /**
     * Sandbox information if volume is in use (only for volumes)
     */
    export interface MountedBy {
      /**
       * Sandbox ID using this volume
       */
      sandbox_id: string;

      /**
       * Sandbox name using this volume
       */
      sandbox_name: string;
    }
  }
}

export interface VolumeDeleteResponse {
  id: string;

  message: string;

  type?: 'volume' | 'snapshot';
}

export interface VolumeCreateSnapshotResponse {
  /**
   * Snapshot ID
   */
  id: string;

  /**
   * Snapshot consistency level (application-consistent or crash-consistent)
   */
  consistency: string;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Snapshot name
   */
  name: string;

  /**
   * Sandbox ID that was using the volume
   */
  sandbox_id: string;

  /**
   * Sandbox name that was using the volume
   */
  sandbox_name: string;

  /**
   * Snapshot status
   */
  status: string;

  /**
   * Source volume ID
   */
  volume_id: string;

  /**
   * Source volume name
   */
  volume_name: string;
}

export interface VolumeCreateParams {
  /**
   * Volume name
   */
  name?: string;

  /**
   * Volume size (e.g., '10Gi', '100Mi')
   */
  size?: string;
}

export interface VolumeListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Page size
   */
  page_size?: number;
}

export interface VolumeCreateSnapshotParams {
  /**
   * Snapshot name
   */
  name: string;

  /**
   * Quick mode: Only fsfreeze (crash-consistent). Default: Full sync + freeze
   * (application-consistent)
   */
  quick?: boolean;
}

export declare namespace Volumes {
  export {
    type Volume as Volume,
    type VolumeListResponse as VolumeListResponse,
    type VolumeDeleteResponse as VolumeDeleteResponse,
    type VolumeCreateSnapshotResponse as VolumeCreateSnapshotResponse,
    type VolumeCreateParams as VolumeCreateParams,
    type VolumeListParams as VolumeListParams,
    type VolumeCreateSnapshotParams as VolumeCreateSnapshotParams,
  };
}
