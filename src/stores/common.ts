import { computed } from 'vue';
import { defineStore } from 'pinia';

import data from 'src/data/members';

export const useCommonStore = defineStore('common', () => {
  const members = computed<Member[]>(() => {
    const validLinks = ['website', 'github', 'linkedin', 'twitter', 'youtube'];

    return (Object.values(data) as Member[]).map((member) => {
      const links = member.links;
      const sortedLinks = Object.fromEntries(
        Object.entries(links)
          .filter(([key]) => validLinks.includes(key))
          .sort(([key1], [key2]) => validLinks.indexOf(key1) - validLinks.indexOf(key2)),
      );
      return {
        ...member,
        links: {
          ...sortedLinks,
          website: member.links.website,
        },
        logo_src: new URL(
          `/src/assets/member-logos/${member.code}.png`,
          import.meta.url,
        ).href,
      };
    });
  });

  return {
    members,
  };
});
