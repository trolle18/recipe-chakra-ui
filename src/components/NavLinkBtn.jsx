// import React, { useState } from "react";
// import { IconButton, useToast, Tooltip, Flex, Link } from "@chakra-ui/react";
// import useClipboard from "react-use-clipboard";
// import { CopyIcon, PhoneIcon } from "@chakra-ui/icons";
// import { formatePhone, formatePhoneBot } from "../helpers/index";
import { NavLink } from 'react-router-dom';
import { Icon, Text, VStack, Flex, useStyleConfig, useMultiStyleConfig } from "@chakra-ui/react";
import { FaPizzaSlice } from 'react-icons/fa';



function NavLinkBtn(props)  {
	const { variant, ...rest } = props
	const navLinkBtnStyles = useMultiStyleConfig('navLinkBtnStyles', {variant});

	return (
		<Flex __css={navLinkBtnStyles} {...rest} variant='primary'>
		</Flex>
	)
};

export default NavLinkBtn
