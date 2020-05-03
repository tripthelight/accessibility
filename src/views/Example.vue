<template>
  <div class="example">
    <h4>Accessibility Example</h4>
    <ul class="navSub">
      <li><span @click="$router.push({ path: 'ariaChecked' })">aria-checked &gt;</span></li>
      <li><span @click="$router.push({ path: 'ariaExpanded' })">aria-expanded &gt;</span></li>
    </ul>
  </div>
</template>

<style lang="scss">
.example {
  padding: 24px 24px 74px 24px;
  .navSub {
    display: block;
    padding: 20px 0 0 0;
    li {
      display: block;
      padding: 5px 0;
      span {
        display: inline-block;
      }
    }
  }
}
</style>
