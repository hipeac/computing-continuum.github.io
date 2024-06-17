<template>
  <div class="bg-indigo-1 q-px-lg q-py-md">
    <div class="container">
      <h5 class="text-caption">Computing Continuum Members</h5>
      <p class="text-h5 q-pb-lg">
        Explore the core projects driving Computing Continuum, each pivotal to
        advancing Europe's computing ecosystem.
      </p>
    </div>
  </div>
  <div class="container q-py-lg" :class="{ 'q-px-lg': $q.screen.lt.md }">
    <q-list separator>
      <q-item
        v-for="member in members"
        :key="member.code"
        class="q-pt-lg q-px-none"
      >
        <div class="row items-center q-col-gutter-x-xl">
          <div
            class="col-5 col-sm-3 col-md"
            :class="{ 'text-center': $q.screen.gt.sm }"
          >
            <a :href="member.links.website" target="_blank">
              <img :src="member.logo_src" class="cc__member-logo q-my-md" />
            </a>
          </div>
          <div class="col-12 col-md-10" :class="{ 'q-pl-xl': $q.screen.gt.sm }">
            <h5 class="q-mt-none q-mb-sm">
              <span>{{ member.name }}</span>
              <div class="q-gutter-md float-right q-ml-xl">
                <q-btn
                  v-for="(url, webType) in member.links"
                  :key="webType"
                  round
                  outline
                  color="indigo"
                  :icon="websiteMeta[webType].icon || 'link'"
                  :href="url"
                  :title="websiteMeta[webType].title"
                  target="_blank"
                  size="xs"
                  class="q-ml-sm q-mb-xs"
                />
              </div>
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

import {
  iconGitHub,
  iconLinkedIn,
  iconYouTube,
  iconX,
  iconZenodo,
} from 'src/icons';

const commonStore = useCommonStore();

const { members } = storeToRefs(commonStore);

const websiteMeta = {
  website: {
    icon: 'public',
    title: 'Website',
  },
  zenodo: {
    icon: iconZenodo,
    title: 'Zenodo',
  },
  linkedin: {
    icon: iconLinkedIn,
    title: 'LinkedIn',
  },
  github: {
    icon: iconGitHub,
    title: 'GitHub',
  },
  twitter: {
    icon: iconX,
    title: 'Twitter / X',
  },
  youtube: {
    icon: iconYouTube,
    title: 'YouTube',
  },
};

useMeta(() => {
  return {
    title: 'Members - Computing Continuum',
  };
});
</script>
