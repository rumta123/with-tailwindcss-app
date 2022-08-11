import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Reg from "./forms/Reg";
import Enter from "./forms/Enter";
import Link from "next/link";
import DarkMode from '../components/DarkMode/DarkMode';
import Button from "./ui/Button";

const Navbar = () => {
  const [isReg, setIsReg] = useState(false)

  return (
    <div className="navbar bg-base-200">
      <div className="navbar bg-base-200" style={{ maxWidth: '1360px', margin: '0 auto' }}>
        <div className="navbar-start" > <DarkMode />
          <span>        Free-Student</span>




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

        <div className="navbar-end">

          <span>
            <label htmlFor="my-modal-3" onClick={() => { setIsReg(false) }} className="btn modal-button flex flex-row justify-center items-center gap-0 btn btn-ghost">Вход</label>
          </span>
          <span>
            <label htmlFor="my-modal-3" onClick={() => { setIsReg(true) }} className="btn modal-button flex flex-row justify-center items-center gap-0 btn btn-ghost">Регистрация</label>
          </span>
        </div>
      </div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          {
            isReg ? <h3 className="text-lg font-bold">Форма регистрации !</h3> : <h3 className="text-lg font-bold">Форма  авторизации!</h3>
          }
          {
            isReg ? <Reg> <button onClick={() => setIsReg(x => !x)}> Авторизация </button> </Reg> :
              <Enter><button onClick={() => setIsReg(x => !x)}>Регистрация</button></Enter>
          }

        </div>

      </div>

    </div>

  );
};

export default Navbar;
