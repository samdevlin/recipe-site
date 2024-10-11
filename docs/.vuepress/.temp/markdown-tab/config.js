import { CodeTabs } from "/Users/samdevlin/Projects/recipe-site/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/samdevlin/Projects/recipe-site/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/samdevlin/Projects/recipe-site/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
