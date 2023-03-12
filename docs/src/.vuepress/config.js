const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Sam's Food Repo",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Weekday Meal Prep",
        link: "/recipes/weekdays/",
      },
      {
        text: "I got a little time",
        link: "/recipes/general/",
      },
      {
        text: "Pure Doort",
        link: "/recipes/sugary/",
      },
    ],
    sidebar: {
      "/recipes/general/": [
        {
          title: "Fun Recipes",
          collapsable: false,
          // children: ["", "using-vue"],
        },
      ],
      "/recipes/weekdays/": [
        {
          title: "Weekday Meal Prep",
          collapsable: false,
          children: ["", "Rice"],
        },
      ],
      "/recipes/sugary/": [
        {
          title: "Fun Recipes",
          collapsable: false,
          // children: ["", "using-vue"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
