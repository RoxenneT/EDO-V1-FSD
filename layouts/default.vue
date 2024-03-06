<template>
  <div>
    <Header />
    <Nuxt class="parent" />
    <Footer />
  </div>
</template>

<script>
import { Footer } from '../src/widgets/footer';
import { Header } from '../src/widgets/header';
export default {
  components: {
    Header,
    Footer,
  }
  }
</script>

<style scoped>
  .parent {
    @apply max-h-fit min-h-[74vh]
  }
</style>
