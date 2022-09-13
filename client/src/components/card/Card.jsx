
function Card({ name, image, score, diet, id }) {

    return (


        <div class="container mx-5 my-4 flex  justify-center">
            <div className=" flex flex-col justify-center w-64  shadow-lg shadow-current">

                <img src={image} class="w-full" alt="..." />
                <div class=" flex justify-center text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">{name}</div>
                <p class="flex justify-center">{diet?.map(d => d)}</p>
                <a href="/home" class="text-center bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">details</a>

            </div>
        </div>


    )
}
export default Card;

