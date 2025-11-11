# Sandboxes

Types:

- <code><a href="./src/resources/sandboxes.ts">Pagination</a></code>
- <code><a href="./src/resources/sandboxes.ts">Sandbox</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxCreateResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxListResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxDeleteResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxDeleteAllResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxExecuteResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxUploadResponse</a></code>

Methods:

- <code title="post /v1/sandboxes/create">client.sandboxes.<a href="./src/resources/sandboxes.ts">create</a>({ ...params }) -> SandboxCreateResponse</code>
- <code title="get /v1/sandboxes/list">client.sandboxes.<a href="./src/resources/sandboxes.ts">list</a>({ ...params }) -> SandboxListResponse</code>
- <code title="delete /v1/sandboxes/{id}/delete">client.sandboxes.<a href="./src/resources/sandboxes.ts">delete</a>(id) -> SandboxDeleteResponse</code>
- <code title="delete /v1/sandboxes/delete-all">client.sandboxes.<a href="./src/resources/sandboxes.ts">deleteAll</a>() -> SandboxDeleteAllResponse</code>
- <code title="get /v1/sandboxes/{id}/download">client.sandboxes.<a href="./src/resources/sandboxes.ts">download</a>(id, { ...params }) -> Response</code>
- <code title="post /v1/sandboxes/{id}/execute">client.sandboxes.<a href="./src/resources/sandboxes.ts">execute</a>(id, { ...params }) -> SandboxExecuteResponse</code>
- <code title="post /v1/sandboxes/{id}/upload">client.sandboxes.<a href="./src/resources/sandboxes.ts">upload</a>(id, { ...params }) -> SandboxUploadResponse</code>

# Volumes

Types:

- <code><a href="./src/resources/volumes.ts">Volume</a></code>
- <code><a href="./src/resources/volumes.ts">VolumeListResponse</a></code>
- <code><a href="./src/resources/volumes.ts">VolumeDeleteResponse</a></code>
- <code><a href="./src/resources/volumes.ts">VolumeCreateSnapshotResponse</a></code>

Methods:

- <code title="post /v1/volumes/create">client.volumes.<a href="./src/resources/volumes.ts">create</a>({ ...params }) -> Volume</code>
- <code title="get /v1/volumes/list">client.volumes.<a href="./src/resources/volumes.ts">list</a>({ ...params }) -> VolumeListResponse</code>
- <code title="delete /v1/volumes/{id}/delete">client.volumes.<a href="./src/resources/volumes.ts">delete</a>(id) -> VolumeDeleteResponse</code>
- <code title="post /v1/volumes/{id}/snapshot">client.volumes.<a href="./src/resources/volumes.ts">createSnapshot</a>(id, { ...params }) -> VolumeCreateSnapshotResponse</code>
