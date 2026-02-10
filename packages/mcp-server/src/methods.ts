import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.sandboxes.create',
    fullyQualifiedName: 'sandboxes.create',
    httpMethod: 'post',
    httpPath: '/v1/sandboxes/create',
  },
  {
    clientCallName: 'client.sandboxes.list',
    fullyQualifiedName: 'sandboxes.list',
    httpMethod: 'get',
    httpPath: '/v1/sandboxes/list',
  },
  {
    clientCallName: 'client.sandboxes.delete',
    fullyQualifiedName: 'sandboxes.delete',
    httpMethod: 'delete',
    httpPath: '/v1/sandboxes/{id}/delete',
  },
  {
    clientCallName: 'client.sandboxes.deleteAll',
    fullyQualifiedName: 'sandboxes.deleteAll',
    httpMethod: 'delete',
    httpPath: '/v1/sandboxes/delete-all',
  },
  {
    clientCallName: 'client.sandboxes.download',
    fullyQualifiedName: 'sandboxes.download',
    httpMethod: 'get',
    httpPath: '/v1/sandboxes/{id}/download',
  },
  {
    clientCallName: 'client.sandboxes.execute',
    fullyQualifiedName: 'sandboxes.execute',
    httpMethod: 'post',
    httpPath: '/v1/sandboxes/{id}/execute',
  },
  {
    clientCallName: 'client.sandboxes.upload',
    fullyQualifiedName: 'sandboxes.upload',
    httpMethod: 'post',
    httpPath: '/v1/sandboxes/{id}/upload',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
