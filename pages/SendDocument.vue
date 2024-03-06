<template>
  <main class="w-full grid grid-cols-2 pt-16 border-t border-blue-500 font-sans">
    <div class="mt-[35px] ml-32">
      <DocumentsSelect />
    </div>

    <form method="POST">
      <label>Название документа</label>
      <ReusableInput
        id="name"
        v-model="documentName"
        type="text"
      />
      <label>Почта получателя</label>
      <ReusableInput
        v-model="recipientMail"
        type="email"
      />
      <label>ИИН получателя</label>
      <ReusableInput
        v-model="recipientIIN"
        type="number"
      />

      <div
        class="flex items-center justify-center w-[450px]"
      >
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div
            class="flex flex-col items-center justify-center pt-5 pb-6"
          >
            <svg
              class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p
              class="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center"
            >
              <span class="font-semibold block text-center">
                Нажмите чтобы загрузить файл
              </span>
              pdf, txt, docx, xls, xlsx, png, jpg, jpeg
            </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>
      <ReusableButton
        class="w-[450px] h-14 mt-10 mb-12 bg-blue-500 hover:bg-blue-800 text-white rounded-lg text-lg"
      >
        Отправить документ
      </ReusableButton>
    </form>
  </main>
</template>

<script>
import { ReusableInput, ReusableButton } from '../src/shared';
import { DocumentsSelect } from '../src/features';
export default {
  components: {
    ReusableInput,
    DocumentsSelect,
    ReusableButton
  },
  data() {
    return {
      documentName: '',
      recipientMail: '',
      recipientIIN: '',
    }
  },
}
</script>
