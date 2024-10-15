<script setup lang="ts">
import SocialForm from '@/modules/auth/components/SocialForm/SocialForm.vue';

const loading = ref<boolean>(false);

const handleGithubLogin = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
  // @TODO call api
};
</script>

<template>
  <section
    class="w-full h-full flex flex-col items-center justify-center gap-5 bg-gray-50"
  >
    <Logo />
    <SocialForm
      :loading="loading"
      @wants-login-with-github="handleGithubLogin"
    />
  </section>
</template>
