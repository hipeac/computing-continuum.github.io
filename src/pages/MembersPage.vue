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
        <h5 class="q-my-xl">
          Explore the core projects driving Computing Continuum, each pivotal to
          advancing Europe's computing ecosystem.
        </h5>
      </div>
    </div>
    <q-list separator>
      <q-item v-for="member in members" :key="member.code" class="q-pt-lg">
        <div class="row items-center q-col-gutter-xl">
          <div class="col-2 col-sm-1 col-md text-center">
            <a :href="member.links.website" target="_blank">
              <img :src="member.logo_src" class="cc__member-logo" />
            </a>
          </div>
          <div class="col-12 col-md-10" :class="{ 'q-pl-xl': $q.screen.gt.sm }">
            <h5 class="q-mt-none q-mb-md">
              <span>{{ member.name }}</span>
              <a
                v-if="member.links.website"
                :href="member.links.website"
                target="_blank"
              >
                <q-btn
                  round
                  flat
                  color="primary"
                  icon="link"
                  size="sm"
                  class="q-ml-sm q-mb-xs"
                />
              </a>
            </h5>
            <marked-div :text="member.description" />
          </div>
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import MarkedDiv from 'src/components/MarkedDiv.vue';
import { useCommonStore } from 'src/stores/common';

const commonStore = useCommonStore();

const { members } = storeToRefs(commonStore);
</script>
