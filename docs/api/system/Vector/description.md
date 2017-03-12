A Vector is an ordered collection of items where every item is of the same type.

* The base type can be any class, including built in classes and custom classes.
* Vectors are dynamic (the number of items is allowed to change) unless the `setFixed` method is used to freeze the size.
* Items will be initialized to `null` if a non-zero size is provided to the constructor.
* When increasing the size of a Vector, the `push` or `unshift` methods must used. Assigning a value to an index beyond the final value will result in an out-of-bounds error.

Vectors can be instantiated via their constructor function, or with a literal syntax using square brackets (`[]`):

```as3
var v1:Vector.<String> = new Vector.<String>(26);
v1[0] = 'a';
v1[25] = 'z';

var v2:Vector.<String> = [ 'one', 'two', 'three' ];
```

Vector values are accessed via the square bracket operators (`[]`) and a zero-based index:

```as3
var m:String = v1[12];
v2[1] = 'TWO';
```

Iteration over vectors can be done in several ways:

* with a `for` loop, for manual iteration
* with a `for..in` loop, for iteration by index
* with a `for each` loop, for iteration by value
* using the callback iterators: `every()`, `filter()`, `forEach()`, `map()`, `some()`

```as3
var v:Vector.<String> = [ 'a', 'b', 'c' ];

for (var i:Number = 0; i < v.length; i++) {
   ⇥trace('v[' + i +'] =', v[i]);
}

for (var n:Number in v) {
   ⇥trace('v[' +n +'] =', v[n]);
}

for each(var s:String in v) {
   ⇥trace(s);
}
```
