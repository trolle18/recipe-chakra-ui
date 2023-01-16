export const navLinkBtnStyles = {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none', 
    bg: "transparent",
    color: "#000", 
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
      color: "#000",
      _hover: { color: "brand.redOrange" },
      _focus: { color: "brand.redOrange" },
      _active: { color: "brand.redOrange" },
    },
    white: {
      flexDirection: 'column',
      color: "#fff",
      _hover: { color: "brand.redOrange" },
      _focus: { color: "brand.redOrange" },
      _active: { color: "brand.redOrange" },
    },

    blackRound: {
      height: {base:'3em', sm:'4em', md:'5em'},
      width: {base:'3em', sm:'4em', md:'5em'},
      padding: {base:'.5em .25em', sm:'.5em', md:'.5em'},
      flexDirection: 'column',
      borderRadius: '50em',
      bg: {base:'transparent', sm:'#000' },
      color: {base:'black', sm:'white'},
      _focus: { bg:"brand.redOrange" },
      _active: { bg:"brand.redOrange" },
      _hover: {
       bg:{ base:'transparent', sm:"brand.redOrange" },
       color: { base:'brand.redOrange', sm:'white'}
      },
      
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
