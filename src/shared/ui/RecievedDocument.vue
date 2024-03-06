<template>
    <div
      class="grid-rows-2 w-[800px] h-[300px] flex flex-row justify-center items-center gap-14 rounded-lg shadow-[2px_0px_0px_4px_#4299e1]"
    >
      <div class="flex flex-col justify-center items-start">
        <h2
          class="text-blue-900"
        >
          ID документа
        </h2>
        <h3
          class="mb-4 font-thin border-b border-gray-300"
        >
          {{ documentData.id }}
        </h3>
        <h2
          class="text-blue-900"
        >
          Тип документа
        </h2>
        <h3
          class="mb-4 font-thin border-b border-gray-300"
        >
          {{ documentData.type }}
        </h3>
      </div>
      <div class="flex flex-col justify-center items-start">
        <h2
          class="text-blue-900"
        >
          ИИН получателя
        </h2>
        <h3
          class="mb-4 font-thin border-b border-gray-300"
        >
          {{ documentData.recipientIIN }}
        </h3>
        <h2
          class="text-blue-900"
        >
          Почта получателя
        </h2>
        <h3
          class="mb-4 font-thin border-b border-gray-300"
        >
          {{ documentData.recipientMail }}
        </h3>
      </div>
      <div class="w-44">
        <img :src="documentData.icon" alt="Document icon">
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      documentData: {
        type: Object,
        required: true,
      },
    },
}
</script>
