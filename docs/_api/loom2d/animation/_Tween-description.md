A Tween animates numeric properties of objects. It uses different transition functions
to give the animations various styles.

The primary use of this class is to do standard animations like movement, fading,
rotation, etc. But there are no limits on what to animate; as long as the property you want
to animate is numeric (`int, uint, Number`), the tween can handle it. For a list
of available Transition types, look at the "Transitions" class.

Here is an example of a tween that moves an object to the right, rotates it, and
fades it out:

```as3
var tween:Tween = new Tween(object, 2.0, Transitions.EASE_IN_OUT);
tween.animate("x", object.x + 50);
tween.animate("rotation", deg2rad(45));
tween.fadeTo(0);    // equivalent to 'animate("alpha", 0)'
Loom2D.juggler.add(tween);
```

Note that the object is added to a juggler at the end of this sample. That's because a
tween will only be executed if its "advanceTime" method is executed regularly - the
juggler will do that for you, and will remove the tween when it is finished.

@see Juggler
@see Transitions
