export const cardStyles = {      
  baseStyle: {
    height: 'full',
    flexDirection: 'column',
    borderRadius: '.25em',
    boxShadow: 'md',
    overflow: 'hidden',
    _hover: { boxShadow: 'lg' },
    _focus: { boxShadow: 'lg' },
  },

  variants: {
    primary: {
      boxShadow: 'md',
    },
    rounded: {
      borderRadius: '.25em',
    }, 
  }
}