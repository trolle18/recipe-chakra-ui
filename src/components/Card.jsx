import { useStyleConfig, Flex } from "@chakra-ui/react";

function Card(props)  {
  const { variant, ...rest } = props
  const cardStyles = useStyleConfig('cardStyles', {variant});

  return (
    <Flex __css={cardStyles} {...rest}/>
  )
};

export default Card