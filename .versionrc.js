module.exports = {
  types: [
    {
      type: "feat",
      section: "Features",
    },
    {
      type: "fix",
      section: "Bug Fixes",
    },
    {
      type: "cfix",
      section: "Dev Bug Fixes",
      hidden: true,
    },
    {
      type: "wip",
      section: "Working in progress",
      hidden: true,
    },
    {
      type: "chore",
      hidden: true,
    },
    {
      type: "docs",
      hidden: true,
    },
    {
      type: "style",
      hidden: true,
    },
    {
      type: "refactor",
      hidden: true,
    },
    {
      type: "perf",
      hidden: true,
    },
    {
      type: "build",
      hidden: true,
    },
    {
      type: "test",
      hidden: true,
    },
    {
      type: "revert",
      hidden: true,
    },
  ],
  commitUrlFormat: "https://github.com/bilwifi/gh-action-expo/commit/{{hash}}",
  compareUrlFormat:
    "https://github.com/bilwifi/gh-action-expo/compare/{{previousTag}}...{{currentTag}}",
  //releaseCommitMessageFormat: "(bump): version {{currentTag}} [no ci]",
};
