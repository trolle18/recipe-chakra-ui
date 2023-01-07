import {  Flex, useMultiStyleConfig } from "@chakra-ui/react";


function NavLinkBtn(props)  {
	const { variant, ...rest } = props
	const navLinkBtnStyles = useMultiStyleConfig('navLinkBtnStyles', {variant});

	return (
		<Flex __css={navLinkBtnStyles} {...rest}></Flex>
	)
};

export default NavLinkBtn
