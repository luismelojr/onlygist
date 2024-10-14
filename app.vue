<script setup>
const value = ref('');
</script>

<template>
  <div
    class="flex gap-4 flex-col justify-center h-full w-full bg-primary-50 items-center"
  >
    <h1 class="font-[Inter] font-bold">Poirplate</h1>
    <DatePicker v-model="value" />
    <p>{{ value }}</p>
    <Button label="Profile" icon="pi pi-user" />
  </div>
</template>
