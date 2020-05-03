<template>
  <div class="aria-checked">
    <span class="btnBack" @click="$router.push({ path: 'example' })" role="button" aria-label="move page">&lt; Go back</span>
    <h3>aria-checked</h3>
    <div class="formWrap">
      <input type="checkbox" role="checkbox" id="chk01" :aria-checked="thisChecked===true?'true':'false'" @click="clickEvt" />
      <label for="chk01">aria-checked</label>
    </div>
    <p>aria-checked : <strong>{{ thisChecked }}</strong></p>
    <p>screen reader say : <strong>{{ thisSelected }}</strong></p>

    <h4>HTML :</h4>
    <pre>{{ preDateHtml }}</pre>

    <h4>JS :</h4>
    <pre>{{ preDateJs }}</pre>
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
  private preDateHtml = `<input type="checkbox" role="checkbox" id="chk01" :aria-checked="thisChecked===true?'true':'false'" @click="clickEvt" />
<label for="chk01">aria-checked</label>`
  private preDateJs = `private thisChecked: boolean = false
private clickEvt () {
  this.thisChecked = !this.thisChecked
}`

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
  overflow-x: hidden;
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
  h4 {
    padding: 20px 0 10px;
  }
  pre {
    background-color: #E0E0E0;
    border: 0 none;
    border-radius: 6px;
    overflow-x: auto;
    padding: 10px;
  }
}
</style>
