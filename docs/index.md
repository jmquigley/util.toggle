## Functions

<dl>
<dt><a href="#toggle">toggle(obj, keys)</a> ⇒ <code>Set</code></dt>
<dd><p>Takes a given set of strings and adds/removes them from that set.  If the
string value is in the set it is removed.  If it is not in the set then
it is added.</p>
<p>This is a curried function because why not...</p>
</dd>
<dt><a href="#toggleIf">toggleIf(obj, predicate, keys)</a> ⇒ <code>Set</code></dt>
<dd><p>Takes a given set of strings and adds/removes them from the set if a given
condition (predicate) is met.</p>
</dd>
<dt><a href="#toggleIfElse">toggleIfElse(obj, predicate, ifKeys, elseKeys)</a> ⇒ <code>Set</code></dt>
<dd><p>Takes a given set of strings and adds/removes them from the set if a given
condition (predicate) is met.  If it is not met, then a secondary (else) set
of strings are added/removed.</p>
</dd>
<dt><a href="#toggleOff">toggleOff(obj, keys)</a> ⇒ <code>Set</code></dt>
<dd><p>Takes a given set of strings and removes them from the input set.</p>
</dd>
<dt><a href="#toggleOffIf">toggleOffIf(obj, predicate, keys)</a> ⇒ <code>Set</code></dt>
<dd><p>Takes a given set of strings and removes them from the input set if a given
condition (predicate) is met.  If not met, then they are turned on.</p>
</dd>
<dt><a href="#toggleOffIfElse">toggleOffIfElse(obj, predicate, ifKeys, elseKeys)</a> ⇒ <code>Set</code></dt>
<dd><p>Takes a given set of strings and removes them from the input set if a given
condition (predicate) is met.  If not met, then different set of strings are
turned off.</p>
</dd>
<dt><a href="#toggleOn">toggleOn(obj, keys)</a> ⇒ <code>Set</code></dt>
<dd><p>Takes a given set of strings and adds them to the input set.</p>
</dd>
<dt><a href="#toggleOnIf">toggleOnIf(obj, predicate, keys)</a> ⇒ <code>Set</code></dt>
<dd><p>Takes a given set of strings and adds them to the input set if a given
condition (predicate) is met.  If not met, they they are turned off.</p>
</dd>
<dt><a href="#toggleOnIfElse">toggleOnIfElse(obj, predicate, ifKeys, elseKeys)</a> ⇒ <code>Set</code></dt>
<dd><p>Takes a given set of strings and adds them from the input set if a given
condition (predicate) is met.  If not met, then different set of strings are
turned on.</p>
</dd>
</dl>

<a name="toggle"></a>

## toggle(obj, keys) ⇒ <code>Set</code>
Takes a given set of strings and adds/removes them from that set.  If the
string value is in the set it is removed.  If it is not in the set then
it is added.

This is a curried function because why not...

**Kind**: global function  
**Returns**: <code>Set</code> - the updated set of toggled strings.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Set</code> | a set of strings used for the toggle operation |
| keys | <code>string</code> | N number of strings to use for the toggle |

<a name="toggleIf"></a>

## toggleIf(obj, predicate, keys) ⇒ <code>Set</code>
Takes a given set of strings and adds/removes them from the set if a given
condition (predicate) is met.

**Kind**: global function  
**Returns**: <code>Set</code> - the updated set of toggled strings.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Set</code> | a set of strings used for the toggle operation |
| predicate | <code>boolean</code> | a boolean condition when true means that the toggle operation will be performed. |
| keys | <code>string</code> | N number of strings to use for the toggle |

<a name="toggleIfElse"></a>

## toggleIfElse(obj, predicate, ifKeys, elseKeys) ⇒ <code>Set</code>
Takes a given set of strings and adds/removes them from the set if a given
condition (predicate) is met.  If it is not met, then a secondary (else) set
of strings are added/removed.

**Kind**: global function  
**Returns**: <code>Set</code> - the updated set of toggled strings.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Set</code> | a set of strings used for the toggle operation |
| predicate | <code>boolean</code> | a boolean condition when true means that the toggle operation will be performed. |
| ifKeys | <code>string</code> | N number of strings to use for the if toggle |
| elseKeys | <code>string</code> | N number of strings to use for the else toggle |

<a name="toggleOff"></a>

## toggleOff(obj, keys) ⇒ <code>Set</code>
Takes a given set of strings and removes them from the input set.

**Kind**: global function  
**Returns**: <code>Set</code> - the updated set of strings.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Set</code> | a set of strings used for the toggle operation |
| keys | <code>string</code> | N number of strings that will be removed from the set |

<a name="toggleOffIf"></a>

## toggleOffIf(obj, predicate, keys) ⇒ <code>Set</code>
Takes a given set of strings and removes them from the input set if a given
condition (predicate) is met.  If not met, then they are turned on.

**Kind**: global function  
**Returns**: <code>Set</code> - the updated set of toggled strings.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Set</code> | a set of strings used for the toggle operation |
| predicate | <code>boolean</code> | a boolean condition when true means that the items will be turned off in the set |
| keys | <code>string</code> | N number of strings to use for the toggle |

<a name="toggleOffIfElse"></a>

## toggleOffIfElse(obj, predicate, ifKeys, elseKeys) ⇒ <code>Set</code>
Takes a given set of strings and removes them from the input set if a given
condition (predicate) is met.  If not met, then different set of strings are
turned off.

**Kind**: global function  
**Returns**: <code>Set</code> - the updated set of toggled strings.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Set</code> | a set of strings used for the toggle operation |
| predicate | <code>boolean</code> | a boolean condition when true means that the items will be turned off in the set |
| ifKeys | <code>string</code> | N number of strings to use for the if toggle |
| elseKeys | <code>string</code> | N number of strings to use for the else toggle |

<a name="toggleOn"></a>

## toggleOn(obj, keys) ⇒ <code>Set</code>
Takes a given set of strings and adds them to the input set.

**Kind**: global function  
**Returns**: <code>Set</code> - the updated set of strings.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Set</code> | a set of strings used for the toggle operation |
| keys | <code>string</code> | N number of strings that will be added to the set |

<a name="toggleOnIf"></a>

## toggleOnIf(obj, predicate, keys) ⇒ <code>Set</code>
Takes a given set of strings and adds them to the input set if a given
condition (predicate) is met.  If not met, they they are turned off.

**Kind**: global function  
**Returns**: <code>Set</code> - the updated set of toggled strings.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Set</code> | a set of strings used for the toggle operation |
| predicate | <code>boolean</code> | a boolean condition when true means that the items will be turned on in the set |
| keys | <code>string</code> | N number of strings to use for the toggle |

<a name="toggleOnIfElse"></a>

## toggleOnIfElse(obj, predicate, ifKeys, elseKeys) ⇒ <code>Set</code>
Takes a given set of strings and adds them from the input set if a given
condition (predicate) is met.  If not met, then different set of strings are
turned on.

**Kind**: global function  
**Returns**: <code>Set</code> - the updated set of toggled strings.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Set</code> | a set of strings used for the toggle operation |
| predicate | <code>boolean</code> | a boolean condition when true means that the items will be turned off in the set |
| ifKeys | <code>string</code> | N number of strings to use for the if toggle |
| elseKeys | <code>string</code> | N number of strings to use for the else toggle |

