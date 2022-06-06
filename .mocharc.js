'use strict';

// Here's a JavaScript-based config file.
// If you need conditional logic, you might want to use this type of config.
// Otherwise, JSON or YAML is recommended.
console.log("load "+__filename);
module.exports = {
  "extension": ["ts"],
  "spec": "src/**/*.spec.ts",
  "require": [
    "test/babel-register.mjs",
    "test/hooks.mjs",
    "test/fixtures.mjs",
  ],
  "reporter":"tap", //spec,dot,nyan,tap,landing,list,progress,json,json-stream,min,doc,markdown,xunit
};
