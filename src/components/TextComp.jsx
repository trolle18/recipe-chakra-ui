import { Text, useStyleConfig } from "@chakra-ui/react";

function TextComp(props)  {
	const { variant, ...rest } = props
	const textStyles = useStyleConfig('textStyles', {variant});

	return (
		<Text __css={textStyles} {...rest}></Text>
	)
};
export default TextComp
