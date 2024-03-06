<template>
  <div class="max-w-md ml-auto mr-16 mt-14 mb-14 font-sans">
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          class="w-4 h-4 text-blue-500 dark:text-blue-400"
          aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        v-model="searchQuery"
        @input='emitSearch'
        type="search"
        class="block w-full p-4 ps-10 text-base text-gray-900 placeholder:text-black border border-blue-500 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Поиск по таблице"
        required
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    searchQuery: {
      get() {
        return this.$store.state.documents.searchQuery;
      },
      set(value) {
        this.$store.dispatch('documents/updateSearchQuery', value);
      }
    }
  },
  methods: {
    emitSearch() {
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>
