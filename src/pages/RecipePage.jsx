/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Heading, ListItem, Tab, TabList, Tabs, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SmallNav from "../components/Nav/SmallNav";
import SectionCntr from "../components/SectionCntr";

export default function RecipePage() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  // Fetch clicked recipe from API
  const fetchDetails = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await api.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <>
      <SmallNav/>

      <SectionCntr>
        <Flex flexDir={{base:'column', md: 'column'}} justify={'space-between'}>          
          <Flex w={'full'}>
            <Heading
            as={'h1'} 
            fontSize={{ base: '2rem', md: '2rem'}}
            fontWeight={'medium'}
            textTransform={'capitalize'}
            >
              {details.title}
            </Heading>
          </Flex>

          <Flex
          flexDir={{base: 'column', md: 'row'}}
          justifyContent={'space-between'}
          rowGap={'1em'}
          >
            <Flex w={{base:'100%', md: '48%'}} >           
              <Flex
                w={'full'}
                h={{base:'250px', md: '350px'}}
                backgroundImage={`url(${details.image})`}
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
                ></Flex> 
            </Flex>
              <Flex  w={{base:'100%', md: '48%'}} flexDir={'column'} >
                <Heading as={'h3'} fontSize={'1.25em'} fontWeight={'regular'}>Summary</Heading>
                <Text dangerouslySetInnerHTML={{__html: details.summary}}></Text>
              </Flex>
          </Flex>

          <VStack w={'100%'} m={'2em 0'} flexdir={'column'}>
            <Tabs isFitted  variant={'enclosed'} colorScheme={'orange'} w={'full'} _selected={{borderColor:'#000'}}>
              <TabList>
                <Tab 
                borderBottomColor={'grey.600'}
                _hover={{color:'brand.redOrange'}} 
                _selected={{color:'brand.redOrange', borderColor:'grey.600', borderBottomColor: 'transparent'}} 
                onClick={() => setActiveTab("instructions")} className={activeTab === 'instructions' ? 'active' : ''}
                >
                  Instructions
                </Tab>
                <Tab
                borderBottomColor={'grey.600'}
                _hover={{color:'brand.redOrange'}} 
                _selected={{color:'brand.redOrange', borderColor:'grey.600', borderBottomColor: 'transparent'}} 
                onClick={() => setActiveTab("ingredients")} className={activeTab === 'ingredients' ? 'active' : ''}
                >
                  Ingredients
                </Tab>
              </TabList>
            </Tabs>

            <Flex w={'full'}>   
              {activeTab === 'instructions' && (
                <Flex flexDir={'column'} m={'0 auto'}>
                  <Heading as={'h3'} fontSize={'1.5em'} fontWeight={'semibold'}>Instructions</Heading>
                  <Flex flexDir={'column'}>
                    <Text dangerouslySetInnerHTML={{__html: details.instructions}}></Text>
                  </Flex>
                </Flex>
              )}
              {activeTab === 'ingredients' && (                
                <Flex flexDir={'column'} m={'0 auto'}>
                  <Heading as={'h3'} fontSize={'1.5em'} fontWeight={'semibold'}>Ingredients</Heading>         
                  <UnorderedList>
                    {details.extendedIngredients.map((ingredient) =>
                      <ListItem key={ingredient.id}>{ingredient.original}</ListItem>
                    )}
                  </UnorderedList>
                </Flex>
              )}
            </Flex>
          </VStack>
        </Flex>
      </SectionCntr>
    </>
  )
};
