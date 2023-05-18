import React, { useState } from "react";
import companyLogo from "../../assets/images/logo.png";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/RouterConfig";
import Button from "../Button/Button";
import { Dropdown } from "antd";
import {AiOutlineUser} from 'react-icons/ai'

const navOptions = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  }];

  


const NavbarPatient = ({ multimenu = true, auth = false }) => {
  const navigate = useNavigate();

  const items = [
    {
      key: '1',
      label: (
        <Button onClick={()=>navigate(ROUTES.UserSettings)}  className={'w-full flex justify-start'} label={<div className="flex justify-start items-center gap-2"><AiOutlineUser/> Profile</div>} type="outlined"/>
      ),
    },
    {   
      key: '2',
      label: (
        <Button  onClick={()=>navigate(ROUTES.UpcomingAppointment)} className={'w-full flex justify-start bg-transparent text-neutral-10'} label={'Services'}/>
      ),
    },
    {
      key: '3',
      label: (
        <Button  onClick={()=>navigate(ROUTES.UpcomingAppointment)} className={'w-full bg-transparent text-neutral-10'} label={'My Appointments'}/>
      ),
    },
    {
      key: '4',
      label: (
        <Button  onClick={()=>navigate(ROUTES.UpcomingAppointment)} className={'w-full bg-transparent text-neutral-10'} label={'History'}/>
      ),
    },
  ];


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
                <Dropdown
                 menu={{
                    items,
                  }}
                >
                <div className="w-[40px] aspect-square rounded-full border border-1 border-primary-6 cursor-pointer">

                </div>
                </Dropdown>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default NavbarPatient;
