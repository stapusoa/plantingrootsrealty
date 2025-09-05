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
          "layer"
        ]
      }
    ]
  },
  ignoreFiles: ["**/dist/**", "**/build/**", "**/storybook-static/**"]
};