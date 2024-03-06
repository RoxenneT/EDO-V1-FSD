<template>
  <main class="w-full grid grid-cols-3 pt-16 border-t border-blue-500 font-sans text-xl">
    <div class="ml-14">
      <DocumentsSelect />
    </div>
    <div
      class="flex flex-col ml-40 gap-8"
    >
      <RecievedDocument v-if='documentData' :documentData="documentData" />
      <div class="flex gap-10">
        <ReusableButton
          class="w-[200px] h-14 bg-blue-500 hover:bg-blue-800 text-white rounded-lg text-xl"
        >
          Подписать
        </ReusableButton>
        <ReusableButton
          class="w-[200px] h-14 bg-red-500 hover:bg-red-800 text-white rounded-lg text-xl"
        >
          Отклонить
        </ReusableButton>
      </div>
      <DocumentPreView v-if='documentData' :documentData="documentData" />
    </div>
  </main>
</template>

<script>
  import { ReusableButton, RecievedDocument } from '/src/shared';
  import { DocumentsSelect } from '/src/features';
  import { DocumentPreView } from '/src/widgets/documentView';
  export default {
    components: {
      ReusableButton,
      DocumentsSelect,
      DocumentPreView,
      RecievedDocument,
    },
    async asyncData({ params, store }) {
      const documentId = params.id;
      const docsInfo = store.getters["getDocsInfo"];
      const documentData = docsInfo.find(doc => doc.id.toString() === documentId);
      return { documentData };
    },
  }
</script>
