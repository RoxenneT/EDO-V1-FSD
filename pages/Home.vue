<template>
  <div class="flex flex-col justify-center items-center font-sans">
    <AddBaner />
    <DocumentsCard/>
  </div>
</template>

<script>
import { AddBaner, DocumentsCard } from '../src/shared'
export default {
  components: {
    AddBaner,
    DocumentsCard,
  }
}
</script>
