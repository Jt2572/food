import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRec, getAllDiets } from '../../features/reducers/recipesActions';



import Header from "../header/Header";


export function validate(Input) {
    let error = {}
    let validateName = /^[a-zA-Z\s]+$/;
    let validateUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;

    !validateName.test(Input.name) && (error.name = "special characters not  allowed")
    !Input.summary.length && (error.summary = "empty field not allowedy");
    Input.summary.length < 40 && (error.summary = "minimum characters 40");
    !validateUrl.test(Input.image) && (error.image = "special characters not  allowed")
    !Input.instructions.length && (error.instructions = "empty field not allowedy");
    Input.instructions.length < 80 && (error.instructions = "minimum characters 80");
    (Input.score <= 0 || Input.score > 100) && (error.score = "number between 1-100");

    return error
}

function CreateRecipe() {

    // const dispatch = useDispatch()    


    const initialState = {
        name: '',
        score: '',
        summary: '',
        instructions: '',
        isLoading: false,
        image: '',
        dietTypes: []
    }

    const diets = useSelector(state => state.recipes.diets);

    const [Error, setError] = useState({});
    const [Input, setInput] = useState(initialState);

    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        setInput(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

        setError(validate({ ...Input, [e.target.name]: e.target.value }))
        return Error
    }

    const handleCheck = (e) => {
        if (e.target.checked && !Input.dietTypes.includes(e.target.value)) {
            setInput({
                ...Input,
                dietTypes: [...Input.dietTypes, e.target.value],
            });
        // console.log(e.target.value)
        } else if (!e.target.checked) {
            setInput({
                ...Input,
                dietTypes: [],
            });
            
        }
    };

    useEffect(()=> {
        dispatch(getAllDiets())
    }, [dispatch])
    // console.log('Input ', Input)

    let handleSubmit = (e) => {
        e.preventDefault();
        if (Input.name && !Object.keys(Error).length) {
            console.log(Input)
            dispatch(createRec(Input));
            console.log(Input)
            // setInput({
            //     name: '',
            //     score: '',
            //     summary: '',
            //     instructions: '',
            //     image: '',
            //     dietTypes: []
            // });
            // window.location.reload();
            alert("recipe created !");
        } else {
            alert("... field required");
        }
    }


    return (
        <div >
            <Header />
            <div className="flex flex-col mb-16 ">
                {/* <div className="flex text-7xl text-red-500 justify-center p-8"> ... on construction  </div> */}

                <div className="flex justify-center  p-8 text-yellow-900 text-2xl font-semibold"> Create Recipe  </div>

                <div className="flex justify-center ">
                    <div className="p-5 w-[25rem] shadow-lg shadow-current ">
                        <form className=' items-center w-84 '>

                            <div className="form-group flex flex-row  items-center justify-between pt-2">
                                <label className=' text-yellow-900 font-medium text-sm'>Name</label>
                                <input
                                    type="text"
                                    className="form-control  block w-72 px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    key={Input.name}
                                    name='name'
                                    autoComplete="off"
                                    value={Input.name}
                                    onChange={handleOnChange}
                                    placeholder="Recipe Name" />
                            </div>
                            {Error.name && <p className="text-xs text-center text-red-500">{Error.name}</p>}


                            <div>
                                <div className="form-group flex flex-row  items-center justify-between pt-2">
                                    <label className=' text-yellow-900 font-medium text-sm'>Summary</label>
                                    <input
                                        type="text"
                                        className="form-control  block w-72 px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        key={Input.name}
                                        name='summary'
                                        autoComplete="off"
                                        value={Input.summary}
                                        onChange={handleOnChange}
                                        placeholder="Recipe Name" />
                                </div>
                                {Error.summary && <p className="text-xs text-center text-red-500">{Error.summary}</p>}

                            </div>


                            <div className="form-group flex flex-row  items-center justify-between pt-2">
                                <label className=' text-yellow-900 font-medium text-sm'>Image</label>
                                <input
                                    type="text"
                                    className="form-control  block w-72 px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    key={Input.name}
                                    id='image'
                                    name='image'
                                    autoComplete="off"
                                    value={Input.image}
                                    onChange={handleOnChange}
                                    placeholder="URL image (opcional)" />
                            </div>
                            {Error.image && <p className="text-xs text-center text-red-500" >{Error.image}</p>}

                            <div className="form-group flex flex-row  items-center justify-between pt-2">
                                <label className=' text-yellow-900 font-medium text-sm tracking-tighter'>Instructions</label>
                                <textarea
                                    className="form-control block w-72 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded  transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13"
                                    rows="3"
                                    type='textarea'
                                    name='instructions'
                                    value={Input.instructions}
                                    onChange={handleOnChange}
                                ></textarea>
                            </div>
                            {Error.instructions && <p className="text-xs text-center text-red-500">{Error.instructions}</p>}

                            <div className="form-group flex flex-row  items-center justify-between pt-2">
                                <label className=' text-yellow-900 font-medium text-sm'>Score</label>
                                <div className='w-72 flex justify-center'>
                                    <input
                                        type='number'
                                        name='score'
                                        className='w-32 text-center border rounded-sm'
                                        value={Input.score}
                                        onChange={handleOnChange}
                                    />

                                </div>
                            </div>
                            {Error.score && <p className="text-xs text-center text-red-500">{Error.score}</p>}

                            <div className="form-group flex flex-row  items-center justify-between pt-2">
                                <label className=' text-yellow-900 font-medium text-sm tracking-tighter'>Diets</label>
                                <br />
                                <div className='w-72 grid grid-cols-2 gap-0 '>

                                    {diets && diets.map((d) => (
                                        <div className='w-84'>
                                            <label className='text-xs flex flex-row'
                                                htmlFor={d.name} key={d.name}>
                                                <input
                                                    type="checkbox"
                                                    name={d.name}
                                                    value={d.name}
                                                    onChange={handleCheck}
                                                />
                                                {d.name}{" "}
                                            </label>

                                        </div>
                                    ))}
                                </div>
                            </div>


                        </form>
                        <div className='flex justify-center pt-4'>
                            <button disabled={!Input.name || Object.keys(Error).length > 0}
                                onClick={e => handleSubmit(e)}
                                className='flex justify-center w-32 items-center py-1 text-sm px-3 ml-2   text-amber-50 rounded-lg  bg-yellow-900 hover:bg-gradient-to-bl focus:outline-none disabled:bg-gray-400'
                                type="submit"
                                
                            >create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateRecipe;