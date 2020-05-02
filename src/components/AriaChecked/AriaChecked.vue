<template>
  <div class="aria-checked">
    <h4>aria-checked</h4>
    <div>
      <input type="checkbox" role="checkbox" id="chk01" :aria-checked="thisChecked===true?'true':'false'" @click="clickEvt" />
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
  private thisSelected = 'not selected'

  private clickEvt () {
    this.thisChecked = !this.thisChecked
    if (this.thisChecked) {
      this.thisSelected = 'selected'
    } else {
      this.thisSelected = 'not selected'
    }
  }
}
</script>
