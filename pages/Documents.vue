<template>
  <main
    class="max-w-[100vw] flex flex-col mb-14 mt-2 border-t border-blue-500"
  >
    <div class="mr-20">
      <DocumentsSearch @search="handleSearch" />
    </div>
    <div class="grid grid-cols-2 mx-20">
      <DocumentsSelect @selectChange="handleSelectChange" />
      <DocumentsTable :filteredDocsInfo="filteredDocsInfo" />
    </div>
  </main>
</template>

<script>
import { DocumentsSearch, DocumentsSelect, DocumentsTable }  from '../src/features';
import { mapState, mapActions } from 'vuex';
export default {
  components: {
    DocumentsSearch,
    DocumentsSelect,
    DocumentsTable,
  },
  data() {
    return {
      filteredDocsInfo: [],
      selectedDocType: '',
    }
  },
  computed: {
    ...mapState('documents', {
      searchQuery: (state) => state.searchQuery,
    }),
    ...mapState(['docsInfo']),
  },
  mounted() {
    this.filterData();
  },
  methods: {
    handleSearch(searchQuery) {
      this.updateSearchQuery(searchQuery)
      setTimeout(() => {
        this.filterData();
      }, 500);
    },
    handleSelectChange(selectedValue) {
      this.selectedDocType = selectedValue;
      this.filterData();
    },
    filterData() {
      let filtered = this.docsInfo;
      if (this.searchQuery) {
        filtered = filtered.filter((item) =>
          Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        )
      };
      if (this.selectedDocType && this.selectedDocType !== 'Виды документов') {
        filtered = filtered.filter((item) => item.type === this.selectedDocType);
      }
      this.filteredDocsInfo = filtered;
    },
    ...mapActions('documents', ['updateSearchQuery']),
  }
}
</script>
