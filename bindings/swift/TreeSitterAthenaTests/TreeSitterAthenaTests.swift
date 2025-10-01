import XCTest
import SwiftTreeSitter
import TreeSitterAthena

final class TreeSitterAthenaTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_athena())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Athena grammar")
    }
}
