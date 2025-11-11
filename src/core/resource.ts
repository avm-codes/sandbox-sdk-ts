// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SandboxSDK } from '../client';

export abstract class APIResource {
  protected _client: SandboxSDK;

  constructor(client: SandboxSDK) {
    this._client = client;
  }
}
