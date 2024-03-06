<template>
  <div class="max-h-fit max-w-fit my-10">
    <iframe
      v-if="fileType(documentData.doc) === 'pdf'"
      :src="documentData.doc"
      class="w-[800px] h-[500px] max-h-[500px] mt-6 mb-16 overflow-auto border-b-8 border-gray-700"
    >
    </iframe>
    <img
      v-else-if="fileType(documentData.doc) === 'image'"
      :src="documentData.doc"
      class="w-fit h-fit mx-24 pt-28 pb-32 scale-150"
    >
    <div
      v-else-if="fileType(documentData.doc) === 'text'"
      v-html="fileContentText"
      class="w-[800px] max-h-[500px] overflow-auto mt-5 mb-16 flex flex-col text-justify font-sans border-8 border-gray-300 rounded-lg p-14"
    >
    </div>
    <div
      v-else-if="fileType(documentData.doc) === 'excel'"
      v-html="fileContentExcel"
      class="w-[800px] max-h-[500px] overflow-auto mt-5 mb-16 flex flex-col text-justify text-wrap font-sans border-8 border-gray-300 rounded-lg p-14"
    >
    </div>
    <div class="text-red-700 mt-14 h-60" v-else>Формат файла не поддерживается</div>
  </div>
</template>

<script>
  import mammoth from 'mammoth';
  import * as XLSX from 'xlsx';
  export default {
    props: {
      documentData: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        fileContentText: null,
        fileContentExcel: null,
      }
    },
    mounted() {
      this.loadAndProcessDocx(this.documentData.doc);
      this.processXlsx(this.documentData.doc);
    },
    methods: {
      fileType(doc) {
        if (!doc) return 'unknown';
        if (doc.endsWith('.pdf')) {
        return 'pdf';
        } else if (/\.(jpg|jpeg|png)$/.test(doc)) {
          return 'image';
        } else if (doc.endsWith('.xls') || doc.endsWith('.xlsx')) {
          return 'excel';
        } else if (doc.endsWith('.txt') || doc.endsWith('.docx')) {
          return 'text';
        }
        return 'unknown';
      },
      async loadAndProcessDocx(fileUrl) {
        try {
          const response = await fetch(fileUrl);
          const arrayBuffer = await response.arrayBuffer();
          const result = await mammoth.convertToHtml({ arrayBuffer });
          this.fileContentText = result.value;
        } catch (err) {
          console.error(err);
        }
      },
      async processXlsx(fileUrl) {
        try {
          const response = await fetch(fileUrl);
          const arrayBuffer = await response.arrayBuffer();
          const workbook = XLSX.read(arrayBuffer, {type: 'array'});
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const htmlStr = XLSX.utils.sheet_to_html(worksheet);
          this.fileContentExcel = htmlStr;
        } catch (error) {
          console.error("Ошибка при обработке XLSX файла:", error);
        }
      }
    }
  }
</script>
