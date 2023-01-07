import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Vegetarian from "../components/Vegetarian";
import Popular from "../components/Popular";
import { motion } from "framer-motion";
import SectionCntr from '../components/SectionCntr';


export function HomePage() {
  return (
    <>
      <Hero/>
      <SectionCntr>                
        <motion.div 
          animate={ {opacity: 1} }
          initial={ {opacity: 0} }
          exit={ {opacity: 0} }
          transition={ {duration: 0.5} }>
  
          <Popular/>
          <Vegetarian/>
        </motion.div>
        {/* <section className="page-section-right">
            <h1>article</h1>
            <Favorites /> 
        </section> */}
      </SectionCntr>
    </>
  )
}