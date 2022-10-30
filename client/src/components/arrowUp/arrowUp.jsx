import { useEffect } from "react";

const ArrowUp = ({ScreenY}) => {


    const [UpButton] = document.getElementsByName("UpButton")
    UpButton&&UpButton.addEventListener("click", scrollUp);
  
    function scrollUp() {
      var currentScroll = document.documentElement.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 75))
      }
    }
  
  
  
    window.onscroll = function () {
      var scroll = document.documentElement.scrollTop;
      if (scroll > 500) {
        UpButton&&(UpButton.style.transform = "scale(1)")
      } else {
        UpButton&&(UpButton.style.transform = "scale(0)")
      }
    }


    useEffect(()=>{
        console.log('ScreenY ',ScreenY)
    },[ScreenY])

    return (
        <div name="UpButton" className="flex justify-end w-full z-10  fixed bottom-16 ">
            <div name="UpButton" className=" bg-amber-500 rounded pl-[.35rem] pr-[.35rem] pt-[.15rem] pb-[.15rem] mr-8 cursor-pointer select-none	hover:scale-150 hover:transition ease-in-out delay-150 ">^</div>
        </div>

    )

}

export default ArrowUp;