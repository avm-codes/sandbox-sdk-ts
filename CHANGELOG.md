# Changelog

## 2.1.0 (2026-04-03)

Full Changelog: [v2.0.0...v2.1.0](https://github.com/avm-codes/sandbox-sdk-ts/compare/v2.0.0...v2.1.0)

### Features

* **api:** api update ([9cd6dea](https://github.com/avm-codes/sandbox-sdk-ts/commit/9cd6dea50b6c4d0f0a931f4113d4a5e805c66fd1))
* **mcp:** add an option to disable code tool ([2d225b0](https://github.com/avm-codes/sandbox-sdk-ts/commit/2d225b09c6f00fdfd73a74db044f46f124f1fe52))
* **mcp:** add initial server instructions ([13603b4](https://github.com/avm-codes/sandbox-sdk-ts/commit/13603b43e7c3116f2abf72cc73d2c5be9dcc4ce2))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([33f3868](https://github.com/avm-codes/sandbox-sdk-ts/commit/33f3868899400f1488f8277857bdf817357539fe))
* **client:** avoid removing abort listener too early ([911b7cb](https://github.com/avm-codes/sandbox-sdk-ts/commit/911b7cb666058d32368eb819ad88274add2dff67))
* **client:** preserve URL params already embedded in path ([d310998](https://github.com/avm-codes/sandbox-sdk-ts/commit/d3109985143a9c4d3e43478ccda7cc87a3c0a0cd))
* **docs/contributing:** correct pnpm link command ([9f1889d](https://github.com/avm-codes/sandbox-sdk-ts/commit/9f1889d9898311dfbe06144be4d5de0853b647c7))
* **docs:** fix mcp installation instructions for remote servers ([01156d8](https://github.com/avm-codes/sandbox-sdk-ts/commit/01156d89c0af365460d45f33d5f8af3ddfd42172))
* **internal:** skip tests that depend on mock server ([c68fa27](https://github.com/avm-codes/sandbox-sdk-ts/commit/c68fa27704a6496c98efa862ba89ccf9b8c09650))
* **mcp:** allow falling back for required env variables ([c298b8d](https://github.com/avm-codes/sandbox-sdk-ts/commit/c298b8df77188bbc6d9e64361d31efc52e9e2142))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([ab48990](https://github.com/avm-codes/sandbox-sdk-ts/commit/ab48990d27a5367818d8e4df6278168901658a25))
* **mcp:** update prompt ([767831e](https://github.com/avm-codes/sandbox-sdk-ts/commit/767831e3b06110a9b8494eebf057c6b78410b3aa))


### Chores

* **ci:** skip lint on metadata-only changes ([af1c05b](https://github.com/avm-codes/sandbox-sdk-ts/commit/af1c05b4bf910136d3bc96520119266614e9786e))
* **ci:** skip uploading artifacts on stainless-internal branches ([38b8060](https://github.com/avm-codes/sandbox-sdk-ts/commit/38b8060d59f36a0eec21f7a17430e9baf58083f6))
* **client:** do not parse responses with empty content-length ([60b9c54](https://github.com/avm-codes/sandbox-sdk-ts/commit/60b9c54965d6117191e491c19f36f130f18f1296))
* **client:** restructure abort controller binding ([ed057aa](https://github.com/avm-codes/sandbox-sdk-ts/commit/ed057aa99a33679f7e9d6397b3085aa75911d812))
* **internal/client:** fix form-urlencoded requests ([fa43006](https://github.com/avm-codes/sandbox-sdk-ts/commit/fa4300657387845d8df49df2404455b66a02ac67))
* **internal:** add health check to MCP server when running in HTTP mode ([824a092](https://github.com/avm-codes/sandbox-sdk-ts/commit/824a0929c9fab99674667effbf22c522ccafeda1))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([07377c6](https://github.com/avm-codes/sandbox-sdk-ts/commit/07377c62e73f2cd4e1b47f45e28561ea700e8817))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([969cd7a](https://github.com/avm-codes/sandbox-sdk-ts/commit/969cd7a3752535659581d12fbb5f8ba6bb72e657))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([0b09bff](https://github.com/avm-codes/sandbox-sdk-ts/commit/0b09bff22ff302a5a1d2d5dde9ee71d0d1a26d7a))
* **internal:** avoid type checking errors with ts-reset ([1ec5930](https://github.com/avm-codes/sandbox-sdk-ts/commit/1ec5930b8ed8825871482868673c953f9e4501d6))
* **internal:** cache fetch instruction calls in MCP server ([099226b](https://github.com/avm-codes/sandbox-sdk-ts/commit/099226b627a73d8b871194d06b522f3ed77fa2de))
* **internal:** codegen related update ([367c744](https://github.com/avm-codes/sandbox-sdk-ts/commit/367c744d23a1bc01345c53bf92bd6c58d9c1fb88))
* **internal:** codegen related update ([b31839d](https://github.com/avm-codes/sandbox-sdk-ts/commit/b31839dd6b7329d7cdc7a3b8ef5b9bdf455af5b6))
* **internal:** codegen related update ([6a05df5](https://github.com/avm-codes/sandbox-sdk-ts/commit/6a05df5b37d87bac59b06aae54da9e787d55faac))
* **internal:** codegen related update ([f6ffd9c](https://github.com/avm-codes/sandbox-sdk-ts/commit/f6ffd9cc85611476b7b2134cb44920d1f1f40c78))
* **internal:** codegen related update ([16d847c](https://github.com/avm-codes/sandbox-sdk-ts/commit/16d847c93a88d9cd518b01d0a3b43449425c997c))
* **internal:** codegen related update ([d82b01f](https://github.com/avm-codes/sandbox-sdk-ts/commit/d82b01fc58b7e33a4f0b42a7e58b4b978de543cd))
* **internal:** codegen related update ([f923e10](https://github.com/avm-codes/sandbox-sdk-ts/commit/f923e10ba47ade90fa579d8ce92d460e5cc8ef54))
* **internal:** codegen related update ([838d5eb](https://github.com/avm-codes/sandbox-sdk-ts/commit/838d5eb032141a4b692924a5f32fb73de13b5630))
* **internal:** codegen related update ([6cd56c6](https://github.com/avm-codes/sandbox-sdk-ts/commit/6cd56c6f9233de14ca5f33e90126535b7329fbd2))
* **internal:** codegen related update ([7454345](https://github.com/avm-codes/sandbox-sdk-ts/commit/74543459c4ed24eb0142792a237b4b08a7ee67f3))
* **internal:** codegen related update ([d584984](https://github.com/avm-codes/sandbox-sdk-ts/commit/d58498405b24dceb9c4373ac3b7373832266c708))
* **internal:** codegen related update ([a85b3aa](https://github.com/avm-codes/sandbox-sdk-ts/commit/a85b3aa9b1035556b29a8f306e1fd0dbc0d22925))
* **internal:** codegen related update ([3261977](https://github.com/avm-codes/sandbox-sdk-ts/commit/32619779c28e0bb44f814718dba7d162cd228fce))
* **internal:** codegen related update ([6542f23](https://github.com/avm-codes/sandbox-sdk-ts/commit/6542f23841407a8c29839ebc2adac340e1fed578))
* **internal:** codegen related update ([d724830](https://github.com/avm-codes/sandbox-sdk-ts/commit/d72483006ffb3520b224a18b86b285d7b133befd))
* **internal:** codegen related update ([73bb0c7](https://github.com/avm-codes/sandbox-sdk-ts/commit/73bb0c72cccfbd7eebca51554402f85353493452))
* **internal:** codegen related update ([74e1cc2](https://github.com/avm-codes/sandbox-sdk-ts/commit/74e1cc2249d8471f9a9430220d6f0632d8a04f63))
* **internal:** codegen related update ([8c747fb](https://github.com/avm-codes/sandbox-sdk-ts/commit/8c747fbd7a3ad70ddb3b82ca6809d73888c3a449))
* **internal:** codegen related update ([936d003](https://github.com/avm-codes/sandbox-sdk-ts/commit/936d003bc1c907be295ac13ceabd1d5602a2ca95))
* **internal:** codegen related update ([11a2519](https://github.com/avm-codes/sandbox-sdk-ts/commit/11a2519948b4ca45dbaa16de3a94a8618b6c1fd5))
* **internal:** codegen related update ([b046e72](https://github.com/avm-codes/sandbox-sdk-ts/commit/b046e723f13cd8ae466b73c06182824407a868c5))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([567aa47](https://github.com/avm-codes/sandbox-sdk-ts/commit/567aa478a3d084b911dcddd19bc55b13b1aaf364))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([f2aa646](https://github.com/avm-codes/sandbox-sdk-ts/commit/f2aa64646d12dbe14de0471b109da2e89153b133))
* **internal:** fix MCP server TS errors that occur with required client options ([0cb04f4](https://github.com/avm-codes/sandbox-sdk-ts/commit/0cb04f4be82d8de4b0aa7697c1f473230e85a02d))
* **internal:** improve layout of generated MCP server files ([ed64a86](https://github.com/avm-codes/sandbox-sdk-ts/commit/ed64a86840dde4fc3c44f920bf4c531372bb4b7c))
* **internal:** improve reliability of MCP servers when using local code mode execution ([1a858d1](https://github.com/avm-codes/sandbox-sdk-ts/commit/1a858d123c889a093b8974fcc59e65167b6864c7))
* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([6a5555f](https://github.com/avm-codes/sandbox-sdk-ts/commit/6a5555ff429243a1eb9b9016e7825aada7ba2214))
* **internal:** make MCP code execution location configurable via a flag ([0c4cd12](https://github.com/avm-codes/sandbox-sdk-ts/commit/0c4cd126189f409d2bba38291d252ac9947eda4a))
* **internal:** move stringifyQuery implementation to internal function ([f167475](https://github.com/avm-codes/sandbox-sdk-ts/commit/f16747587e7993df2cfafe99b4d116d7693e7f02))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([d305d5a](https://github.com/avm-codes/sandbox-sdk-ts/commit/d305d5a85346f2e6a9ee906397920a3c3c60c54a))
* **internal:** remove mock server code ([85e3c5f](https://github.com/avm-codes/sandbox-sdk-ts/commit/85e3c5fef3b73259fb056899657a865eab29c426))
* **internal:** support custom-instructions-path flag in MCP servers ([cb3525b](https://github.com/avm-codes/sandbox-sdk-ts/commit/cb3525b3ae0573739aacac9ddd37fd961289a1dd))
* **internal:** support oauth authorization code flow for MCP servers ([8d21f12](https://github.com/avm-codes/sandbox-sdk-ts/commit/8d21f12a639c4b1674edce2404f45a4f295b0687))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([0b9467f](https://github.com/avm-codes/sandbox-sdk-ts/commit/0b9467f8679422306c0a731e242f897594be231a))
* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([7759c55](https://github.com/avm-codes/sandbox-sdk-ts/commit/7759c55f66b9fd0124679af3f060e195879b9f69))
* **internal:** tweak CI branches ([a93480b](https://github.com/avm-codes/sandbox-sdk-ts/commit/a93480bef76df8e19074f7b672b934777cc0f266))
* **internal:** update dependencies to address dependabot vulnerabilities ([f77e997](https://github.com/avm-codes/sandbox-sdk-ts/commit/f77e997d0f67c1873db1e6adab14a944928f3947))
* **internal:** update gitignore ([667df96](https://github.com/avm-codes/sandbox-sdk-ts/commit/667df964dc25de28f76084555e0743dd7b4a912d))
* **internal:** update lock file ([4c8d12f](https://github.com/avm-codes/sandbox-sdk-ts/commit/4c8d12f0a4f665fb4de9f1cc0d5d46ca6b873112))
* **internal:** update lockfile ([04a0c5c](https://github.com/avm-codes/sandbox-sdk-ts/commit/04a0c5cf26b89a680c559c9132ec0d32387724d2))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([19160cb](https://github.com/avm-codes/sandbox-sdk-ts/commit/19160cb96ef78f408c8901410b1e8566a647ccd1))
* **internal:** upgrade pnpm ([9bcf007](https://github.com/avm-codes/sandbox-sdk-ts/commit/9bcf007b6ee703c4344167e0ff448e6bec230d47))
* **internal:** upgrade pnpm version ([60766d4](https://github.com/avm-codes/sandbox-sdk-ts/commit/60766d41b411cd8f311d08c233945f402ce6777c))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([cc68c09](https://github.com/avm-codes/sandbox-sdk-ts/commit/cc68c097ab8be0b9cdb1470276801ac5e8257d99))
* **mcp-server:** improve instructions ([bfc5171](https://github.com/avm-codes/sandbox-sdk-ts/commit/bfc517170c333e63f6a4a5558137e6e83773ca03))
* **mcp-server:** return access instructions for 404 without API key ([2003aa3](https://github.com/avm-codes/sandbox-sdk-ts/commit/2003aa321dfbd2f2360a6823bc73686fa204fdad))
* **mcp:** correctly update version in sync with sdk ([7a2dbdb](https://github.com/avm-codes/sandbox-sdk-ts/commit/7a2dbdb5b96a33c06c8cc95443ecd25ee58b034f))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([f20dad3](https://github.com/avm-codes/sandbox-sdk-ts/commit/f20dad3797304af95a8faf134eda1476ef097411))
* **mcp:** up tsconfig lib version to es2022 ([eb4269f](https://github.com/avm-codes/sandbox-sdk-ts/commit/eb4269fb6ce565d23477478d414890c923ef1e13))
* update mock server docs ([6cfc7a9](https://github.com/avm-codes/sandbox-sdk-ts/commit/6cfc7a993463b2776615e81de14d4e3b1107e341))


### Refactors

* update sdk ([cd026e2](https://github.com/avm-codes/sandbox-sdk-ts/commit/cd026e25c825c5db8f52e65b6e0b2f8fd1ed711c))

## 2.0.0 (2026-01-26)

Full Changelog: [v1.1.0...v2.0.0](https://github.com/avm-codes/sandbox-sdk-ts/compare/v1.1.0...v2.0.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** api update ([6f99e80](https://github.com/avm-codes/sandbox-sdk-ts/commit/6f99e8029fa27a985a798e00a3282e7d8d27eb70))
* **mcp:** add typescript check to code execution tool ([5263efe](https://github.com/avm-codes/sandbox-sdk-ts/commit/5263efee486bc3e1f20f7758ec7bd342c8ef4f93))
* **mcp:** return logs on code tool errors ([94f2923](https://github.com/avm-codes/sandbox-sdk-ts/commit/94f2923f27fdd1bc07f4fedd86b5790e82a29013))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([5787cf6](https://github.com/avm-codes/sandbox-sdk-ts/commit/5787cf6be05b6eeea72dd5b263b85ec8f898e1bf))
* **mcp:** correct code tool api output types ([1379a5b](https://github.com/avm-codes/sandbox-sdk-ts/commit/1379a5b868d649cfec102a326e468ecd9cbc2e46))
* **mcp:** fix env parsing ([cec5520](https://github.com/avm-codes/sandbox-sdk-ts/commit/cec55203bfd5520d7640e8f14883dff7b6edf865))
* **mcp:** fix options parsing ([5a8bd44](https://github.com/avm-codes/sandbox-sdk-ts/commit/5a8bd44020daf1f9f2feb0c470dfcfad1cd68ac8))
* **mcp:** pass base url to code tool ([8052f19](https://github.com/avm-codes/sandbox-sdk-ts/commit/8052f1970d8e589031099f60e64d980a967708c1))
* **mcp:** return tool execution error on api error ([1585850](https://github.com/avm-codes/sandbox-sdk-ts/commit/1585850f1e937f3c77de2718ea8ac164b05d512b))
* **mcp:** update code tool prompt ([87c2093](https://github.com/avm-codes/sandbox-sdk-ts/commit/87c2093d81b8d41a6a6527ceb392144d03e89ed4))


### Chores

* break long lines in snippets into multiline ([2b433b8](https://github.com/avm-codes/sandbox-sdk-ts/commit/2b433b8a486f1233176373502369d1bd4a4da40e))
* **ci:** upgrade `actions/github-script` ([6b4278b](https://github.com/avm-codes/sandbox-sdk-ts/commit/6b4278bc2c728041dbe82cfe63072eec7770f0e9))
* **client:** fix logger property type ([cb705aa](https://github.com/avm-codes/sandbox-sdk-ts/commit/cb705aab8d909e9a30bd3ddc3347d12f78c620c0))
* configure new SDK language ([16b9f67](https://github.com/avm-codes/sandbox-sdk-ts/commit/16b9f673a9565ee461f7c34731ebf87ad72cbf64))
* **internal:** codegen related update ([4b17753](https://github.com/avm-codes/sandbox-sdk-ts/commit/4b177531cb1c02f5ededcf16af05c8fb944398ef))
* **internal:** codegen related update ([8bfdfd1](https://github.com/avm-codes/sandbox-sdk-ts/commit/8bfdfd19c013aa8a5924bf4a804ca039e361695b))
* **internal:** codegen related update ([6b34baf](https://github.com/avm-codes/sandbox-sdk-ts/commit/6b34baf0d152702182da5b6c4d56325df87f6834))
* **internal:** codegen related update ([0e18e99](https://github.com/avm-codes/sandbox-sdk-ts/commit/0e18e9997e9e091258cc0a893999493de0698a25))
* **internal:** codegen related update ([2ac5d73](https://github.com/avm-codes/sandbox-sdk-ts/commit/2ac5d7373931c109f03882b3cbfc4b8817ae951c))
* **internal:** codegen related update ([752eb82](https://github.com/avm-codes/sandbox-sdk-ts/commit/752eb821d7bcec1c5eda4e336bc641cd97a4816c))
* **internal:** codegen related update ([1656730](https://github.com/avm-codes/sandbox-sdk-ts/commit/1656730d74e812b0ef2112e85efe2ab00864513b))
* **internal:** codegen related update ([2b111f8](https://github.com/avm-codes/sandbox-sdk-ts/commit/2b111f8a6053a7408d5fb11f3332a91e8b7658a9))
* **internal:** codegen related update ([99a2111](https://github.com/avm-codes/sandbox-sdk-ts/commit/99a21118ade6c5018e9cb246fdcc7dedb3709f06))
* **internal:** configure MCP Server hosting ([cde6f03](https://github.com/avm-codes/sandbox-sdk-ts/commit/cde6f033501bee629dd79b7699baf804a7e298ea))
* **internal:** escape package name in pnpm workspace file ([7622dbf](https://github.com/avm-codes/sandbox-sdk-ts/commit/7622dbf4e7d628d11078bca0933818f51428c4f2))
* **internal:** fix dockerfile ([da767a9](https://github.com/avm-codes/sandbox-sdk-ts/commit/da767a9e6916734c31c4d4ef95106753c1532688))
* **internal:** update `actions/checkout` version ([966b808](https://github.com/avm-codes/sandbox-sdk-ts/commit/966b8089e62d0add74f1b3392774afe3fd72b777))
* **internal:** update lock file ([982c37f](https://github.com/avm-codes/sandbox-sdk-ts/commit/982c37f41eea9e3925b44835765a94721df67e3a))
* **internal:** upgrade babel, qs, js-yaml ([fde5d8e](https://github.com/avm-codes/sandbox-sdk-ts/commit/fde5d8e3919b15779c611eb674bddc85fc541eae))
* **internal:** upgrade brace-expansion and @babel/helpers ([b53f67b](https://github.com/avm-codes/sandbox-sdk-ts/commit/b53f67b75f54ea35a1f13c7af88d031ca837442f))
* **internal:** upgrade eslint ([ae0d072](https://github.com/avm-codes/sandbox-sdk-ts/commit/ae0d0721c93fda20111bdb968042d44d64676db2))
* **mcp:** add intent param to execute tool ([b72f31a](https://github.com/avm-codes/sandbox-sdk-ts/commit/b72f31aee8438ef72941cb065ab8085af5e117f0))
* **mcp:** pass intent param to execute handler ([84d0038](https://github.com/avm-codes/sandbox-sdk-ts/commit/84d0038e05ba2e73d9bf194694bd20cb57c45880))
* **mcp:** remove deprecated tool schemes ([8232eae](https://github.com/avm-codes/sandbox-sdk-ts/commit/8232eae7a688d95705744a7ce390906702fbbec7))
* **mcp:** upgrade dependencies ([284c045](https://github.com/avm-codes/sandbox-sdk-ts/commit/284c0457b9507911c26a7bc2eef1b62b5a0a68bc))
* use latest @modelcontextprotocol/sdk ([9266f7c](https://github.com/avm-codes/sandbox-sdk-ts/commit/9266f7ca265e2c55b80a4a6978a53f3792c5b05b))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([f4663f7](https://github.com/avm-codes/sandbox-sdk-ts/commit/f4663f797200315fb6628f2e940040782dedbee9))

## 1.1.0 (2025-12-01)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/avm-codes/sandbox-sdk-ts/compare/v1.0.0...v1.1.0)

### Features

* **api:** api update ([ed5a543](https://github.com/avm-codes/sandbox-sdk-ts/commit/ed5a543729837a9a9999cb63fd6bd5cc1815f7f7))

## 1.0.0 (2025-11-11)

Full Changelog: [v0.0.1...v1.0.0](https://github.com/avm-codes/sandbox-sdk-ts/compare/v0.0.1...v1.0.0)

### Chores

* update SDK settings ([8289a6e](https://github.com/avm-codes/sandbox-sdk-ts/commit/8289a6e94b752c4d64b307363b5dd304fca178ff))
* update SDK settings ([22a352f](https://github.com/avm-codes/sandbox-sdk-ts/commit/22a352fbf100b3fe3e5b1fd9636a395f908077e1))
