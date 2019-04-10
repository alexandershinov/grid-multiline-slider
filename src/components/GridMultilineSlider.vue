<template>
  <div class="grid-multiline"
       ref="SliderContainer"
       @mouseout="disableScrollMouseOver"
       :style="height ? {height: height} : ''">
    <div ref="Slider"
        class="grid-multiline-slider"
        :style="gridStyle"
        @mousedown="enableScroll"
        @mouseup="disableScroll"
        @mousemove="moveSlider">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'grid-multiline-slider',
    props: {
      "height": {
        type: String
      },
      "lines-amount": {
        type: Number,
        default: 1
      },
      "column-gap": {
        type: String,
        default: "0"
      },
      "row-gap": {
        type: String,
        default: "0"
      },
      "align-items": {
        type: String,
        default: "center"
      },
      "padding-left": {
        type: String,
        default: "0"
      }
    },
    data() {
      return {
        gridStyle: {
          gridColumnGap: this.columnGap,
          gridRowGap: this.rowGap,
          alignItems: this.alignItems,
          paddingLeft: this.paddingLeft
        },
        scrollEnabled: false,
        position: null
      }
    },
    methods: {
      enableScroll(event) {
        this.scrollEnabled = true;
        this.position = event.clientX;
        event.preventDefault();
      },
      disableScroll(event) {
        this.scrollEnabled = false;
        this.position = null;
        event.preventDefault();
      },
      disableScrollMouseOver(event) {
        if (!this.$refs.SliderContainer.contains(event.relatedTarget)) {
          this.disableScroll(event);
        }
      },
      moveSlider(event) {
        if (this.scrollEnabled) {
          this.$refs.Slider.scrollLeft -= event.clientX - this.position;
          this.position = event.clientX;
          event.preventDefault();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .grid-multiline{
    overflow-y: hidden;
    user-select: none;

    &-slider {
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: repeat(1, 1fr);
      max-width: max-content;

      overflow-scrolling: touch;
      overflow-x: scroll;
      overflow-y: hidden;
      padding-bottom: 4rem;
      user-select: none;
    }
  }
</style>
