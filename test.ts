'use strict';

import test from 'ava';
import {Set} from 'immutable';
import {
	toggle,
	toggleIf,
	toggleOff,
	toggleOffIf,
	toggleOn,
	toggleOnIf
} from './index';

test('Test toggling a keys on/off', t => {
	let x: Set<string> = Set<string>();
	t.truthy(x);

	x = x.add('abc');
	x = x.add('def');

	x = toggle(x)(
		'abc'
	);

	t.false(x.has('abc'));
	t.true(x.has('def'));

	x = toggle(x)(
		'abc'
	);

	t.true(x.has('abc'));
	t.true(x.has('def'));

	x = toggle(x)(
		'def'
	);

	t.true(x.has('abc'));
	t.false(x.has('def'));
});

test('Test toggling keys if a condition is met', t => {
	let x: Set<string> = Set<string>();
	t.truthy(x);

	x = x.add('abc');
	x = x.add('def');

	x = toggleIf(x, false)(
		'abc',
		'def'
	);

	t.true(x.has('abc'));
	t.true(x.has('def'));

	x = toggleIf(x, true)(
		'abc',
		'def'
	);

	t.false(x.has('abc'));
	t.false(x.has('def'));
});

test('Test toggling keys on', t => {
	let x: Set<string> = Set<string>();
	t.truthy(x);

	t.false(x.has('abc'));
	t.false(x.has('def'));

	x = toggleOn(x)(
		'abc',
		'def'
	);

	t.true(x.has('abc'));
	t.true(x.has('def'));
});

test('Test toggling keys off', t => {
	let x: Set<string> = Set<string>();
	t.truthy(x);

	x = x.add('abc');
	x = x.add('def');

	t.true(x.has('abc'));
	t.true(x.has('def'));

	x = toggleOff(x)(
		'abc',
		'def'
	);

	t.false(x.has('abc'));
	t.false(x.has('def'));
});

test('Test toggling keys off when using predicate', t => {
	let x: Set<string> = Set<string>();
	t.truthy(x);

	x = x.add('abc');
	x = x.add('def');

	t.true(x.has('abc'));
	t.true(x.has('def'));

	x = toggleOffIf(x, false)(
		'abc',
		'def'
	);

	t.true(x.has('abc'));
	t.true(x.has('def'));

	x = toggleOffIf(x, true)(
		'abc',
		'def'
	);

	t.false(x.has('abc'));
	t.false(x.has('def'));
});

test('Test toggling keys on when using predicate', t => {
	let x: Set<string> = Set<string>();
	t.truthy(x);

	t.false(x.has('abc'));
	t.false(x.has('def'));

	x = toggleOnIf(x, false)(
		'abc',
		'def'
	);

	t.false(x.has('abc'));
	t.false(x.has('def'));

	x = toggleOnIf(x, true)(
		'abc',
		'def'
	);

	t.true(x.has('abc'));
	t.true(x.has('def'));
});
