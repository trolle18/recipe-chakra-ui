import { Link, NavLink } from "react-router-dom";
import BurgerMenu from "./Nav/BurgerMenu";
import Categories from "./Nav/Categories";
import Search from "./Search";
import { GiKnifeFork } from "react-icons/gi";
import { IoHeart } from "react-icons/io5";
// import { FaPizzaSlice } from "react-icons/fa";


export default function SmallNav() {
    return (
        <>
        <nav className="slim-nav-cntr">
            <div className="slim-nav">
                <Link to={"/"} className="slim-nav__logo">
                    <GiKnifeFork/>
                    <h1>Recipes</h1>
                </Link>

                <div className="slim-nav__navigation">
                    <section className='categories'>                
                        <Categories/>

                        <NavLink to={'/favorites'} className="category-link">
                            <IoHeart/>
                            <h4>Favorites</h4>
                        </NavLink>

                    </section>
                    
                    <Search/>
                </div>
                <BurgerMenu/>
            </div>
        </nav>  
        <div className="hidden" id="nav-overflow"></div>        
        </>
    );
};
