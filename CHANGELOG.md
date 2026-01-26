# Changelog

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
