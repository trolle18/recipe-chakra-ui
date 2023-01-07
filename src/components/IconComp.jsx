import { useStyleConfig, Icon } from "@chakra-ui/react";

function IconComp(props)  {
  const { variant, ...rest } = props
  const iconStyles = useStyleConfig('iconStyles', {variant});

  return (
    <Icon __css={iconStyles} {...rest}/>
  )
};

export default IconComp