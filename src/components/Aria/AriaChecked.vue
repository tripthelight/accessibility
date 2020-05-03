<template>
  <div class="aria-checked">
    <span class="btnBack" @click="$router.push({ path: 'example' })" role="button" aria-label="move page">&lt; Go back</span>
    <h4>aria-checked</h4>
    <div class="formWrap">
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

<style lang="scss">
.aria-checked {
  padding: 24px;
  box-sizing: border-box;
  .formWrap {
    padding: 20px 0;
    input[type="checkbox"] {
      font-size: 20px;
    }
  }
  .btnBack {
    display: inline-block;
    margin-bottom: 20px;
  }
}
</style>
