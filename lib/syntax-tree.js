/**
 * SyntaxTree
 * @return {SyntaxTree}
 */
function SyntaxTree() {
  
  if( !(this instanceof SyntaxTree) )
    return new SyntaxTree()
  
  this.root = { type: 'Root', children: [] }
  
}

/**
 * SyntaxTree prototype
 * @type {Object}
 */
SyntaxTree.prototype = {
  
  constructor: SyntaxTree,
  
}

// Exports
module.exports = SyntaxTree
