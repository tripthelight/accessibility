<template>
  <div class="aria-expanded">
    <span class="btnBack" @click="$router.push({ path: 'example' })" role="button" aria-label="move page">&lt; Go back</span>
    <h3>aria-expanded</h3><br>

    <p>aria-expanded : <strong>{{ thisExpanded }}</strong></p>
    <p>screen reader say : <strong>{{ thisSay }}</strong></p>

    <dl :class="['openClose', thisExpanded?'open':'close']">
      <dt role="button" :aria-expanded="thisExpanded?'true':'false'" @click="clickEvt">
        aria-expanded : {{ thisExpanded }}
        <span class="icoArr" aria-label="arrow icon"></span>
      </dt>
      <dd>
        <div class="hideWrap" :aria-hidden="thisExpanded?'false':'true'">
          aria-hidden: {{ !thisExpanded }}<br>
          contents<br>
          contents<br>
          contents<br>
          contents<br>
          contents
        </div>
      </dd>
    </dl>

    <h4>HTML :</h4>
    <pre>{{ preDateHtml }}</pre>

    <h4>JS :</h4>
    <pre>{{ preDateJs }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AriaExpanded',
  components: {}
})

export default class AriaExpanded extends Vue {
  private thisExpanded = false
  private thisSay = 'close'
  private preDateHtml = `<dl :class="['openClose', thisExpanded?'open':'close']">
  <dt role="button" :aria-expanded="thisExpanded?'true':'false'" @click="clickEvt">
    aria-expanded : {{ thisExpanded }}
    <span class="icoArr" aria-label="arrow icon"></span>
  </dt>
  <dd>
    <div class="hideWrap" :aria-hidden="thisExpanded?'false':'true'">
      contents<br>
      contents<br>
      contents<br>
      contents<br>
      contents
    </div>
  </dd>
</dl>`
  private preDateJs = `private thisExpanded = false
private clickEvt () {
  this.thisExpanded = !this.thisExpanded
}}`

  private clickEvt () {
    this.thisExpanded = !this.thisExpanded
    if (this.thisExpanded) {
      this.thisSay = 'open'
    } else {
      this.thisSay = 'close'
    }
  }
}
</script>

<style lang="scss">
.aria-expanded {
  padding: 24px;
  box-sizing: border-box;
  overflow-x: hidden;
  .openClose {
    margin: 20px 0;
    border: 1px solid #E0E0E0;
    border-radius: 6px;
    dt {
      position: relative;
      padding: 10px 40px 10px 10px;
      .icoArr {
        position: absolute;
        display: inline-block;
        right: 10px;
        top: 50%;
        width: 20px;
        height: 12px;
        margin-top: -6px;
        background-image: url('../../assets/images/icon/ico_arr_down_01.png');
        background-color: transparent;
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: 0 0;
      }
    }
    dd {
      .hideWrap {
        height: 20px;
        overflow: hidden;
        padding: 0 10px;
        transition: height .2s ease-in, padding .2s;
      }
    }
    &.open {
      dt {
        .icoArr {
          transform: rotate(180deg);
        }
      }
      dd {
        .hideWrap {
          height: 130px;
          padding: 0 10px 10px 10px;
          box-sizing: border-box;
          transition: height .2s ease-in, padding .2s;
        }
      }
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
