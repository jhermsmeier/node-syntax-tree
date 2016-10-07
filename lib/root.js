var Node = require( './node' )
var inherit = require( 'bloodline' )

/**
 * Root
 * @return {Root}
 */
function Root() {

  if( !(this instanceof Root) )
    return new Root()

  Node.call( this )

  this.type = 'Root'
  this.children = []

}

/**
 * Root prototype
 * @type {Object}
 */
Root.prototype = {

  constructor: Root,

}

inherit( Root, Node )
// Exports
module.exports = Root
