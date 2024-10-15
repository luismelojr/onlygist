<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    avatarUrl: string;
    bio?: string;
    city?: string;
    state?: string;
  }>(),
  {
    name: 'Luis Henrique',
    avatarUrl: 'https://github.com/luismelojr.png',
    bio: 'Software Engineer',
    city: 'Goiania',
    state: 'GO',
  },
);
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center gap-2">
    <div class="w-24 md:w-32 rounded-full overflow-hidden">
      <NuxtImg
        class="w-full"
        :src="props.avatarUrl"
        alt="foto do usuário"
        placeholder
      />
    </div>
    <h1
      class="font-[Inter] text-gray-700 text-center font-bold text-2xl md:text-3xl"
    >
      {{ props.name }}
    </h1>
    <p
      v-if="props.bio"
      class="font-[Inter] text-gray-700 text-center font-regular md:text-lg"
    >
      {{ props.bio }}
    </p>

    <p
      v-if="props.city && props.state"
      class="font-[Inter] font-regular text-gray-500 text-sm md:text-base"
    >
      <i class="pi pi-map-marker" />
      {{ props.city }}, {{ props.state }}
    </p>
  </div>
</template>
