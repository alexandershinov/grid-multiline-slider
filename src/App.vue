<template>
  <div id="app">
    <h1>ELEMENTS 1</h1>
    <slider height="14.5rem" column-gap="1rem" row-gap="1rem" align-items="start" padding-left="2rem">
      <div class="element__1" v-for="e in testElements" @key="e">
        <div class="element__cover"></div>
        <span>{{e.shortDescription(12)}}</span>
      </div>
    </slider>

    <h1>ELEMENTS 2</h1>
    <slider class="rem2" column-gap="3rem" row-gap="1rem" align-items="start" padding-left="2rem">
      <div class="element__1" v-for="e in testElements" @key="e">
        <div class="element2__cover"></div>
        <span>{{e.shortDescription(15)}}</span>
      </div>
    </slider>

    <h1>ELEMENTS 3</h1>
    <slider class="rem2" column-gap="2rem" row-gap="1rem" align-items="center" padding-left="2rem">
      <div class="element__1" v-for="e in testElements" @key="e">
        <div class="element3__cover"></div>
        <span>{{e.shortDescription(25)}}</span>
      </div>
    </slider>
  </div>
</template>

<script>
  import Slider from './components/GridMultilineSlider'

  export default {
    name: 'app',
    components: {
      Slider
    },
    data() {
      return {
        testElements: [
          "njfrvneovn",
          "rwf3g4v4wv4wrvgvfghgffghgfggf",
          "rf4rg4w3g wergertgg erggw3g3w e",
          "kioffroorroor",
          "werfff wetg wtg",
          "whreufr3hf 4 rr",
          "wefafff 55",
          "aaasdde rr",
          "qwrfwefewf3efefefeqferfqe"
        ]
      }
    }
  }
</script>

<style>
  #app {
    margin: 0;
    padding: 0;
  }

  .element__1 {
    width: auto;
    display: flex;
    flex-direction: column;
  }

  .element2__cover {
    height: 11rem;
    width: 7rem;
    background-color: mediumaquamarine;
    border-radius: 0.8rem;
  }

  .element3__cover {
    height: 11rem;
    width: 15rem;
    background-color: silver;
    border-radius: 0.8rem;
  }

  .element__cover {
    height: 11rem;
    width: 7rem;
    background-color: darkorange;
    border-radius: 0.8rem;
  }

  .rem2 {
    height: 14.5rem;
  }
</style>
