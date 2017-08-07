'use strict';

import test from 'ava';
import {
	toggle,
	toggleIf,
	toggleIfElse,
	toggleOff,
	toggleOffIf,
	toggleOffIfElse,
	toggleOn,
	toggleOnIf,
	toggleOnIfElse
} from './index';

test('Test toggling a keys on/off', t => {
	const x: Set<string> = new Set<string>();
	t.truthy(x);

	x.add('abc');
	x.add('def');

	toggle(x)(
		'abc'
	);

	t.false(x.has('abc'));
	t.true(x.has('def'));

	toggle(x)(
		'abc'
	);

	t.true(x.has('abc'));
	t.true(x.has('def'));

	toggle(x)(
		'def'
	);

	t.true(x.has('abc'));
	t.false(x.has('def'));
});

test('Test toggling keys if a condition is met', t => {
	const x: Set<string> = new Set<string>();
	t.truthy(x);

	x.add('abc');
	x.add('def');

	toggleIf(x, false)(
		'abc',
		'def'
	);

	t.true(x.has('abc'));
	t.true(x.has('def'));

	toggleIf(x, true)(
		'abc',
		'def'
	);

	t.false(x.has('abc'));
	t.false(x.has('def'));
});

test('Test toggling keys on', t => {
	const x: Set<string> = new Set<string>();
	t.truthy(x);

	t.false(x.has('abc'));
	t.false(x.has('def'));

	toggleOn(x)(
		'abc',
		'def'
	);

	t.true(x.has('abc'));
	t.true(x.has('def'));
});

test('Test toggling keys off', t => {
	const x: Set<string> = new Set<string>();
	t.truthy(x);

	x.add('abc');
	x.add('def');

	t.true(x.has('abc'));
	t.true(x.has('def'));

	toggleOff(x)(
		'abc',
		'def'
	);

	t.false(x.has('abc'));
	t.false(x.has('def'));
});

test('Test toggling keys off when using predicate', t => {
	const x: Set<string> = new Set<string>();
	t.truthy(x);

	t.false(x.has('abc'));
	t.false(x.has('def'));

	toggleOffIf(x, false)(
		'abc',
		'def'
	);

	t.true(x.has('abc'));
	t.true(x.has('def'));

	toggleOffIf(x, true)(
		'abc',
		'def'
	);

	t.false(x.has('abc'));
	t.false(x.has('def'));
});

test('Test toggling keys on when using predicate', t => {
	const x: Set<string> = new Set<string>();
	t.truthy(x);

	x.add('abc');
	x.add('def');

	toggleOnIf(x, false)(
		'abc',
		'def'
	);

	t.false(x.has('abc'));
	t.false(x.has('def'));

	toggleOnIf(x, true)(
		'abc',
		'def'
	);

	t.true(x.has('abc'));
	t.true(x.has('def'));
});

test('Test toggling keys with if/else predicate', t => {
	const x: Set<string> = new Set<string>();
	t.truthy(x);

	x.add('abc');
	x.add('def');

	toggleIfElse(x, false)(
		'abc'
	)(
		'def'
	);

	t.true(x.has('abc'));
	t.false(x.has('def'));

	x.add('def');

	toggleIfElse(x, true)(
		'abc'
	)(
		'def'
	);

	t.false(x.has('abc'));
	t.true(x.has('def'));
});

test('Test toggling keys off with if/else predicate', t => {
	const x: Set<string> = new Set<string>();
	t.truthy(x);

	x.add('abc');
	x.add('def');
	x.add('ghi');

	toggleOffIfElse(x, false)(
		'abc'
	)(
		'def'
	);

	t.true(x.has('abc'));
	t.false(x.has('def'));
	t.true(x.has('ghi'));

	x.add('def');
	t.true(x.has('def'));

	toggleOffIfElse(x, true)(
		'abc'
	)(
		'def'
	);

	t.false(x.has('abc'));
	t.true(x.has('def'));
	t.true(x.has('ghi'));
});

test('Test toggle keys on with if/else predicate', t => {
	const x: Set<string> = new Set<string>();
	t.truthy(x);

	x.add('abc');
	x.add('def');

	toggleOnIfElse(x, false)(
		'abc'
	)(
		'ghi'
	);

	t.false(x.has('abc'));
	t.true(x.has('def'));
	t.true(x.has('ghi'));

	x.delete('abc');
	t.false(x.has('abc'));

	toggleOnIfElse(x, true)(
		'abc'
	)(
		'ghi'
	);

	t.true(x.has('abc'));
	t.true(x.has('def'));
	t.false(x.has('ghi'));
});
