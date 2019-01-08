'use strict';

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
} from '../index';

test('Test toggling a keys on/off', () => {
	const x: Set<string> = new Set<string>();
	expect(x).toBeDefined();

	x.add('abc');
	x.add('def');

	toggle(x)(
		'abc'
	);

	expect(x.has('abc')).toBe(false);
	expect(x.has('def')).toBe(true);

	toggle(x)(
		'abc'
	);

	expect(x.has('abc')).toBe(true);
	expect(x.has('def')).toBe(true);

	toggle(x)(
		'def'
	);

	expect(x.has('abc')).toBe(true);
	expect(x.has('def')).toBe(false);
});

test('Test toggling keys if a condition is met', () => {
	const x: Set<string> = new Set<string>();
	expect(x).toBeDefined();

	x.add('abc');
	x.add('def');

	toggleIf(x, false)(
		'abc',
		'def'
	);

	expect(x.has('abc')).toBe(true);
	expect(x.has('def')).toBe(true);

	toggleIf(x, true)(
		'abc',
		'def'
	);

	expect(x.has('abc')).toBe(false);
	expect(x.has('def')).toBe(false);
});

test('Test toggling keys on', () => {
	const x: Set<string> = new Set<string>();
	expect(x).toBeDefined();

	expect(x.has('abc')).toBe(false);
	expect(x.has('def')).toBe(false);

	toggleOn(x)(
		'abc',
		'def'
	);

	expect(x.has('abc')).toBe(true);
	expect(x.has('def')).toBe(true);
});

test('Test toggling keys off', () => {
	const x: Set<string> = new Set<string>();
	expect(x).toBeDefined();

	x.add('abc');
	x.add('def');

	expect(x.has('abc')).toBe(true);
	expect(x.has('def')).toBe(true);

	toggleOff(x)(
		'abc',
		'def'
	);

	expect(x.has('abc')).toBe(false);
	expect(x.has('def')).toBe(false);
});

test('Test toggling keys off when using predicate', () => {
	const x: Set<string> = new Set<string>();
	expect(x).toBeDefined();

	expect(x.has('abc')).toBe(false);
	expect(x.has('def')).toBe(false);

	toggleOffIf(x, false)(
		'abc',
		'def'
	);

	expect(x.has('abc')).toBe(true);
	expect(x.has('def')).toBe(true);

	toggleOffIf(x, true)(
		'abc',
		'def'
	);

	expect(x.has('abc')).toBe(false);
	expect(x.has('def')).toBe(false);
});

test('Test toggling keys on when using predicate', () => {
	const x: Set<string> = new Set<string>();
	expect(x).toBeDefined();

	x.add('abc');
	x.add('def');

	toggleOnIf(x, false)(
		'abc',
		'def'
	);

	expect(x.has('abc')).toBe(false);
	expect(x.has('def')).toBe(false);

	toggleOnIf(x, true)(
		'abc',
		'def'
	);

	expect(x.has('abc')).toBe(true);
	expect(x.has('def')).toBe(true);
});

test('Test toggling keys with if/else predicate', () => {
	const x: Set<string> = new Set<string>();
	expect(x).toBeDefined();

	x.add('abc');
	x.add('def');

	toggleIfElse(x, false)(
		'abc'
	)(
		'def'
	);

	expect(x.has('abc')).toBe(true);
	expect(x.has('def')).toBe(false);

	x.add('def');

	toggleIfElse(x, true)(
		'abc'
	)(
		'def'
	);

	expect(x.has('abc')).toBe(false);
	expect(x.has('def')).toBe(true);
});

test('Test toggling keys off with if/else predicate', () => {
	const x: Set<string> = new Set<string>();
	expect(x).toBeDefined();

	x.add('abc');
	x.add('def');
	x.add('ghi');

	toggleOffIfElse(x, false)(
		'abc'
	)(
		'def'
	);

	expect(x.has('abc')).toBe(true);
	expect(x.has('def')).toBe(false);
	expect(x.has('ghi')).toBe(true);

	x.add('def');
	expect(x.has('def')).toBe(true);

	toggleOffIfElse(x, true)(
		'abc'
	)(
		'def'
	);

	expect(x.has('abc')).toBe(false);
	expect(x.has('def')).toBe(true);
	expect(x.has('ghi')).toBe(true);
});

test('Test toggle keys on with if/else predicate', () => {
	const x: Set<string> = new Set<string>();
	expect(x).toBeDefined();

	x.add('abc');
	x.add('def');

	toggleOnIfElse(x, false)(
		'abc'
	)(
		'ghi'
	);

	expect(x.has('abc')).toBe(false);
	expect(x.has('def')).toBe(true);
	expect(x.has('ghi')).toBe(true);

	x.delete('abc');
	expect(x.has('abc')).toBe(false);

	toggleOnIfElse(x, true)(
		'abc'
	)(
		'ghi'
	);

	expect(x.has('abc')).toBe(true);
	expect(x.has('def')).toBe(true);
	expect(x.has('ghi')).toBe(false);
});
