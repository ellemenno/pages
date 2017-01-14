# pages
testing github pages for /docs

## code

```as3
package org.as3lib.mvc
{
        /**
         * Provides basic services for the "controller" of
         * a Model/View/Controller triad.
         * 
         * Based on original AS2 code by Colin Moock
         */
        public class AbstractController implements IController
        {
                /**
                 * Constructor
                 *
                 * @param   model   The model this controller's view is observing.
                 */
                public function AbstractController( model : * )
                {
                        this.model = model;
                }
                
                public function get model():* { return _model; }
                public function set model(model:*):void { _model = model; }
                protected var _model:*;
                
                
                public function get view():IView { return _view; }
                public function set view(view:IView):void { _view = view; }
                protected var _view:IView;
        }
}
```

```ls
package org.as3lib.mvc
{
        /**
         * Provides basic services for the "controller" of
         * a Model/View/Controller triad.
         * 
         * Based on original AS2 code by Colin Moock
         */
        public class AbstractController implements IController
        {
                /**
                 * Constructor
                 *
                 * @param   model   The model this controller's view is observing.
                 */
                public function AbstractController( model : * )
                {
                        this.model = model;
                }
                
                public function get model():* { return _model; }
                public function set model(model:*):void { _model = model; }
                protected var _model:*;
                
                
                public function get view():IView { return _view; }
                public function set view(view:IView):void { _view = view; }
                protected var _view:IView;
        }
}
```
