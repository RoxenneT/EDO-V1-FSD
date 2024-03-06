<template>
  <div
    class="min-w-[75%] max-w-[80%] h-fit flex flex-row flex-wrap gap-16 m-[90px]"
  >
    <div
      class="w-[200px] h-[300px] flex flex-col justify-center gap-10 items-center border-2 border-blue-500 rounded-xl shadow-[5px_5px_0px_0px_#3b82f6] hover:scale-110"
      v-for="card in cardsData"
      :key="card.icon"
    >
      <img
        class="w-[130px]"
        :src="card.icon"
      />
      <h2
        class="font-sans text-xl text-blue-900 text-center"
      >
        {{ card.title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.cardsData);
  },
  computed: {
    cardsData() {
      return this.$store.getters['getCardsData']
    }
  }
};
</script>
