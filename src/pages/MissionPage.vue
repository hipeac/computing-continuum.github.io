<style lang="scss">
.cc__member-logo {
  max-height: 75px;
  max-width: 100%;
}
</style>

<template>
  <div>
    <div class="row justify-center">
      <div class="col-12 col-md-11 text-center">
        <h4 :class="{'text-h5': $q.screen.lt.md }">Mission statement</h4>
        <marked-div :text="mission.content" />
      </div>
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
