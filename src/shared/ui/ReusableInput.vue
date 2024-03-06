<template>
  <div class="max-w-md mt-3 mb-10 font-sans border-none bg-white">
      <input
        :value="modelValue"
        :type="type"
        @input="updateValue"
        class="bg-gray-50 border border-blue-500 text-gray-900 text-base rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :placeholder="placeholder"
        required
      />
  </div>
</template>

<script>
export default {
  name: 'ReusableInput',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>
