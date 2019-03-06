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
emcc hello_world.c #generates a.out.js, a.out.wasm
# Use -g to also compile to 'wast' which is the human-readable text version of wasm
emcc -g hello_world.c

# Run it:
node a.out.js
```

a.out.wasm is the WebAssembly file containing the compiled code, and a.out.js is a JavaScript file containing the runtime support to load and execute it.

You can also compile to HTML, which will also generate a small container webpage.
```sh
emcc hello_world.c -o hello.html # generates hello.js, hello.wasm, hello.html
```

To get hello.html working, you need to actually host the hello.html from a webserver since hello.html will try to load hello.wasm and hello.js dynamically which isn't allowed from the file:/// protocol for security
```sh
python -m SimpleHTTPServer 8080
```