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

## Interface Definition

### Node

```idl
interface Node {
  type: String;
  location: SourceLocation | null;
  data: Data | null;
};
```

### Data

```idl
interface Data {};
```

### SourceLocation

```idl
interface SourceLocation {
  start: Position;
  end: Position;
};
```

### Position

```idl
interface Position {
  line: uint32 >= 1;
  column: uint32 >= 0;
};
```

### Parent

```idl
interface Parent <: Node {
  children: [ Node ];
};
```

### Root

```idl
interface Root <: Node {
  type: "Root";
  children: [ Node ];
};
```
