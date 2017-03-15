The `IAnimatable` interface describes objects that are animated depending on the passed time.

Any object that implements this interface can be added to a juggler.

When an object should no longer be animated, it has to be removed from the juggler. To do this, you can manually remove it via the method `juggler.remove(object)`, or the object can request to be removed by dispatching a Starling event with the type `Event.REMOVE_FROM_JUGGLER`. The "Tween" class is an example of a class that dispatches such an event; you don't have to remove tweens manually from the juggler.

@see Juggler
@see Tween
