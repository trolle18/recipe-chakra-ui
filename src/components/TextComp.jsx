import { Text, useStyleConfig } from "@chakra-ui/react";

export default function TextComp(props)  {
	const { variant, ...rest } = props
	const textStyles = useStyleConfig('textStyles', {variant});

	return (
		<Text __css={textStyles} {...rest}></Text>
	)
};
