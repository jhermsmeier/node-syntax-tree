# Syntax Tree
[![npm](http://img.shields.io/npm/v/syntax-tree.svg?style=flat-square)](https://npmjs.com/syntax-tree)
[![npm downloads](http://img.shields.io/npm/dm/syntax-tree.svg?style=flat-square)](https://npmjs.com/syntax-tree)

## Install via [npm](https://npmjs.com)

```sh
$ npm install syntax-tree
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
  type: String;
  data: Data | null;
};
```

### Data

```idl
interface Data {};
```

### Child

```idl
interface Child <: Node {
  readonly attribute parent: Parent;
};
```

### Parent

```idl
interface Parent <: Node {
  children: [ Child ];
};
```

### Root

```idl
interface Root <: Parent {
  type: "Root";
};
```
