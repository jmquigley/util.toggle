# util.toggle

> Functions used to toggle strings on/off within a Set

[![Build Status](https://travis-ci.org/jmquigley/util.toggle.svg?branch=master)](https://travis-ci.org/jmquigley/util.toggle)
[![tslint code style](https://img.shields.io/badge/code_style-TSlint-5ed9c7.svg)](https://palantir.github.io/tslint/)
[![Test Runner](https://img.shields.io/badge/testing-ava-blue.svg)](https://github.com/avajs/ava)
[![NPM](https://img.shields.io/npm/v/util.toggle.svg)](https://www.npmjs.com/package/util.toggle)
[![Coverage Status](https://coveralls.io/repos/github/jmquigley/util.toggle/badge.svg?branch=master)](https://coveralls.io/github/jmquigley/util.toggle?branch=master)


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
import {Set} from 'immutable';
import {toggle} from 'util.toggle';

let x: Set<string> = Set<string>();

x = x.add('abc');
x = x.add('def');

// x => {'abc', 'def'}

x = toggle(x)(
	'abc'
);

// x => {'def'}

x = toggle(x)(
	'abc'
);

// x => {'abc', 'def'}

x = toggle(x)(
	'abc',
	'def'
);

// x => {}
```

#### Toggle string based on predicate

```javascript
import {Set} from 'immutable';
import {toggleIf} from 'util.toggle';

let x: Set<string> = Set<string>();

x = x.add('abc');
x = x.add('def');

// x => {'abc', 'def'}

x = toggleIf(x, false)(
	'abc'
);

// x => {'abc', 'def'}

x = toggle(x, true)(
	'abc'
);

// x => {'def'}
```

## API

- [toggle()](docs/index.md#toggle)
- [toggleOn()](docs/index.md#toggleOn)
- [toggleOff()](docs/index.md#toggleOff)
- [toggleIf()](docs/index.md#toggleIf)
- [toggleOnIf()](docs/index.md#toggleOnIf)
- [toggleOffIf()](docs/index.md#toggleOffIf)
