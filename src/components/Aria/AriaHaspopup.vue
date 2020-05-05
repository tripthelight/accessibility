<template>
  <div class="aria-haspopup">
    <span class="btnBack" @click="$router.push({ path: 'example' })" role="link">&lt; Go back</span>
    <h3>aria-haspopup</h3>
    <p class="otherBlock">Other aria properties</p>
    <p>aria-expanded<br>aria-controls<br>role="dialog"</p>

    <div class="btnOpenPopup" role="button" aria-haspopup="true" aria-controls="thisPopup" :aria-expanded="popupState?'true':'false'" @click="popSta">OPEN POPUP BUTTON</div>

    <div id="thisPopup" role="dialog" aria-labelledby="dialog1Title" aria-describedby="dialog1Desc" :class="['popup', popupState?'open':'close']">
      <div class="dim" @click="popClose">Close popup when touched</div>
      <div class="popWrap">
        <div class="popHeader" id="dialog1Title">
          POP HEADER
        </div>
        <div class="popContent" id="">
          POPUP CONTENT<br>
          POPUP CONTENT<br>
          POPUP CONTENT<br>
          POPUP CONTENT<br>
          POPUP CONTENT<br>
          POPUP CONTENT<br>
          POPUP CONTENT
        </div>
        <span class="btnClose" role="button" @click="popClose">close popup</span>
      </div>
    </div>

    <h4>HTML :</h4>
    <pre>{{ preDateHtml }}</pre>

    <h4>JS :</h4>
    <pre>{{ preDateJs }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AriaHaspopup',
  components: {}
})

export default class AriaHaspopup extends Vue {
  private popupState = false
  private preDateHtml = `<div class="btnOpenPopup" role="button" aria-haspopup="true" aria-controls="thisPopup" :aria-expanded="popupState?'true':'false'" @click="popSta">OPEN POPUP BUTTON</div>

<div id="thisPopup" role="dialog" aria-labelledby="dialog1Title" aria-describedby="dialog1Desc" :class="['popup', popupState?'open':'close']">
  <div class="dim" @click="popClose">Close popup when touched</div>
  <div class="popWrap">
    <div class="popHeader" id="dialog1Title">
      POP HEADER
    </div>
    <div class="popContent" id="">
      POPUP CONTENT<br>
      POPUP CONTENT<br>
      POPUP CONTENT<br>
      POPUP CONTENT<br>
      POPUP CONTENT<br>
      POPUP CONTENT<br>
      POPUP CONTENT
    </div>
    <span class="btnClose" role="button" @click="popClose">close popup</span>
  </div>
</div>`
  private preDateJs = `private popSta () {
  this.popupState = !this.popupState
}

private popClose () {
  this.popupState = !this.popupState
}`

  private popSta () {
    this.popupState = !this.popupState
  }

  private popClose () {
    this.popupState = !this.popupState
  }
}
</script>

<style lang="scss">
.aria-haspopup {
  padding: 24px;
  box-sizing: border-box;
  overflow-x: hidden;
  .btnOpenPopup {
    display: block;
    width: 100%;
    height: 30px;
    padding: 20px 10px;
    margin:20px 0 30px;
    box-sizing: border-box;
    line-height: 6px;
    border-radius: 4px;
    background-color: #000;
    color: #FFF;
  }
  .popup {
    display: none;
    &.open {
      display: block;
    }
    .dim {
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 90;
      display: block;
      background-color: rgba(0,0,0,0.8);
      font-size: 0;
      text-indent: -1000px;
    }
    .popWrap {
      position: fixed;
      left: 50%;
      top: 50%;
      width: 80%;
      height: 200px;
      margin: -100px 0 0 -40%;
      background-color: #FFF;
      border-radius: 12px;
      z-index: 91;
      .popHeader {
        position: relative;
        padding: 12px;
        box-sizing: border-box;
      }
      .popContent {
        padding: 10px 12px;
      }
      .btnClose {
        position: absolute;
        right: 12px;
        top: 14px;
        width: 10px;
        height: 10px;
        text-indent: -1000px;
        font-size: 0;
        line-height: 0;
        background-image: url('../../assets/images/icon/ico_close_01.png');
        background-size: 100% auto;
        background-position: 0 0;
        background-repeat: no-repeat;
      }
    }
  }
  .otherBlock {
    padding: 10px 0;
  }
  .btnBack {
    display: inline-block;
    margin-bottom: 20px;
  }
  h3 {
    + p {
      margin-top: 10px;
      font-weight: bold;
    }
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
