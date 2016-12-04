# About snap-storage

`snap` is a JavaScript library to make using sessionStorage and localStorage just a bit easier. It includes JSON stringifying and parsing.

Installation options
===
+ Download from above
+ Clone: `git clone https://github.com/brimanning/simplevideo.git`
+ Bower: `bower install simplevideo`

Usage
===

You'll need to reference `snap` on your page.

	<head>
		<script src="snap-storage.js"></script>
	</head>

You'll now be able to access the following methods:

+ `setType(sessionType)` - Set the type of storage to use: `'local'` or `'session'`. The default is `'session'` and will be used if an invalid storage type is passed to this method. It is not required to call this method.
+ `set(key, value)` - Set a value to a given key. The value passed will be converted to a string. Note: any functions passed this way will not be retained.
+ `setItem(key, value)` - Same as `set`.
+ `get(key)` - Returns the value of a given key if set. If not set, returns null.
+ `getItem(key)` - Same as `get`.
+ `remove(key)` - Deletes the value at a given key.
+ `remoteItem(key)` - Same as `remove`.
+ `clear()` - Removes all set values.

Examples
===

Simple getting and setting:

	snap.set('test key', 'test value');
	snap.get('test key'); //returns 'test value'
	snap.remove('test key');
	snap.get('test key'); //returns null

Getting and setting with objects:

	var testObj = {
		prop1: 'value 1',
		prop2: 'value 2'
 	};
	snap.set('test object key', testObj);
	snap.get('test object key'); //returns object like testObj, but snap.get('test object key') != testObj

Boolean example:

	snap.set('test key 1', true);
	snap.get('test key 1') === true;
	snap.set('test key 2', false);
	snap.get('test key 2') === false;
