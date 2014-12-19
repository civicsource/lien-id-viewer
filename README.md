#Knockout Lien ID Viewer

> Given a lien model, will show the lien address and/or the filing place if address is not present.

##Install with [Bower](http://bower.io/)

```
bower install civicsource/lien-id-viewer --save
```

Then add the folder to your project.

##How to Use

`require` the script and use it as a binding handler:

```html
<span data-bind="lienIdViewer: myLien"></span>
```

where `myLien` is an observable representing the lien model to be identified. 
This component requires the [knockout-place-viewer](https://github.com/civicsource/knockout-place-viewer).