import { computed } from 'vue';
import { defineStore } from 'pinia';

import data from 'src/data/members';

export const useCommonStore = defineStore('common', () => {
  const members = computed<Member[]>(() =>
    (Object.values(data) as Member[]).map((member) => {
      return {
        ...member,
        logo_src: new URL(
          `/src/assets/member-logos/${member.code}.png`,
          import.meta.url,
        ).href,
      };
    }),
  );

  return {
    members,
  };
});
