import { useStyleConfig, Grid } from "@chakra-ui/react";

function GridCntr(props)  {
  const { variant, ...rest } = props
  const gridCntrStyles = useStyleConfig('gridCntrStyles', {variant});

  return (
    <Grid __css={gridCntrStyles} {...rest}/>
  )
};

export default GridCntr