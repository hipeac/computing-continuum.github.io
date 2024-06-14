<style type="scss">
.marked {
  h1,
  h2,
  h3 {
    margin: 2em 0 1.5em;
    color: #005eb8;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>

<template>
  <div v-if="text" v-html="html" class="marked" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { render } from 'src/utils/markdown';

const props = defineProps<{
  text: string;
}>();

const html = computed<string>(() => {
  return render(props.text) as string;
});
</script>
