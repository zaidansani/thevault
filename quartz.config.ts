import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "the vault (m. zaidan)",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "zaidansani.github.io/thevault",
    ignorePatterns: [
      "the repository/administrative", 
      "private", 
      "the repository/templates", 
      ".obsidian",
      "the repository/.obsidian",
      "*/media/*.md",],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Outfit",
        body: "Outfit",
        code: "Atkinson Hyperlegible Mono",
      },
      colors: {
        lightMode: {
          light: "#FEF9EF",
          lightgray: "#d6e2e9",
          gray: "#95b8d1",
          darkgray: "#131B23",
          dark: "#5B46AF",
          secondary: "#C3465D",
          tertiary: "#119285",
          highlight: "rgba(200,171,255,0.43)",
          textHighlight: "rgba(200,171,255,0.43)",
        },
        darkMode: {
          light: "#020d26",
          lightgray: "#343a40",
          gray: "#95b8d1",
          darkgray: "#f0efeb",
          dark: "#988AD0",
          secondary: "#D78493",
          tertiary: "#7FF0E5",
          highlight: "rgba(146,83,255,0.44)",
          textHighlight: "rgba(146,83,255,0.44)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "mathjax" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "relative" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "mathjax" }),
    ],
    filters: [
      Plugin.NoExcalidraw()
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
