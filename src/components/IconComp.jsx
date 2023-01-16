import { useStyleConfig, Icon } from "@chakra-ui/react";

export default function IconComp(props)  {
  const { variant, ...rest } = props
  const iconStyles = useStyleConfig('iconStyles', {variant});

  return (
    <Icon __css={iconStyles} {...rest}/>
  )
};
