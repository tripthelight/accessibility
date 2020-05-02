<template>
  <div class="home">
    <Index />
  </div>
</template>

<script>
import Index from '@/components/Index.vue'

export default {
  name: 'Home',
  components: {
    Index
  }
}
</script>

<style lang="scss">
.home {
  padding: 24px 24px 74px 24px;
}
</style>
