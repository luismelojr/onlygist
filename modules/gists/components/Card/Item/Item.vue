<script setup lang="ts">
import { useMarkdown } from '@/composables/useMarkdown/useMarkdown';

const { render } = useMarkdown();

const emit = defineEmits<{ (e: 'tap', id: string) }>();
const props = withDefaults(
  defineProps<{
    id: string;
    title: string;
    description: string;
    price: number;
    lang: string;
  }>(),
  {
    id: '123',
    title: 'useCurrentUser.ts',
    description: 'Hook para obter o **usuário** atual',
    price: 10,
    lang: 'typescript',
  },
);

const isFree = computed(() => props.price === 0);

const description = computed(() => render(props.description));

const amount = computed(() =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    props.price,
  ),
);

const handleClick = () => {
  emit('tap', props.id);
};
</script>

<template>
  <Card>
    <template #title>
      <div class="flex flex-wrap gap-2">
        {{ props.title }}
        <Chip class="text-sm" :label="props.lang" icon="pi pi-bolt" />
      </div>
    </template>
    <template #content>
      <div v-html="description" />
    </template>
    <template #footer>
      <Button
        v-if="isFree"
        label="Baixar gratuitamente"
        class="w-full"
        icon="pi pi-shopping-bag"
        icon-pos="right"
        @click="handleClick"
      />
      <Button
        v-else
        :label="`Comprar por ${amount}`"
        class="w-full"
        icon="pi pi-shopping-bag"
        icon-pos="right"
        @click="handleClick"
      />
    </template>
  </Card>
</template>
