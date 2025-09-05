module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-tailwindcss",
    "stylelint-config-prettier"
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer",
          "custom-variant",
          "theme",
          "themecss",
          "utility",
          "utilities",
          "component",
          "components",
          "base",
          "basecss",
          "config",
          "keyframes",
          "font-face",
          "import",
          "supports",
          "media",
          "container",
          "mixin",
          "include",
          "function",
          "return",
          "if",
          "else",
          "each",
          "for",
          "while"
        ]
      }
    ]
  },
  ignoreFiles: ["**/dist/**", "**/build/**", "**/storybook-static/**"]
};