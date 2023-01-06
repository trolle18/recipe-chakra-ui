// import React, { useState } from "react";
// import { IconButton, useToast, Tooltip, Flex, Link } from "@chakra-ui/react";
// import useClipboard from "react-use-clipboard";
// import { CopyIcon, PhoneIcon } from "@chakra-ui/icons";
import {  Flex, useMultiStyleConfig } from "@chakra-ui/react";

function NavLinkBtn(props)  {
	const { variant, ...rest } = props
	const navLinkBtnStyles = useMultiStyleConfig('navLinkBtnStyles', {variant});

	return (
		<Flex __css={navLinkBtnStyles} {...rest}>
		</Flex>
	)
};

export default NavLinkBtn
