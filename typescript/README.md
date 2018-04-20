# Typescript

Installing typescript

```bash
npm install -g typescript
```

# Examples

## Simple
simple directory -> Simple typescript example based of
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

```bash
# Compile greeter to javascript
tsc greeter.ts # by default will compile to ES3
# To compile to ES2018:
tsc --target ES2018 greeter.ts
```

Note that when compiled/transpiled to ES3, the typescript compiler will compile to the code to a function since ES3
doesn't support classes natively. Compare this with compiling to ES2018 where the compiler will leverage native classes.

## Gulp
gulp directory -> More complex example based of
https://www.typescriptlang.org/docs/handbook/gulp.html

This example is more realistic combining gulp, npm and tsc.

```bash
cd gulp
npm install
gulp
```


# TST vs. Babel

Typescript and its compiler (tsc) to transpilation to javascript, including syntactic downleveling (e.g. converting classes to prototype functions), but it does NOT do polyfilling when you use newer ecmascript features that are more than syntactic sugar. For that you need Babel, which does the polyfilling.

Consider the tsc_vs_babel/main.ts example, that uses the string.include() method that was included in ES6 (=ES2015):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

When compiling that to ES3 (=default tsc target), the tsc compiler will give an error.
Note that even with errors, TSC still compiles to JS (that's by design).
```bash
$ tsc main.ts # Gives error
main.ts(3,17): error TS2339: Property 'includes' does not exist on type 'string'.
```
When checking the compiled file (main.js), you'll notice that it exactly matches the source-file main.ts. In other words, TSC didn't provide a polyfill for the string.include() method.
This code won't work when ran in ES3 or any version below ES6.

Note that if you compile to ES6 or above, that you don't get the error from tsc since ES6 does support string.include().
```bash
$ tsc --target ES6 main.ts # No error!
```

Now, if you still want to transpile to ES3 but have working code, you'll need to use Babel to do polyfilling of the string.include() function.

You don't do this by running the babel compiler command (like I thought at first), but rather by modifying your code to import/require the "babel-polyfill" module which contains the actual polyfill code.

If you run the resulting code in NodeJS, the polyfill code will just be loaded as a module
If you run it in a browser, you will need to include a polyfill.js file in your HTML. In reality, this is often intelligently bundled together with your actual application code when using something like webpack or browserify.