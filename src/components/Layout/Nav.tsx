import { ConnectButton } from "arweave-wallet-kit";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { brandDarkBorder, brandDarkText, brandLightText } from "../../utils/colors";
const event = ({ action, category, label, value }: any) => {
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

const Nav = () => {
    let location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    // let path = window.location.hash.split("#");
    let path = location.pathname.split("/");
    console.log(path[1])
    const validPaths = ["home", "team", "quests"];
    let pageTitle = validPaths.includes(path[1]?.toLowerCase()) ? path[1] : "Home"; 
    const toggleMenu = () => {
      setIsOpen(!isOpen);
      event({
        action: 'toggle_menu',
        category: 'Navigation',
        label: 'Menu Toggle',
        value: isOpen ? 'Close' : 'Open',
      });
    };
  return (
     <nav
        onClick={toggleMenu}
        className={`flex flex-row sm:items-center items-start justify-between md:h-[9vh] md:bg-[#111111]
        md:px-[39px] px-[15px] py-[9px] fixed w-full z-40 ${brandLightText} max-w-[1800px] backdrop-blur-[3px]
        ${
          isOpen ? "h-[100vh] bg-[#25291ca4] z-50 " : "h-[9vh]"
        }`}
      >
        <a href="#" className="hover:cursor-pointer" onClick={() => event({
          action: 'click_logo',
          category: 'Navigation',
          label: 'Logo Click',
        })}>
          <img
            alt="logo"
            src="https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/logo.svg"
            height={90}
            width={150}
            className={`md:w-[120px] md:h-[54px] w-[90px] h-[45px] md:block hidden`}
          />
          <img
            alt="logo"
            src={`https://ykxdc44ycigwbzizbvfquofna2yx2tkn3e6fx5zjltzbjfpbeqcq.arweave.net/wq4xc5gSDWDlGQ1LCjitBrF9TU3ZPFv3KVzyFJXhJAU/logo.svg`}
            height={90}
            width={150}
            className={`md:w-[120px] md:h-[54px] w-[90px] h-[45px] md:hidden block`}
          />
        </a>
        <div className="flex sm:flex-row flex-col sm:gap-4 gap-3 items-center justify-between sm:text-[18px] text-[15px] md:mt-0 mt-[9px]">
          <div
            className="sm:hidden flex flex-row items-center justify-between gap-3 bg-[#444444] z-50 sm:px-[36px] px-[21px] py-[3px] rounded-lg hover:cursor-pointer hover:tracking-widest"
            onClick={toggleMenu}
          >
            <img
              alt="arrleft"
              src="/icons/arrowLeft.svg"
              height={12}
              width={12}
              className="rl sm:w-[15px] sm:h-[15px] w-[12px] h-[12px]"
            />
            <h6 className=" capitalize">{pageTitle}</h6>
          </div>
          <a
            href={path[1] == "quests" ? "#" : "#quests"}
            className={`${brandDarkText} ${brandDarkBorder} border-[1px] 
            w-full text-center sm:px-[18px] py-[2px] px-[9px]  sm:bg-none bg-[#E3E5DE] backdrop-blur-[3px]
            rounded-lg transition-transform duration-500 ease-in-out ${
              isOpen
                ? "translate-x-0"
                : "sm:translate-x-[330px] translate-x-[150%] scale-50"
            }`}
            onClick={() => event({
              action: 'navigate_quests',
              category: 'Navigation',
              label: 'Quests Navigation',
              value: path[1] == "quests" ? '#' : '#quests',
            })}
          >
            {" "}
            <button className="hover:cursor-pointer hover:opacity-75 hover:scale-105">
              {path[1] == "quests" ? "Home" : "Quests"}
            </button>
          </a>
          <a
            href="https://docs.0rbit.co/"
            target="_blank"
            className={`${brandDarkText} ${brandDarkBorder} border-[1px] 
            w-full text-center sm:px-[18px] py-[2px] px-[9px]  sm:bg-none bg-[#E3E5DE] backdrop-blur-[3px]
            rounded-lg transition-transform duration-500 ease-in-out ${
              isOpen
                ? "translate-x-0"
                : "sm:translate-x-[240px] translate-x-[250%] scale-50"
            }`}
            onClick={() => event({
              action: 'navigate_docs',
              category: 'Navigation',
              label: 'Docs Navigation',
            })}
          >
            <button className="hover:cursor-pointer hover:opacity-75 hover:tracking-widest">
              Docs
            </button>
          </a>
          <a
            href={path[1] == "team" ? "#" : "#team"}
            className={`${brandDarkText} ${brandDarkBorder} border-[1px] 
            w-full text-center sm:px-[18px] py-[2px] px-[9px]  sm:bg-none bg-[#E3E5DE] backdrop-blur-[3px]
             rounded-lg transition-transform duration-500 ease-in-out ${
               isOpen
                 ? "translate-x-0"
                 : "sm:translate-x-[120px] translate-x-[350%] scale-50"
             }`}
            onClick={() => event({
              action: 'navigate_team',
              category: 'Navigation',
              label: 'Team Navigation',
              value: path[1] == "team" ? '#' : '#team',
            })}
          >
            <button className="hover:cursor-pointer hover:opacity-75 hover:tracking-widest">
              {path[1] == "team" ? "Home" : "Team"}
            </button>
          </a>
          <div
            className="hidden sm:flex flex-row items-center justify-between gap-3 bg-[#444444] z-50 px-[36px] py-[3px] rounded-lg hover:cursor-pointer hover:tracking-widest"
            onClick={toggleMenu}
          >
            <img
              alt="arrleft"
              src="/icons/arrowLeft.svg"
              height={12}
              width={12}
              className="rl"
            />
            <h6 className="capitalize">{pageTitle}</h6>
          </div>
        </div>
      </nav> 
    //   <h1>HI</h1>
  )
}

export default Nav