<template>
  <div class="g-button">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    text: String
  }
})
export default class GButton extends Vue {
  
}
</script>

<style scoped lang="scss">

</style>
