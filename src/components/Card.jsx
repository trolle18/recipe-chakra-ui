import { useStyleConfig, Flex } from "@chakra-ui/react";

export default function Card(props)  {
  const { variant, ...rest } = props
  const cardStyles = useStyleConfig('cardStyles', {variant});

  return (
    <Flex __css={cardStyles} {...rest}/>
  )
};
