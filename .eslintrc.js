module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/airbnb", "@vue/typescript"],
  rules: {
    // "comma-dangle": [
    //   "warn",
    //   {
    //     arrays: "always",
    //     objects: "always",
    //     imports: "never",
    //     exports: "never",
    //     functions: "always",
    //   },
    // ],
    quotes: ["warn", "backtick"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
