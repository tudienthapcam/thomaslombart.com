/**
 * Night Owl theme by Sarah Drasner
 * @see https://github.com/sdras/night-owl-vscode-theme
 */
export default {
  plain: {
    color: "#d6deeb",
    backgroundColor: "#011627",
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
      },
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "rgb(173, 219, 103)",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(99, 119, 119)",
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(173, 219, 103)",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(236, 196, 141)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)",
      },
    },
    {
      types: ["builtin", "char", "constant"],
      style: {
        color: "rgb(130, 170, 255)",
      },
    },
    {
      types: ["punctuation", "function", "selector", "doctype"],
      style: {
        color: "rgb(199, 146, 234)",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(255, 203, 139)",
      },
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "rgb(127, 219, 202)",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)",
      },
    },
    {
      types: ["property"],
      style: {
        color: "rgb(128, 203, 196)",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
      },
    },
  ],
};
