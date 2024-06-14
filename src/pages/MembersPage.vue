<template>
  <div>
    <div class="row justify-center">
      <div class="col-12 col-md-11 text-center">
        <h4 :class="{'text-h5': $q.screen.lt.md }">
          Explore the core projects driving Computing Continuum, each pivotal to
          advancing Europe's computing ecosystem.
        </h4>
      </div>
    </div>
    <q-list separator>
      <q-item v-for="member in members" :key="member.code" class="q-pt-lg q-px-none">
        <div class="row items-center q-col-gutter-x-xl">
          <div class="col-5 col-sm-3 col-md" :class="{ 'text-center': $q.screen.gt.sm }">
            <a :href="member.links.website" target="_blank">
              <img :src="member.logo_src" class="cc__member-logo q-my-md" />
            </a>
          </div>
          <div class="col-12 col-md-10" :class="{ 'q-pl-xl': $q.screen.gt.sm }">
            <h5 class="q-mt-none q-mb-sm">
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
import { useMeta } from 'quasar';

import MarkedDiv from 'src/components/MarkedDiv.vue';
import { useCommonStore } from 'src/stores/common';

const commonStore = useCommonStore();

const { members } = storeToRefs(commonStore);

useMeta(() => {
  return {
    title: 'Members - Computing Continuum',
  };
});
</script>
