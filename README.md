# util.toggle

> Functions used to toggle strings on/off within a Set

[![build](https://github.com/jmquigley/util.toggle/workflows/build/badge.svg)](https://github.com/jmquigley/util.toggle/actions)
[![analysis](https://img.shields.io/badge/analysis-tslint-9cf.svg)](https://palantir.github.io/tslint/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![testing](https://img.shields.io/badge/testing-jest-blue.svg)](https://facebook.github.io/jest/)
[![NPM](https://img.shields.io/npm/v/util.toggle.svg)](https://www.npmjs.com/package/util.toggle)


## Installation

This module uses [yarn](https://yarnpkg.com/en/) to manage dependencies and run scripts for development.

To install as an application dependency:
```
$ yarn add --dev util.toggle
```

To build the app and run all tests:
```
$ yarn run all
```


## Overview

A set of functions used to toggle strings on/off within a `Set` of strings.  The use case for this is managing the set of class descriptors programatically on a React component.


## Usage

#### Toggle string on/off

```javascript
import {toggle} from 'util.toggle';

const x: Set<string> = new Set<string>();

x.add('abc');
x.add('def');

// x => {'abc', 'def'}

toggle(x)(
	'abc'
);

// x => {'def'}

toggle(x)(
	'abc'
);

// x => {'abc', 'def'}

toggle(x)(
	'abc',
	'def'
);

// x => {}
```

#### Toggle string based on predicate

```javascript
import {toggleIf} from 'util.toggle';

const x: Set<string> = new Set<string>();

x.add('abc');
x.add('def');

// x => {'abc', 'def'}

toggleIf(x, false)(
	'abc'
);

// x => {'abc', 'def'}

toggle(x, true)(
	'abc'
);

// x => {'def'}
```

#### Toggle string on based on if/else predicate

```javascript
import {toggleOnIfElse} from 'util.toggle';

const x: Set<string> = new Set<string>();

x.add('abc');

// x => {'abc'}

toggleOnIfElse(x, false)(
	'abc'
)(
	'def'
);

// x => {'abc', 'def'}

x.delete('abc');

// x => {'def'}

toggleOnIfElse(x, true)(
	'abc'
)(
	'ghi'
);

// x => {'abc', 'def'}
```

## API

- [toggle()](docs/index.md#toggle)
- [toggleIf()](docs/index.md#toggleIf)
- [toggleIfElse()](docs/index.md#toggleIfElse)
- [toggleOff()](docs/index.md#toggleOff)
- [toggleOffIf()](docs/index.md#toggleOffIf)
- [toggleOffIfElse()](docs/index.md#toggleOffIfElse)
- [toggleOn()](docs/index.md#toggleOn)
- [toggleOnIf()](docs/index.md#toggleOnIf)
- [toggleOnIfElse()](docs/index.md#toggleOnIfElse)
