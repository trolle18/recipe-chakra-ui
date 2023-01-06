import Nav from '../components/Nav';
import Vegetarian from "../components/Vegetarian";
import Popular from "../components/Popular";
import { motion } from "framer-motion";


export function HomePage() {
  return (
    <>
      <Nav />
      <section className="page homepage">                
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
      </section>
    </>
  )
}