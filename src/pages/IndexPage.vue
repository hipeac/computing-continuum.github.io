<template>
  <div class="text-center">
    <div class="row justify-center">
      <div class="col-12 col-md-11 q-pt-lg">
        <h3 :class="{'text-h4': $q.screen.lt.md }">
          Computing Continuum is a collaborative platform driving Europe's
          computing systems innovation and alignment. We focus on research,
          technology development, and strategic partnerships.
        </h3>
      </div>
    </div>
    <div class="row q-col-gutter-x-xl q-my-xl q-py-xl">
      <div class="col-12 col-md">
        <q-icon
          name="lightbulb"
          size="lg"
          color="blue-grey-5"
          class="q-mb-md"
        />
        <p>
          At Computing Continuum, we advance research in computing systems,
          fostering innovation that supports Europe's digital infrastructure.
        </p>
      </div>
      <div class="col-12 col-md">
        <q-icon name="dashboard" size="lg" color="grey-7" class="q-mb-md" />
        <p>
          Our projects range from developing AI technologies to sustainable
          computing solutions, emphasizing collaboration and technological
          progress.
        </p>
      </div>
      <div class="col-12 col-md">
        <q-icon name="group_work" size="lg" color="indigo-5" class="q-mb-md" />
        <p>
          We build strategic partnerships to enhance our research capabilities,
          bringing together academia, industry, and policymakers for a unified
          approach.
        </p>
      </div>
      <div class="col-12 col-md">
        <q-icon
          name="trending_up"
          size="lg"
          color="deep-purple-5"
          class="q-mb-md"
        />
        <p>
          Stay informed about the latest in computing technology and policy
          directions, as we lead initiatives for Europe's digital future.
        </p>
      </div>
    </div>
    <q-separator class="q-my-xl" />
    <h6 class="text-blue-grey q-mb-xl">
      Featuring essential JUs and projects at the heart of Europe's computing
      landscape
    </h6>
    <div class="row justify-center q-gutter-xl cc__home-logo q-mb-xl">
      <div
        v-for="member in members"
        :key="member.code"
        class="column justify-center"
      >
        <a :href="member.links.website" target="cc" ref="noopener noreferrer">
          <img :src="member.logo_src" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMeta } from 'quasar';

import { useCommonStore } from 'src/stores/common';

const commonStore = useCommonStore();

const { members } = storeToRefs(commonStore);

useMeta(() => {
  return {
    title: 'Computing Continuum',
  };
});
</script>
