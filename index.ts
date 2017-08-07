'use strict';

/**
 * Takes a given set of strings and adds/removes them from that set.  If the
 * string value is in the set it is removed.  If it is not in the set then
 * it is added.
 *
 * This is a curried function because why not...
 *
 * @param obj {Set} a set of strings used for the toggle operation
 * @param keys {string} N number of strings to use for the toggle
 * @returns {Set} the updated set of toggled strings.
 */
export function toggle(obj: Set<string>) {
	return (...keys: string[]): Set<string> => {
		for (const key of keys) {
			if (obj.has(key)) {
				obj.delete(key);
			} else {
				obj.add(key);
			}
		}

		return obj;
	};
}

/**
 * Takes a given set of strings and adds/removes them from the set if a given
 * condition (predicate) is met.
 * @param obj {Set} a set of strings used for the toggle operation
 * @param predicate {boolean} a boolean condition when true means that the
 * toggle operation will be performed.
 * @param keys {string} N number of strings to use for the toggle
 * @returns {Set} the updated set of toggled strings.
 */
export function toggleIf(obj: Set<string>, predicate: boolean) {
	return (...keys: string[]): Set<string> => {
		if (predicate) {
			toggle(obj)(...keys);
		}

		return obj;
	};
}

/**
 * Takes a given set of strings and removes them from the input set.
 *
 * @param obj {Set} a set of strings used for the toggle operation
 * @param keys {string} N number of strings that will be removed from the set
 * @returns {Set} the updated set of strings.
 */
export function toggleOff(obj: Set<string>) {
	return (...keys: string[]): Set<string> => {
		for (const key of keys) {
			obj.delete(key);
		}

		return obj;
	};
}

/**
 * Takes a given set of strings and removes them from the input set if a given
 * condition (predicate) is met.  If not met, then they are turned on.
 * @param obj {Set} a set of strings used for the toggle operation
 * @param predicate {boolean} a boolean condition when true means that the
 * items will be turned off in the set
 * @param keys {string} N number of strings to use for the toggle
 * @returns {Set} the updated set of toggled strings.
 */
export function toggleOffIf(obj: Set<string>, predicate: boolean) {
	return (...keys: string[]): Set<string> => {
		if (predicate) {
			toggleOff(obj)(...keys);
		} else {
			toggleOn(obj)(...keys);
		}

		return obj;
	};
}

/**
 * Takes a given set of strings and adds them to the input set.
 *
 * @param obj {Set} a set of strings used for the toggle operation
 * @param keys {string} N number of strings that will be added to the set
 * @returns {Set} the updated set of strings.
 */
export function toggleOn(obj: Set<string>) {
	return (...keys: string[]): Set<string> => {
		for (const key of keys) {
			obj.add(key);
		}

		return obj;
	};
}

/**
 * Takes a given set of strings and adds them to the input set if a given
 * condition (predicate) is met.  If not met, they they are turned off.
 * @param obj {Set} a set of strings used for the toggle operation
 * @param predicate {boolean} a boolean condition when true means that the
 * items will be turned on in the set
 * @param keys {string} N number of strings to use for the toggle
 * @returns {Set} the updated set of toggled strings.
 */
export function toggleOnIf(obj: Set<string>, predicate: boolean) {
	return (...keys: string[]): Set<string> => {
		if (predicate) {
			toggleOn(obj)(...keys);
		} else {
			toggleOff(obj)(...keys);
		}

		return obj;
	};
}
