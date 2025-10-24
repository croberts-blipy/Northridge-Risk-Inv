import eslintConfigNext from "eslint-config-next";

export default [
  {
    ignores: ["node_modules", ".next", "dist"],
  },
  ...eslintConfigNext(),
  {
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
];
