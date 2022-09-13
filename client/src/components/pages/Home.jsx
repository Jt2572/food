import Recipes from "../cards/Recipes";

import Filters from "../filters/Filters";
import Header from "../header/Header";


function Home() {
    return (
        <div >
            <Header/>   
            <Filters/>        
            <Recipes/>            
        </div>
    )
}

export default Home;