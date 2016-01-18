/**
 * Node
 * @return {Node}
 */
function Node( properties ) {
  
  if( !(this instanceof Node) )
    return new Node( properties )
  
  this.type = 'Node'
  this.location = void 0
  this.data = void 0
  this.parent = void 0
  this.children = void 0
  
  if( properties != null ) {
    Object.assign( this, properties )
  }
  
}

/**
 * Node prototype
 * @type {Object}
 */
Node.prototype = {
  
  constructor: Node,
  
  get isParent() {
    return this.children &&
      this.children.length > 0
  },
  
  get isChild() {
    return this.parent != null
  },
  
  get firstChild() {
    return this.children &&
      this.children[0]
  },
  
  get lastChild() {
    return this.children &&
      this.children[ this.children.length - 1 ]
  },
  
  get previousSibling() {
    if( this.isChild ) {
      var index = this.parent.children.indexOf( this )
      if( index >= 1 ) {
        return this.parent.children[ index ]
      }
    }
  },
  
  get nextSibling() {
    if( this.isChild ) {
      var index = this.parent.children.indexOf( this )
      if( index >= 0 && index + 1 < this.parent.children.length ) {
        return this.parent.children[ index + 1 ]
      }
    }
  },
  
  prependChild: function( child ) {
    this.children = this.children || []
    this.children.unshift( child )
    return this
  },
  
  appendChild: function( child ) {
    this.children = this.children || []
    this.children.push( child )
    return this
  },
  
  insertBefore: function( child, previousChild ) {
    
    if( previousChild == null )
      return this.prependChild( child )
    
    if( this.children == null ) {
      this.children = [ child ]
    }
    
    var index = this.children.indexOf( previousChild )
    if( index === 0 ) {
      this.children.unshift( child )
    } else if( index >= 0 ) {
      this.children.splice( index, 0, child )
    }
    
    return this
    
  },
  
  insertAfter: function( child, nextChild ) {
    
    if( previousChild == null )
      return this.prependChild( child )
    
    if( this.children == null ) {
      this.children = [ child ]
    }
    
    var index = this.children.indexOf( previousChild )
    if( index === this.children.length - 1 ) {
      this.children.push( child )
    } else if( index >= 0 ) {
      this.children.splice( index + 1, 0, child )
    }
    
    return this
    
  },
  
  replaceChild: function( oldChild, child ) {
    
    if( this.children == null ) {
      this.children = [ child ]
    }
    
    var index = this.children.indexOf( oldChild )
    if( index >= 0 ) {
      this.children.splice( index, 1, child )
    }
    
    return this
    
  },
  
}

// Exports
module.exports = Node
