interface Member {
  code: string;
  name: string;
  long_name: string;
  description: MarkdownText;
  links: {
    website: Url;
    twitter?: Url;
    linkedin?: Url;
    youtube?: Url;
    github?: Url;
  };
  // ---
  logo_src?: string;
}
