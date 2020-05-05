<template>
  <div class="aria-haspopup">
    <div>
      <span class="btnBack" @click="$router.push({ path: 'example' })" role="link">&lt; Go back</span>
      <h3>aria-haspopup</h3>
      <p class="otherBlock">Other aria properties</p>
      <p>aria-expanded<br>aria-controls<br>role="dialog"</p>

      <div role="button" class="btnOpenPopup" aria-controls="thisPopupWrap" aria-haspopup="dialog" @click="popSta">CLICK OPEN POPUP 737373</div>

      <div :class="['popup', popupState?'open':'close']">
        <div class="popWrap" id="thisPopupWrap" role="dialog" aria-labelledby="dialog1Title" aria-describedby="dialog1Desc" aria-modal="true">
          <div class="popHeader" id="dialog1Title" ref="popFocus" tabindex="0">
            POP HEADER
          </div>
          <div class="popContent" id="dialog1Desc" tabindex="0">
            POPUP CONTENT<br>
            POPUP CONTENT<br>
            POPUP CONTENT<br>
            POPUP CONTENT<br>
            POPUP CONTENT<br>
            POPUP CONTENT<br>
            POPUP CONTENT
          </div>
          <span class="btnClose" role="button" @click="popClose" tabindex="0">close popup</span>
        </div>
        <div class="dim" @click="popClose">Close popup when touched</div>
      </div>

      <h4>HTML :</h4>
      <pre>{{ preDateHtml }}</pre>

      <h4>JS :</h4>
      <pre>{{ preDateJs }}</pre>a
    </div>
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
  private preDateHtml = `<div :class="['popup', popupState?'open':'close']">
  <div class="dim" @click="popClose">Close popup when touched</div>
  <div class="popWrap" id="thisPopupWrap" role="dialog" aria-labelledby="dialog1Title" aria-describedby="dialog1Desc" aria-modal="true">
    <div class="popHeader" id="dialog1Title" ref="popFocus" tabindex="0">
      POP HEADER
    </div>
    <div class="popContent" id="dialog1Desc" tabindex="0">
      POPUP CONTENT<br>
      POPUP CONTENT<br>
      POPUP CONTENT<br>
      POPUP CONTENT<br>
      POPUP CONTENT<br>
      POPUP CONTENT<br>
      POPUP CONTENT
    </div>a
    <span class="btnClose" role="button" @click="popClose" tabindex="0">close popup</span>
  </div>
</div>`
  private preDateJs = `public $refs!: {
  popFocus: HTMLElement;
}

private popSta () {
  this.popupState = !this.popupState
  this.$nextTick(() => {
    if (this.popupState) {
      this.$refs.popFocus.focus()
    }
  })
}

private popClose () {
  this.popupState = !this.popupState
}`

  public $refs!: {
    popFocus: HTMLElement;
  }

  private popSta () {
    this.popupState = !this.popupState
    this.$nextTick(() => {
      if (this.popupState) {
        this.$refs.popFocus.focus()
      }
    })
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
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      z-index: 200;
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
        z-index: 92;
        &:focus {
          border: 1px solid #FF0000;
        }
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
        z-index: 93;
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
*:focus {
  border: 1px solid #FFFF00 !important;
  outline: 1px solid #FF0000 !important;
}
* {
  -webkit-tap-highlight-color: #ff0000 !important;
}
</style>
