import React, { Children, useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Reg from "./forms/Reg";
import Enter from "./forms/Enter";
import Link from "next/link";
import DarkMode from '../components/DarkMode/DarkMode';
import BtnReg from '../components/ui/BtnReg'
import Kolokol from "./ui/kolokol";
import Profile from "./ui/Profile";

const Navbar = () => {
   // состояние отвечает за регистрацию и вход модал
  const [isReg, setIsReg] = useState(false)
  // состояние отвечает за вход пользователя
  const [isLogin, setIsLogin] = useState(false)
  return (

    <div className="navbar bg-base-200">
      <div className="navbar bg-base-200" style={{ maxWidth: '1360px', margin: '0 auto' }}>
        <div className="navbar-start" > <DarkMode />
          {isLogin ? <span> Free-Student</span> : <span> хрень</span>}
        </div>

        <div className="navbar-end">
          <div className="flex">

            <button tabIndex={1}
              className="flex flex-row justify-center items-center gap-2 btn btn-ghost">   <Link href="/">
                <a>Создать задание</a>
              </Link>
            </button>

            <span className="flex flex-row justify-center items-center gap-2 ">или</span>

            <button tabIndex={1}
              className="flex   btn btn-ghost">  <Link href="/">
                <a>Найти задание</a>
              </Link>
            </button>


          </div>


        </div>
        {isLogin ?
          <div className="navbar-end flex">
            <Kolokol />
            <div className="form-control">
              <input type="text" placeholder="поиск заданий" className="input input-bordered" />
            </div>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />11</svg>
                <span className="badge badge-xs badge-primary indicator-item">1</span>
              </div>
            </button>

            {/* профиль */}
            <Profile />
          </div>
          :
          <div className="navbar-end">

            <span>
              <label htmlFor="my-modal-3" onClick={() => { setIsReg(false) }} className="btn modal-button flex flex-row justify-center items-center gap-0 btn btn-ghost">Вход</label>
            </span>
            <span>
              <label htmlFor="my-modal-3" onClick={() => { setIsReg(true) }} className="btn modal-button flex flex-row justify-center items-center gap-0 btn btn-ghost">Регистрация</label>
            </span>
          </div>
        }
      </div >

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          {isReg ? <h3 className="text-lg font-bold">Форма регистрации !</h3> : <h3 className="text-lg font-bold">Форма  авторизации!</h3>
          }

          {isReg ? <Reg setIsReg={setIsReg} /> :
            <Enter />}
          {isReg ? <BtnReg onClick={() => setIsReg(x => !x)} name="Авторизация" /> : <BtnReg onClick={() => setIsReg(x => !x)} name="Регистрация" />}
        </div>

      </div>

    </div >

  );
};

export default Navbar;
