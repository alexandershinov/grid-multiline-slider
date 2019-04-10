# grid-multiline-slider

Solid content slider laid out on grid layout.
You can use it to show long content list. For example, list of books, films, info cards, etc.

## Install :gift:
coming soon

don't use it now
```
npm i --save grid-multiline-slider
```

## Usage
```vue
<template>
  <grid-multiline-slider column-gap="2rem" height="5rem">
    <div class="slide0"></div>
    <div class="slide1"></div>
    <div class="slide2"></div>
  </grid-multiline-slider>
</template>

<script>
  import GridMultilineSlider from 'grid-multiline-slider';
  
  export default {
    components: {
      GridMultilineSlider
    }
  }
</script>
```

If you don't use height property correctly, slider can contain a scrollbar.
