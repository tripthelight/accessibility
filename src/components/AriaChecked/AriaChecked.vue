<template>
  <div class="aria-checked">
    <h4>Aria-checked</h4>
    <div>
      <input type="checkbox" id="chk01" :aria-checked="thisChecked===true?'true':'false'" @click="clickEvt" />
      <label for="chk01">aria-checked</label>
    </div>
    <p>aria-checked : {{ thisChecked }}</p>
    <p>screen reader say : {{ thisSelected }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AriaChecked',
  components: {}
})

export default class AriaChecked extends Vue {
  private thisChecked = false
  private thisSelected = 'not checked'

  private clickEvt () {
    this.thisChecked = !this.thisChecked
    if (this.thisChecked) {
      this.thisSelected = 'checked'
    } else {
      this.thisSelected = 'not checked'
    }
  }
}
</script>
