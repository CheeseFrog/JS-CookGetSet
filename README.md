# JS-CookGetSet
A simple JavaScript function; variable setter/getter in HTML5 localStorage with cookie fallback.
Can be used to save variables of various object types between sessions.

### Usage:
`cookset(key_name, key_value)` --> returns `key_value`, and sets a key/value pair in localStorage, or as a cookie if unsupported.  
`cookset(key_name, null)` --> returns `null`, and deletes the pair.  
`cookget(key_name)` --> returns `key_value`, or `null` if not set.


### Example #1
Batch save/load variables in a session
~~~~js
var vars = {variable1, variable2, ...};
vars = Object.keys(vars);

function save() {
for (var i in vars) cookset(vars[i], window[vars[i]]);
cookset("saved",1);
}

function load() {
if (cookget("saved") for (var i in vars) window[vars[i]] = cookget(vars[i]);
}
~~~~

<sub>*Note, I use "$_" as an arbitrary unique prefix to key_name. You can change or delete this in the code to your liking.</sub>
