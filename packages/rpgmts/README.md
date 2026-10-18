# rpgmts

🏰 Toolkit for building RPG Maker MV/MZ plugins with TypeScript

> [!IMPORTANT]
> This project is currently more of a proof of concept and not fully stable. Use it at your own risk. The code is currently also an absolute mess!

## Features

- Compile TypeScript plugins into JavaScript plugins for RPG Maker MV and MZ
- Split your code across multiple files and bundle them into a single plugin
- Use and bundle in Node.js modules
- Type safety and autocompletion for RPG Maker MV and MZ plugin development (work in progress)
- Set up your metadata, parameters, plugin commands, structs, etc. from TypeScript
  - This also allows you to reduce duplicate code by re-using things for example or using things like .map(), etc.
- Compile multiple TypeScript plugins from a single project directory

## Installation

First, install the CLI globally.

```bash
npm install -g rpgmts
yarn global add rpgmts
pnpm add -g rpgmts
bun add -g rpgmts
```

Then, initialize a new project:

```bash
rpgmts init
```

and follow the steps in the wizard.

## Contributing

If you want to contribute to this project, please check the [Contributing Guidelines](https://github.com/OfficialCRUGG/rpgmts/blob/main/CONTRIBUTING.md).