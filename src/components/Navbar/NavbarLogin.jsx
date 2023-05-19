import React, { useState } from "react";
import companyLogo from "../../assets/images/logo.png";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/RouterConfig";
import Button from "../Button/Button";

const navOptions = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  }];


const NavbarLogin = ({ multimenu = true, auth = false }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(auth);
  const [selected, setSelected] = useState('Home');
  const [visible, setVisible] = useState(false);

  return (
    <div className="">
      <div className="bg-neutral-3 shadow-md ">
        <div className="flex justify-between items-center px-[2.5rem] py-[5px]">
          <div className="h-[80px]">
            <img
              src={companyLogo}
              alt="cherry company logo"
              className="h-[100%] w-[100%]"
            />
          </div>

          <div className="relative">
            <ul className="flex gap-[30px]">
                {
                  navOptions.map((i, key) => (
                    <li className="inline-block">
                      <a href="javascript:void(0)"
                      onClick={() => {setSelected(i.name)
                      navigate(i.link)
                      }}
                       className={(i.name === selected ? "text-primary-6" : "text-neutral-13") + " text-Medium+/Title/xxSmall"}>
                        {i.name}
                      </a>
                    </li>
                  ))
                }
            </ul>
            

          </div>

          {isAuth ? (
            <div className="flex gap-8">
              {/* <img src={location} alt="location icon" />
              <img src={wallet} alt="wallet icon" />
              <img src={cart} alt="user cart" />
              <img src={user} alt="user profile" />
              <img src={menu} alt="menu icon" /> */}
            </div>
          ) : (
            <div className="btn__div flex gap-[10px]">
            
              <Button
                type="outlined"
                className="w-[150px]"
                onClick={() => {
                  navigate(ROUTES.Register);
                }}
                label={"Register"}
              />
               
               <Button
                type="linear"
                className="w-[150px]"
                onClick={() => {
                  navigate(ROUTES.Login);
                }}
                label={"Login"}
              />
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default NavbarLogin;
