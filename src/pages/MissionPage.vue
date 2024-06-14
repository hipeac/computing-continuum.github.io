<style lang="scss">
.cc__member-logo {
  max-height: 75px;
  max-width: 100%;
}
</style>

<template>
  <div class="bg-indigo-1 q-px-lg q-py-md">
    <div class="container">
      <h5 class="text-caption">Mission statement</h5>
      <marked-div :text="mission.content" class="text-h5 q-pb-lg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useMeta } from 'quasar';

import data from 'src/data/contents';
import MarkedDiv from 'src/components/MarkedDiv.vue';

const mission = computed(() => data.mission);

useMeta(() => {
  return {
    title: 'Mission statement - Computing Continuum',
  };
});
</script>
