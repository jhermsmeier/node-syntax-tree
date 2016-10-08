/**
 * Node
 * @return {Node}
 */
function Node( properties ) {

  if( !(this instanceof Node) )
    return new Node( properties )

  this.type = 'Node'
  this.parent = null
  this.children = []

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

  get isRoot() {
    return this.parent === this
  },

  get isParent() {
    return this.children.length > 0
  },

  get isChild() {
    return this.parent != null ||
      !this.parent.hasChild( this )
  },

  get firstChild() {
    return this.children[0]
  },

  get lastChild() {
    return this.children[ this.children.length - 1 ]
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

  hasChild: function( node ) {
    return !!~this.children.indexOf( node )
  },

  prependChild: function( node ) {
    this.children.unshift( node )
    node.remove()
    node.parent = this
    return this
  },

  appendChild: function( node ) {
    this.children.push( node )
    node.remove()
    node.parent = this
    return this
  },

  insertBefore: function( node, previousNode ) {

    if( previousNode == null ) {
      return this.prependChild( node )
    }

    var index = this.children.indexOf( previousNode )

    if( index === 0 ) {
      this.children.unshift( node )
    } else if( index > 0 ) {
      this.children.splice( index, 0, node )[0]
    } else {
      this.children.unshift( node )
    }

    node.remove()
    node.parent = this

    return this

  },

  insertAfter: function( node, nextNode ) {

    if( nextNode == null ) {
      return this.appendChild( node )
    }

    var index = this.children.indexOf( nextNode )

    if( index === this.children.length - 1 ) {
      this.children.push( node )
    } else if( index >= 0 ) {
      this.children.splice( index + 1, 0, node )[0]
    } else {
      this.children.push( node )
    }

    node.remove()
    node.parent = this

    return this

  },

  replaceChild: function( oldNode, newNode ) {

    var child = null
    var index = this.children.indexOf( oldNode )

    if( index >= 0 ) {
      child = this.children.splice( index, 1, newNode )[0]
      child.parent = null
      newNode.remove()
      newNode.parent = this
    }

    return this

  },

  removeChild: function( node ) {

    var child = null
    var index = this.children.indexOf( node )

    if( index >= 0 ) {
      child = this.children.splice( index, 1 )[0]
      child.parent = null
    }

    return child || node

  },

  remove: function() {

    if( this.isRoot ) {
      throw new Error( 'Cannot remove root node' )
    }

    this.parent.removeChild( this )
    this.parent = null

    return this

  },

}

// Exports
module.exports = Node
