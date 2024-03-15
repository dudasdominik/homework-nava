/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      "background-color": "var(--background-color)",
      "variable-collection-cardstroke": "var(--variable-collection-cardstroke)",
      "variable-collection-containerstroke": "var(--variable-collection-containerstroke)",
      "variable-collection-highlight": "var(--variable-collection-highlight)",
      "variable-collection-picturestroke": "var(--variable-collection-picturestroke)",
      "variable-collection-textcolor": "var(--variable-collection-textcolor)",
      "variable-collection-textstroke": "var(--variable-collection-textstroke)",
    },
    fontFamily: {
      "card-details": "var(--card-details-font-family)",
      h1: "var(--h1-font-family)",
      h3: "var(--h3-font-family)",
      "small-ID": "var(--small-ID-font-family)",
    },
  },
};
export const plugins = [];
