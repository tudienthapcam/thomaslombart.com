module.exports = {
  purge: ["./src/**/*.js"],
  variants: {
    margin: ["first", "responsive"],
    extend: {
      transform: ["motion-reduce"],
      scale: ["hover"],
    },
  },
  theme: {
    scale: {
      103: "1.03",
      105: "1.05",
    },
  },
};
