<template>
  <div class="example">
    <h4>Accessibility Example</h4>
    <div class="navSub">
      <span @click="$router.push({ path: 'ariaChecked' })">aria-checked &gt;</span>
    </div>
  </div>
</template>

<style lang="scss">
.example {
  padding: 24px 24px 74px 24px;
  .navSub {
    padding: 20px 0 0 0;
    span {
      display: inline-block;
    }
  }
}
</style>
