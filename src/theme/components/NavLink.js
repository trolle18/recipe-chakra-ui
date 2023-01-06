import { mode } from "@chakra-ui/theme-tools";


export const navLinkBtnStyles = {
  // components: {
  //   NavLinkBtn: {
      baseStyle: {
        // width: '4rem',
        // height: '4rem',
        // padding: '.1em',
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: '50%',
        // bg: '#000',
        // color: 'white',
        fontSize: '.6rem',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none', 
      },

      variants: {
        primary: {
          flexDirection: 'column',
          bg: "transparent",
          color: "black",
          _hover: { bg: "brand.redOrange" },
          _focus: { bg: "brand.redOrange" },
          _active: { bg: "brand.redOrange" },
        },

        black: {
          width: '4rem',
          height: '4rem',
          padding: '.1em',
          flexDirection: 'column',
          borderRadius: '50%',
          bg: "#000",
          color: "white",
          _hover: { bg: "brand.redOrange" },
          _focus: { bg: "brand.redOrange" },
          _active: { bg: "brand.redOrange" },
        },
        white: {
          width: '4rem',
          height: '4rem',
          padding: '.1em',
          flexDirection: 'column',
          borderRadius: '50%',
          bg: "white",
          color: "black",
          _hover: { bg: "brand.redOrange" },
          _focus: { bg: "brand.redOrange" },
          _active: { bg: "brand.redOrange" },
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

        // dark: (props) => ({
        //   color: "white",
        //   bg: mode("gray.700", "blue.500")(props),
        //   fontSize: "10px",
        //   _hover: { bg: mode("gray.700", "blue.500")(props) },
        //   _focus: { bg: mode("gray.700", "blue.600")(props) },
        //   _active: { bg: mode("gray.700", "blue.400")(props) },
        // }),

        // light: (props) => ({
        //   color: mode("gray.700", "gray.700")(props),
        //   bg: mode("gray.100", "white")(props),
        //   fontSize: "10px",
        //   _hover: { bg: mode("gray.50", "white")(props) },
        //   _focus: { bg: mode("gray.50", "white")(props) },
        //   _active: { bg: mode("gray.50", "white")(props) },
        // }),
      },
};