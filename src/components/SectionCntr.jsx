import { useStyleConfig, Flex } from "@chakra-ui/react";

export default function SectionCntr(props)  {
  const { variant, ...rest } = props
  const sectionCntrStyles = useStyleConfig('sectionCntrStyles', {variant});

  return (
    <Flex __css={sectionCntrStyles} {...rest}/>
  )
};
