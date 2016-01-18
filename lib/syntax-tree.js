/**
 * SyntaxTree
 * @return {SyntaxTree}
 */
function SyntaxTree() {
  
  if( !(this instanceof SyntaxTree) )
    return new SyntaxTree()
  
  this.root = new SyntaxTree.Root()
  
}

SyntaxTree.Node = require( './node' )
SyntaxTree.Root = require( './root' )

/**
 * SyntaxTree prototype
 * @type {Object}
 */
SyntaxTree.prototype = {
  
  constructor: SyntaxTree,
  
}

// Exports
module.exports = SyntaxTree
