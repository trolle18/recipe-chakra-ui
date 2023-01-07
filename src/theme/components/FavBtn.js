export const favBtnStyles = {
  baseStyle: {
    height: '2em',
    width: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10em',
    boxShadow: 'sm',
    fontSize: '1em',
    cursor: 'pointer',
    bg: "white",
    color: "black",
    _hover: { color: "brand.redOrange", boxShadow: 'md', },
    _focus: { color: "brand.redOrange" },
    _active: { color: "brand.redOrange" },
  },

  variants: {
    primary: {
      bg: "transparent",
      color: "black",
    },
    "no-effects": {
      _hover: "none",
      _active: "none",
      _focus: "none",
    },

  },
};
