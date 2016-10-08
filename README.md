# Syntax Tree
[![npm](http://img.shields.io/npm/v/syntax-tree.svg?style=flat-square)](https://npmjs.com/package/syntax-tree)
[![npm downloads](http://img.shields.io/npm/dm/syntax-tree.svg?style=flat-square)](https://npmjs.com/package/syntax-tree)

## Install via [npm](https://npmjs.com)

```sh
$ npm install --save syntax-tree
```

## Usage

```js
var SyntaxTree = require( 'syntax-tree' )
```

```js
// Create a new tree
var tree = new SyntaxTree()

// Create a new node
var childNode = new SyntaxTree.Node({
  type: 'ArbitraryNode'
})

// Add nodes to the tree
tree.root.appendChild( childNode )
tree.root.prependChild( otherChildNode )

// Replace a node
someNode.replaceChild( oldChild, newChild )

// Insertions
someNode.insertBefore( newChild, existingChild )
someNode.insertAfter( newChild, existingChild )

// Removals
someNode.removeChild( child )
otherNode.remove()

// Siblings
someNode.nextSibling.appendChild( newChild )
someNode.previousSibling.appendChild( newChild )

// Children
someNode.firstChild // -> child|null
someNode.lastChild // -> child|null

// Relationships
someNode.isParent // -> true|false
someNode.isChild // -> true|false
```

## Interface Definition

### Node

```idl
interface Node {
  
  readonly attribute isRoot: boolean;
  readonly attribute isParent: boolean;
  readonly attribute isChild: boolean;
  readonly attribute firstChild: Child | null;
  readonly attribute lastChild: Child | null;
  readonly attribute previousSibling: Node | null;
  readonly attribute nextSibling: Node | null;
  
  type: String;
  parent: Node?;
  children: [ Child ];
  data: Data | null;
  
};
```

### Data

```idl
interface Data {};
```

### Root

```idl
interface Root <: Node {
  type: "Root";
  parent: Root;
};
```
