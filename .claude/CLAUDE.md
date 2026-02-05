# Algebra-Precalculus PreTeXt Project

## Build Commands

Build web version (use this PATH fix for MiKTeX):
```bash
cd "/c/Users/CKG/Documents/pretext_math/pretext/algebra-precalculus"
PATH=$(echo "$PATH" | tr ':' '\n' | grep -v "claude.exe" | tr '\n' ':') /c/Users/CKG/AppData/Local/Programs/Python/Python313/python.exe -m pretext build web
```

View locally:
```bash
/c/Users/CKG/AppData/Local/Programs/Python/Python313/python.exe -m pretext view web
```

Deploy to GitHub Pages:
```bash
/c/Users/CKG/AppData/Local/Programs/Python/Python313/python.exe -m pretext deploy
```

Live site: https://CameronGeisler.github.io/algebra-precalculus/

## File Locations

- Source files: `source/*.ptx`
- Main book structure: `source/main.ptx`
- Custom macros: `source/docinfo.ptx`
- Chapter includes: Each chapter file uses `<xi:include>` for sections

### Custom Macros Available

- `\N`, `\Z`, `\Q`, `\R` - Number sets
- `\abs{x}`, `\set{...}`, `\brac{...}` - Delimiters
- `\eval{...}` - Evaluation bar
- `\floor{x}`, `\ceil{x}` - Floor/ceiling
- `\rad{x}`, `\ang{x}` - Radians/degrees
- `\crossmethod{TL}{BL}{TR}{BR}` - Cross multiplication diagram
