export const navLinkBtnStyles = {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none', 
  },

  variants: {
    primary: {
      flexDirection: 'column',
      bg: "transparent",
      color: "black",
      _hover: { color: "brand.redOrange" },
      _focus: { color: "brand.redOrange" },
      _active: { color: "brand.redOrange" },
    },

    black: {
      flexDirection: 'column',
      borderRadius: '50%',
      color: "#000",
      _hover: { color: "brand.redOrange" },
      _focus: { color: "brand.redOrange" },
      _active: { color: "brand.redOrange" },
    },
    white: {
      flexDirection: 'column',
      borderRadius: '50%',
      color: "#fff",
      _hover: { color: "brand.redOrange" },
      _focus: { color: "brand.redOrange" },
      _active: { color: "brand.redOrange" },
    },

    blackRound: {
      height: {base: '4em', sm: '4em', md: '5em'},
      width: {base: '4em', sm: '4em', md: '5em'},
      padding: '.5em',
      flexDirection: 'column',
      borderRadius: '50em',
      bg: "#000",
      color: "white",
      _hover: { bg: "brand.redOrange" },
      _focus: { bg: "brand.redOrange" },
      _active: { bg: "brand.redOrange" },
    },
    whiteRound: {
      width: '4em',
      height: '4em',
      padding: '.1em',
      flexDirection: 'column',
      borderRadius: '50%',
      bg: "white",
      color: "black",
      _hover: { color: "brand.redOrange"},
      _focus: { color: "brand.redOrange" },
      _active: { color: "brand.redOrange"},
    },
    plainRound: {
      width: 'auto',
      height: '2em',
      padding: '0',
      flexDirection: 'column',
      borderRadius: '0',
      bg: "transparent",
      color: "black",
      _hover: { color: "brand.redOrange"},
      _focus: { color: "brand.redOrange" },
      _active: { color: "brand.redOrange"},
    },

    "no-effects": {
      _hover: "none",
      _active: "none",
      _focus: "none",
    },

    // outlined: (props) => ({
    //   color: mode("blue.400", "white")(props),
    //   bg: "transparent",
    //   fontSize: "10px",
    //   border: "1px solid",
    //   borderColor: { bg: mode("blue.400", "white")(props)},
    //   _hover: { bg: mode("blue.50", "transparent")(props) },
    //   _focus: { bg: mode("blue.50", "transparent")(props) },
    //   _active: { bg: mode("blue.50", "transparent")(props) },
    // }),

  },
};
