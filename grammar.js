/**
 * @file Tree-sitter for athena
 * @author Jeck0v <arnaud.fischer75@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "athena",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
