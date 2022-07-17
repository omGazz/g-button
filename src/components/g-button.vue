<template>
  <div class="g-button">
  </div>
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import { Options, Vue } from "vue-class-component";

@Options({
  name: "g-button"
})
export default class GButton extends Vue {
  @Prop() text!: string;

  get _text(): string {
    return this.text
  }
}
</script>

<style scoped lang="scss">

</style>
