# Webassembly

In order to compile to webassembly, you'll need emscripten which compiles LLVM bit-code to webassembly (wasm).
Emscripten is the defacto standard way to compile to wasm.

Because Emscripten takes LLVM bit-code as input, you can use it to compile a variety of languages (e.g. Rust) to WASM.

From the github homepage (https://github.com/kripken/emscripten):

Emscripten is an LLVM-to-JavaScript compiler. It takes LLVM bitcode - which can be generated from C/C++, using llvm-gcc (DragonEgg) or clang, or any other language that can be converted into LLVM - and compiles that into JavaScript, which can be run on the web (or anywhere else JavaScript can run).

## Getting started

Using this tutor: http://kripken.github.io/emscripten-site/docs/getting_started/Tutorial.html

### Installing emscripten

```bash
git clone https://github.com/juj/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
# Activate:
source ./emsdk_env.sh
cd ..
emcc -v # show version
```

### Compiling to WASM

```bash
emcc hello_world.c #generates a.out.js
emcc hello_world.c -o hello.html # generates hello.js and hello.html
```