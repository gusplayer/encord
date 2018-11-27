<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xml:space="preserve"
    :width="widthIcon"
    :height="heightIcon"
    :fill="color"
    version="1.1"
    style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    viewBox="0 0 8000118 8000118"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <slot></slot>
  </svg>
</template>

<script>
export default {
  props: [
    'widthIcon',
    'heightIcon',
    'color'
  ]
}
</script>
