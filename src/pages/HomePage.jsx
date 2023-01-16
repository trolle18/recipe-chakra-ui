import Hero from '../components/Hero';
import Vegetarian from "../components/Vegetarian";
import Popular from "../components/Popular";
import { motion } from "framer-motion";
import SectionCntr from '../components/SectionCntr';
import { Flex } from '@chakra-ui/react';

export function HomePage() {
  return (
    <>
      <Hero/>
      <Flex
      h={'100%'}
      w={'100%'}
      padding={{ base: '.5em 0em', sm: '1em 0em'}}
      display={'flex'}
      flexDir={'column'}
      >
        <SectionCntr>
          <motion.div
          animate={ {opacity: 1} }
          initial={ {opacity: 0} }
          exit={ {opacity: 0} }
          transition={ {duration: 0.5} }
          >
            <Popular/>
          </motion.div>
        </SectionCntr>

        <SectionCntr>
          <motion.div
          animate={ {opacity: 1} }
          initial={ {opacity: 0} }
          exit={ {opacity: 0} }
          transition={ {duration: 0.5} }
          >
            <Vegetarian/>
          </motion.div>
        </SectionCntr>
      </Flex>
    </>
  )
};
