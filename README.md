# pages
testing github pages for /docs

## ref

- Liquid docs: http://shopify.github.io/liquid/
- Jekyll docs: http://jekyllrb.com/docs/home/
- Jekyll docs source: https://github.com/jekyll/jekyll/tree/master/docs
- Jekyll defaults: http://jekyllrb.com/docs/configuration/#default-configuration
- Github pages defaults: https://help.github.com/articles/configuring-jekyll/

- https://mademistakes.com/articles/using-jekyll-2016/
- https://github.com/blog/1939-how-github-uses-github-to-document-github


## code

```as3
// as3 - actionscript syntax highlighting
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
/* ls - loomscript syntax highlighting */
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
