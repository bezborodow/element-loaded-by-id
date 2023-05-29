# `elementLoadedById()`

Detect when an [element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
matching an [ID](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)
is loaded into the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

## Synopsis

```javascript
elementLoadedById(id)
    .then((element) => {
        // ...
    });
```

## Syntax
```
elementLoadedById(id)
```

### Parameters

**`id`**: A unique ID for the element.

### Return Value

A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is:

 * **Already fulfilled**, if the element is found already loaded into the
   [document](https://developer.mozilla.org/en-US/docs/Web/API/Window/document).
 * **Already rejected**, if the element was not found and the DOM has already
   [finished
   loading](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState).
 * **Asynchronously fulfilled**, when a
   [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
   occurs that adds the element into the DOM.
 * **Asynchronously rejected**, when the DOM has [finished
   loading](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event)
   and the element has not been found.

## Description

`elementLoadedById()` will search the document for the element by ID.
It will continue searching until the DOM has finished loading ([`DOMContentLoaded`
event](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event)).

See also:

  * [`elementLoaded()`](https://github.com/bezborodow/element-loaded)
