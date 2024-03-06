<template>
  <footer>
    <section
      class="h-[180px] flex flex-col justify-between items-center font-sans"
    >
      <div
        class="w-full flex flex-row justify-center items-center gap-12 pt-6 border-t border-blue-500"
      >
        <a
          v-for="link in linksData"
          :key="link.url"
          :href="link.url"
        >
          <img
            class="w-[40px]"
            :src="link.icon"
            alt="TG"
          >
        </a>
      </div>
      <div
        class="w-[102vw] h-12 flex justify-center items-center bg-blue-900 text-white text-lg"
      >
        <h5>
          &#169;Copyrights. All rights reserved.
        </h5>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      linksData: [
        {icon: '/telegram.png', url: 'https://t.me/Roxenne00',},
        {icon: '/whatsapp.png', url: 'https://wa.me/77085192208',},
        {icon: '/mail.png', url: 'mailto: tubrox0101@gmail.com',}
      ]
    }
  },
};
</script>
