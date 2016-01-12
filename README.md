# oh hai

Add class to element once it enters the viewport.

## Usage

Include jQuery and ohhai.js:

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="/js/ohhai.js"></script>
```

Initialize in your .js file:

```
$('.fade-on-scroll').ohhai();

// Or change the options
$('.fade-on-scroll').ohhai({
    triggerOffset: 200
    inViewClass: 'visible'
});
```



## Options


| Option            | Type | Default   | Description |
|-------------------|------|-----------|-------------|
| **elTrigger**     | str  | `top`     | `top` or `bottom`. The point of the element that determines if it is in the viewport. |
| **triggerOffset** | int | 0          | Pixel amount that will be scrolled before trigger occurs |
| **inViewClass**   | str | `'oh-hai'` | The class that is added to visible elements. |
