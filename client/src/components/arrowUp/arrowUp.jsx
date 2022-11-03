import { useState } from "react";

const ArrowUp = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true)
    }
    else if (scrolled <= 200) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div name="UpButton" className="flex justify-end w-full z-10  fixed bottom-16 " onClick={scrollToTop} style={{ display: visible ? 'flex' : 'none' }} >
      <div name="UpButton" className=" bg-amber-500 rounded pl-[.35rem] pr-[.35rem] pt-[.15rem] pb-[.15rem] mr-8 cursor-pointer select-none	hover:scale-150 hover:transition ease-in-out delay-150 ">^</div>
    </div>
  )

}

export default ArrowUp;