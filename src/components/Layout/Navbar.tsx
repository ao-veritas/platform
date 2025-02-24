import { ConnectButton } from "arweave-wallet-kit";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { brandLightText, brandSecondaryBg, brandSecondaryText } from "../../utils/colors";

export default function Navbar() {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  // let path = window.location.hash.split("#");
  let path = location.pathname.split("/");
  console.log(path[1])
  // const validPaths = ["about", "profile", "faucet", "project", "addProject", ""];
  // let pageTitle = validPaths.includes(path[1]?.toLowerCase()) ? path[1] : "Home"; 
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  //   // event({
  //   //   action: 'toggle_menu',
  //   //   category: 'Navigation',
  //   //   label: 'Menu Toggle',
  //   //   value: isOpen ? 'Close' : 'Open',
  //   // });
  // };
  return (
    <>
    <nav className="md:flex hidden justify-between items-center px-[30px] py-[21px] fadeIn fixed w-full z-50 bg-[#40959d00] backdrop-blur-[9px]">
      <a href="#">
        <img
          alt="Home"
          src={"https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/logo.svg"}
          className="lg:h-[30px] lg:w-[75px] h-[21px] w-[45px]"
        />
      </a>
      <div className="flex flex-row lg:gap-[45px] gap-[24px] text-[#eeeeee] lg:text-[16.5px] text-[12px] tracking-wider">
      <a href="#" className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
          ${path[1]==""? `${brandSecondaryText} underline`: brandLightText}`}>
          Home
        </a>
        <a href="#about" className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
          ${path[1]=="about"? `${brandSecondaryText} underline`: brandLightText}`}>
          About Us
        </a>
        <a className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
        ${path[1]=="profile"? `${brandSecondaryText} underline`: brandLightText}`} href="#profile">
          Your Profile
        </a>{" "}
        <a className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
        ${path[1]=="addProject"? `${brandSecondaryText} underline`: brandLightText}`} href="#addProject">
          Add Project
        </a>{" "}              
        <a className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
        ${path[1]=="faucet"? `${brandSecondaryText} underline`: brandLightText}`} href="#faucet">
          Faucet
        </a>{" "}
      </div>
      <div className="md:block hidden">
      <ConnectButton /></div>    </nav>
      <nav className={`flex md:hidden justify-between items-start px-[30px] pt-[36px] fadeIn fixed w-full z-50 
        ${isOpen? "h-[100vh] bg-[#40959d7e] backdrop-blur-[3px]": "h-[9vh] bg-[#40959d00] backdrop-blur-[9px]"}`}>
      <a href="#">
        <img
          alt="Home"
          src={"https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/logo.svg"}
          className="h-[30px] w-[90px]"
        />
      </a>
      <div className="flex flex-col justify-start gap-6 items-end">
      <div onClick={()=>{
        console.log("clicked")
        setIsOpen(!isOpen)
      }} className="flex flex-col gap-[4.5px] hover:cursor-pointer">
        <div className={`w-[30px] py-[1.5px] rounded-3xl ${brandSecondaryBg} ${isOpen? "rotate-45 mb-[-15px]":""}`}></div>
        <div className={`w-[30px] py-[1.5px] rounded-3xl ${brandSecondaryBg} ${isOpen? "scale-0": " scale-100"}`}></div>
        <div className={`w-[30px] py-[1.5px] rounded-3xl ${brandSecondaryBg} ${isOpen? " -rotate-45":""}`}></div>
      </div>
      <div className={`flex md:flex-row flex-col justify-start items-end gap-[30px] text-[#eeeeee] mt-9 text-[16.5px] tracking-wider
        ${isOpen? " translate-x-0": " translate-x-52"}`}>
      <a href="#" className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
          ${path[1]==""? `${brandSecondaryText} underline`: "text-[#ffffff]"}`}>
          Home
        </a>
        <a href="#about" className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
          ${path[1]=="about"? `${brandSecondaryText} underline`: "text-[#ffffff]"}`}>
          About Us
        </a>
        <a className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
        ${path[1]=="profile"? `${brandSecondaryText} underline`: "text-[#ffffff]"}`} href="#profile">
          Your Profile
        </a>{" "}
        <a className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
        ${path[1]=="addProject"? `${brandSecondaryText} underline`: "text-[#ffffff]"}`} href="#addProject">
          Add Project
        </a>{" "}              
        <a className={`hover:text-[#40959D] hover:underline underline-offset-[3px]
        ${path[1]=="faucet"? `${brandSecondaryText} underline`: "text-[#ffffff]"}`} href="#faucet">
          Faucet
        </a>{" "}
      </div>
      </div> 
      </nav>
      </>
  );
}
