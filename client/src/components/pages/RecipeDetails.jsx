import { useSelector } from "react-redux";


const RecipeDetails = () => {
    const { recipesId } = useSelector(state => state.recipes)
    return (
        <div>
            <div>Details</div>
            {recipesId && recipesId.map(r => (<>
                <div>{r.name}</div>
                <img src={r.image} alt={r.name} />
                <div>{r.summary}</div>
            </>
            ))}
        </div>
    )

}
export default RecipeDetails;