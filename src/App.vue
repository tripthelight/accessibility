<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/example">Example</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#nav {
  position: fixed;
  width: 100%;
  height: 50px;
  left: 0;
  bottom: 0;
  border-top: 1px solid #E0E0E0;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  a {
    display: block;
    width: 50%;
    height: 50px;
    float: left;
    text-align: center;
    line-height: 50px;
    background-color: #FFF;
    &.router-link-exact-active {
      background-color: #E0E0E0;
    }
  }
}
</style>
