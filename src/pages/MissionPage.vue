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
        <h5 class="q-my-xl">Mission statement</h5>
        <marked-div :text="mission.content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import data from 'src/data/contents';
import MarkedDiv from 'src/components/MarkedDiv.vue';

const mission = computed(() => data.mission);
</script>
