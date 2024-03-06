<template>
  <nav
    class="flex flex-row justify-between items-center m-5 font-sans text-xl"
  >
    <div>
      <img
        class="w-[176px]"
        src="/logo.png"
        alt="Logo"
      />
    </div>
    <div
      class="flex items-center justify-between min-w-[480px] max-w-fit text-blue-900"
    >
      <NuxtLink
        v-for="link in linksData"
        :key="link.url"
        :to="link.url"
        class="links"
      >
        <img
          :src="link.icon"
          class="w-[32px]"
          alt="Icon"
        />
        <h3
          class="links-hover">
          {{ link.name }}
        </h3>
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/SendDocument">
        <ReusableButton
          class="button"
        >
          Отправить
        </ReusableButton>
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
import { ReusableButton } from '/src/shared/';
export default {
  components: {
    ReusableButton,
  },
  data() {
    return {
      linksData: [
        {name: 'Главная', icon: '/home.png', url: '/'},
        {name: 'Документы', icon: '/docs.png', url: '/Documents'},
        {name: 'О нас', icon: '/group.png', url: '/AboutUs'},
      ]
    }
  },
};
</script>

<style scoped>
  .links {
    @apply flex flex-row items-center gap-4
  }

  .links-hover {
    @apply hover:border-b-2
  }

  .button {
    @apply w-[150px] h-12 bg-blue-500 hover:bg-blue-800 text-white rounded-lg
  }
</style>
