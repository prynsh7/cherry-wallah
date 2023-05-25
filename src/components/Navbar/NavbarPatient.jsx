import React, { useState } from "react";
import companyLogo from "../../assets/images/logo.png";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/RouterConfig";
import Button from "../Button/Button";
import { Dropdown } from "antd";
import { AiOutlineUser } from 'react-icons/ai'

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




const NavbarPatient = ({ user, isAuth = false}) => {
  const navigate = useNavigate();

  const items = [
    {
      key: '1',
      label: (
        <Button onClick={() => navigate(ROUTES.User.UserSettings)} className={'w-full flex justify-start'} label={<div className="flex justify-start items-center gap-2"><AiOutlineUser /> Profile</div>} type="outlined" />
      ),
    },
    {
      key: '2',
      label: (
        <Button onClick={() => navigate(ROUTES.User.UpcomingAppointment)} className={'w-full flex justify-start bg-transparent text-neutral-10'} label={'Services'} />
      ),
    },
    {
      key: '3',
      label: (
        <Button onClick={() => navigate(ROUTES.User.UpcomingAppointment)} className={'w-full bg-transparent text-neutral-10'} label={'My Appointments'} />
      ),
    },
    {
      key: '4',
      label: (
        <Button onClick={() => navigate(ROUTES.UpcomingAppointment)} className={'w-full bg-transparent text-neutral-10'} label={'History'} />
      ),
    },
    {
      key: '4',
      label: (
        <Button onClick={() => {
          localStorage.removeItem('user')
          localStorage.removeItem('token')
          navigate(ROUTES.Login)
        }} className={'w-full  text-[red]'} label={<p className="text-red">Log Out</p>} />
      ),
    },
  ];



  // const [isAuth, setIsAuth] = useState(auth);
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
                      onClick={() => {
                        setSelected(i.name)
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

          {!isAuth ? (
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
          ) : (
            <div className="btn__div flex gap-[10px] cursor-pointer">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <div className="flex flex-row gap-[20px] items-center">
                  <div className="w-[40px] aspect-square rounded-full border border-1 border-primary-6 cursor-pointer">
                  </div>
                  <p className="text-[#000]/[0.5] capitalize">{user?.name}</p>
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
