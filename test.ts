'use strict';

import test from 'ava';
import {
	toggle,
	toggleIf,
	toggleOff,
	toggleOffIf,
	toggleOn,
	toggleOnIf
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

	x.add('abc');
	x.add('def');

	t.true(x.has('abc'));
	t.true(x.has('def'));

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

	t.false(x.has('abc'));
	t.false(x.has('def'));

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
