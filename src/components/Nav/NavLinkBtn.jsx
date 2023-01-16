import {  Flex, useMultiStyleConfig } from "@chakra-ui/react";

export default function NavLinkBtn(props)  {
	const { variant, ...rest } = props
	const navLinkBtnStyles = useMultiStyleConfig('navLinkBtnStyles', {variant});

	return (
		<Flex __css={navLinkBtnStyles} {...rest}></Flex>
	)
};
