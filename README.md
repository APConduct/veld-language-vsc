# Veld Language for VSCode/VSCodium

This extension provides language support for the Veld programming language in Visual Studio Code and VSCodium.

## Features

- Syntax highlighting for Veld files (`.veld`)
- Basic language configuration (comments, brackets, etc.)
- Code snippet support (coming soon)

## Installation

### From VSIX

1. Download the `.vsix` file from the latest release
2. Open VSCode/VSCodium
3. Go to Extensions view (Ctrl+Shift+X)
4. Click the "..." menu at the top of the Extensions view
5. Select "Install from VSIX..."
6. Navigate to the downloaded `.vsix` file and select it

### From Source

1. Clone the repository
2. Run `npm install`
3. Run `npm run compile`
4. Run `npx vsce package`
5. Install the generated `.vsix` file as described above

## Language Features

### Syntax Highlighting

The extension supports syntax highlighting for:
- Keywords (`fn`, `proc`, `if`, `else`, etc.)
- Built-in types (`i32`, `f64`, `bool`, etc.)
- Comments (line comments with `#` and block comments with `#[[` and `]]`)
- Strings, numbers, and other literals
- Operators and punctuation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
