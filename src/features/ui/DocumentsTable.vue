<template>
<div class="relative shadow-md sm:rounded-lg mr-16 max-h-[550px] overflow-auto font-sans">
  <table class="w-[750px] text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Документ
        </th>
        <th scope="col" class="px-6 py-3">
          Отправитель
        </th>
        <th scope="col" class="px-6 py-3">
          Дата
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="info in filteredDocsInfo"
        :key='info.id'
        class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 cursor-pointer"
        @click="navigateToDocument(info.id)"
      >
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {{ info.type }}
        </th>
        <td class="px-6 py-4">
          {{ info.recipientMail }}
        </td>
        <td class="px-6 py-4">
          {{ info.date }}
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  props: {
    filteredDocsInfo: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {

    }
  },
  methods: {
    navigateToDocument(id) {
      this.$router.push(`/documents/${id}`);
    },
  },
}
</script>
