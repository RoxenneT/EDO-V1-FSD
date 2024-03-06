<template>
<form class="w-[448px] font-sans ml-16">
  <select
    class="h-[46px] bg-gray-50 border border-blue-500 text-gray-900 text-base rounded-lg block w-full p-2.5 cursor-pointer"
    @change="handleSelectChange"
  >
    <option selected>Виды документов</option>
    <option
      v-for="docType in cardsData"
      :key="docType.title"
      :value="docType.title"
    >
      {{ docType.title }}
    </option>
  </select>
</form>
</template>

<script>
export default {
  name: 'DocumentsSelect',
  data() {
    return {

    }
  },
  computed: {
    cardsData() {
      return this.$store.getters['getCardsData']
    }
  },
  methods: {
    handleSelectChange(event) {
      this.$emit('selectChange', event.target.value);
    }
  }
}
</script>
