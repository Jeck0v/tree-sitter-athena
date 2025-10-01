package tree_sitter_athena_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_athena "github.com/jeck0v/tree-sitter-athena/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_athena.Language())
	if language == nil {
		t.Errorf("Error loading Athena grammar")
	}
}
