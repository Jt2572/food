import { Route, Routes } from 'react-router-dom'
import Landing from '../components/landing/Landing';
import CreateRecipe from '../components/pages/CreateRecipe';
import Home from '../components/pages/Home';
import RecipeDetails from '../components/pages/RecipeDetails';

function RoutesApp() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/details" element={<RecipeDetails />} />
                <Route path="/createrecipe" element={<CreateRecipe />} />
            </Routes>
        </div>
    )
}
export default RoutesApp;