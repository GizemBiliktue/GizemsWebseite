<template>
    <div :class="['background', {'reversed-background': isReversed}]">
        <slot></slot> 
    </div>
</template>

<script>
export default {
  props: {
    isReversed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

.background {
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    z-index: 1;
    padding-bottom: 80px;
}

.background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://wallpaperaccess.com/full/169331.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(10px);
    z-index: -1;
  }

.reversed-background::before {
    transform: scaleY(-1); 
}

</style>
