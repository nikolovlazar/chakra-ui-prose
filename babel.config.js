module.exports = {
  plugins: [
    "@chakra-ui/babel-plugin",
    "@babel/plugin-proposal-class-properties",
    "@babel/proposal-object-rest-spread",
  ],
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        modules: false,
        loose: true,
      },
    ],
  ],
}
