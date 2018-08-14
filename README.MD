# Gradient.js
This adds an gradiant-animation like instagram andriod app gradient to your website


## Syntax

```js
new gradient(slector, { options })
```


## Usage
[it does not depend on any external dependency]
Include the script in your webpages

```html
<script async src="./dist/gradient.min.js"></script>
```

then initialize the gradiant this way.
You can animate diifferent elements

```js
new gradient(document.getElementById("mainer") /*the `div` you want to animate */, {
    interval: 23, // the time interval used to run the loop
    colors: new Array(
        [199, 238, 180],
        [60, 180, 75],
        [232, 238, 180],
        [209, 220, 222]
        )
    }
).animate()

```
### OR

```js
var sel = document.getElementById("mainer") // the `div` you want to animate
var grad = new gradient(sel, Object.assign({
    interval: 23, // the time interval used to run the loop
    colors: new Array(
        [199, 238, 180],
        [60, 180, 75],
        [232, 238, 180],
        [209, 220, 222]
        )
    })
)
grad.animate()

```

> The transition won't start until you hit the  `.animate()` method

by default, if no options are passed, `gradient.js` uses an internal configuration.

```js
var defaults = Object.assign({
    interval: 20,
    colors: new Array(
        [209, 220, 222],
        [0, 0, 0, 0],
        [60, 180, 75],
        [0, 128, 128],
        [199, 238, 180],
        [232, 238, 180]
    )
})

```

# RoadMap
- `gradient.js` will be able to automatically pick most of your site colors and use them for the `defaults`
- will reduce verbosity
- interpolable with jQuery [but but not yet tested]