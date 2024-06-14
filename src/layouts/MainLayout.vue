<template>
  <q-layout view="hHh LpR lff" class="cc__layout">
    <q-dialog v-model="visibleDialogMenu" position="top" full-width full-height>
      <q-card class="bg-particles">
        <q-card-section>
          <q-btn
            unelevated
            round
            icon="close"
            color="white"
            text-color="dark"
            v-close-popup
          />
          <div class="q-gutter-y-md text-center q-pt-none q-pb-xl">
            <router-link :to="{ name: 'members' }">
              <img src="~assets/cc.svg" class="cc__logo" />
            </router-link>
            <p
              v-for="(item, idx) in menu"
              :key="idx"
              class="text-h4 text-grey-8 text-weight-light"
            >
              <router-link :to="{ name: item[1] }" class="text-body1 text-inherit">{{
                item[0]
              }}</router-link>
            </p>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-header bordered class="bg-white text-dark cc__header">
      <q-toolbar class="cc__toolbar container">
        <q-btn
          flat
          round
          v-show="$q.screen.lt.md"
          @click="visibleDialogMenu = !visibleDialogMenu"
          icon="menu"
          class="q-mr-sm"
        ></q-btn>
        <q-space v-if="$q.screen.lt.md" />
        <router-link :to="{ name: 'home' }">
          <img src="~assets/cc.svg" class="cc__logo q-my-lg" />
        </router-link>
        <q-btn-group stretch flat v-if="$q.screen.gt.sm" class="q-ml-xl">
          <q-btn
            v-for="(item, idx) in menu"
            :key="idx"
            no-caps
            :to="{ name: item[1] }"
            :label="item[0]"
          ></q-btn>
        </q-btn-group>
        <q-space />
        <a
          v-if="true"
          href="https://cloud.hipeac.net/apps/files/files/56571?dir=/Computing%20Continuum"
          target="_blank"
        >
          <q-btn round flat icon="cloud_queue" size="md" />
        </a>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page
        class="q-pa-lg"
        :class="{
          'q-py-xs': $q.screen.gt.sm,
          'bg-white': $q.screen.lt.md,
        }"
      >
        <div class="container">
          <router-view />
        </div>
      </q-page>
    </q-page-container>

    <q-footer
      class="bg-transparent text-grey-8 q-px-lg q-py-xl"
      :class="{ 'q-px-xl': $q.screen.gt.sm }"
    >
      <div class="container">
        <div
          class="row q-col-gutter-lg justify-between text-caption"
          :class="{ reverse: $q.screen.gt.sm }"
        >
          <div
            class="col-12 col-md-3 q-pt-xl"
            :class="{ 'text-right': $q.screen.gt.sm }"
          >
            <img src="~assets/eu-horizon.svg" class="eu__logo" />
          </div>
          <div class="col-12 col-md-9">
            <p class="text-caption q-mb-sm">
              <strong>&copy; 2023 Computing Continuum</strong>
            </p>
            <p class="text-caption">
              <!--Computing Continuum is .-->
            </p>
            <div class="q-gutter-x-lg q-my-md text-grey">
              <a
                href="https://github.com/computing-continuum"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                class="text-inherit"
              >
                <q-icon :name="iconGitHub" size="sm" />
              </a>
              <a
                href="https://mastodon.social/@computing_continuum"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mastodon"
                class="text-inherit"
              >
                <q-icon :name="iconMastodon" size="sm" />
              </a>
            </div>
            <!--<div class="q-gutter-x-md">
              <a href="/privacy-policy/" class="inherit">Privacy policy</a>
              <a href="/disclaimer/" class="inherit">Disclaimer</a>
              <a :href="`mailto:${contactEmail}`" class="inherit">
                <q-icon name="alternate_email" class="q-mr-xs"></q-icon>Contact</a
              >
            </div>-->
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { iconGitHub, iconMastodon } from 'src/icons';

const visibleDialogMenu = ref(false);
const menu = [
  ['Mission statement', 'mission'],
  ['Members', 'members'],
];
</script>
