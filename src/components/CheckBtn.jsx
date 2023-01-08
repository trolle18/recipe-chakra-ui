import { Flex, useCheckbox, chakra, Icon } from "@chakra-ui/react"
import { IoHeart } from "react-icons/io5"


export default function CheckBtn() {
  const HeartCheckbox = (props) => {    
    const { state, getCheckboxProps, getInputProps, htmlProps } = useCheckbox(props)
    return (
      <chakra.label
      w={'2em'}
      h={'2em'}
      p={'.5em'}
      display={'flex'}
      flexDir={'row'}
      alignItems={'center'}
      bg={'white'}
      borderRadius={'100'}
      cursor={'pointer'}
      {...htmlProps}
      >
        <input {...getInputProps()} hidden />
        
        <Flex {...getCheckboxProps()} >
          <Icon
          as={IoHeart}
          color={state.isChecked && "brand.redOrange" }
          />
        </Flex>
      </chakra.label>
    )
  }

  return (
    <>
      <HeartCheckbox />
    </>
  )
};
