import "/Users/samdevlin/Projects/recipe-site/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/Users/samdevlin/Projects/recipe-site/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/Users/samdevlin/Projects/recipe-site/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/Users/samdevlin/Projects/recipe-site/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/Users/samdevlin/Projects/recipe-site/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/Users/samdevlin/Projects/recipe-site/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
