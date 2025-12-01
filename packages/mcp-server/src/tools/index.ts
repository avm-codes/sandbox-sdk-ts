// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_sandboxes from './sandboxes/create-sandboxes';
import list_sandboxes from './sandboxes/list-sandboxes';
import delete_sandboxes from './sandboxes/delete-sandboxes';
import delete_all_sandboxes from './sandboxes/delete-all-sandboxes';
import download_sandboxes from './sandboxes/download-sandboxes';
import execute_sandboxes from './sandboxes/execute-sandboxes';
import upload_sandboxes from './sandboxes/upload-sandboxes';
import create_volumes from './volumes/create-volumes';
import list_volumes from './volumes/list-volumes';
import delete_volumes from './volumes/delete-volumes';
import create_snapshot_volumes from './volumes/create-snapshot-volumes';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_sandboxes);
addEndpoint(list_sandboxes);
addEndpoint(delete_sandboxes);
addEndpoint(delete_all_sandboxes);
addEndpoint(download_sandboxes);
addEndpoint(execute_sandboxes);
addEndpoint(upload_sandboxes);
addEndpoint(create_volumes);
addEndpoint(list_volumes);
addEndpoint(delete_volumes);
addEndpoint(create_snapshot_volumes);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
