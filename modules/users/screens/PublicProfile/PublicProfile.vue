<script setup>
import PublicHeadline from '@/modules/users/components/PublicHeadline/PublicHeadline.vue';
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue';
import WidgetLoader from '@/modules/reports/components/Widget/Group/Loader.vue';
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue';
import GistCardGroup from '@/modules/gists/components/Card/Group/Group.vue';
import GistCardItem from '@/modules/gists/components/Card/Item/Item.vue';

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>

<template>
  <PublicHeadline
    name="Luis Henrique"
    avatar-url="https://github.com/luismelojr.png"
    bio="Software Engineer"
    state="GO"
    city="Goiania"
  />
  <WidgetGroup>
    <WidgetLoader :loading="loading" :amount="3">
      <WidgetCondensed :value="20" label="Gists total" />
      <WidgetCondensed :value="10" label="Gists gratuitos" />
      <WidgetCondensed :value="10" label="Gists pagos" />
    </WidgetLoader>
  </WidgetGroup>

  <WidgetDefault title="Todos os gists">
    <GistCardGroup>
      <GistCardItem />
      <GistCardItem />
      <GistCardItem />
      <GistCardItem />
    </GistCardGroup>
  </WidgetDefault>
</template>
