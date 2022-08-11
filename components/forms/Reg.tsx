import React, { useContext, useState, useEffect } from "react";
import Button from "../ui/Button";
import { Formik, Form, Field, ErrorMessage } from 'formik';
const Reg = function ({ children }: React.PropsWithChildren) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    // отработка Бэкспайс
    const getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }

    function handleBackspace(e) {

        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && getInputNumbersValue(e.target).length == 1) {
            e.target.value = "";
        }
    }


    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }


    let textOut = React.createRef()
    const [title, setTitle] = useState('')
    const [Output, setOuput] = useState('')

    function ShowInput(e) {

        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            input.value = "";
            setOuput(input.value)
            return
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
                setOuput(input.value);
            }
            return
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }



        setOuput(formattedInputValue)
    }

    return (
        <div>
        <Formik
            initialValues={{ tel: '' }}
            validate={values => {
                const errors = {};
                if (!values.tel) {
                    errors.tel = 'Обязательное поле';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                values.tel = Output

                setTimeout(() => {

                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="py-2">
                        <Field type="tel" onInput={ShowInput} name="tel" onKeyDown={handleBackspace} value={Output} placeholder="Введите телефон" className="input input-bordered w-full max-w-xs" />
                        <ErrorMessage className="text-red-600" name="email" component="div" />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flexEnd' }}>

                        {/* <Button disabled={isSubmitting} name="вход" />
                        <Button  name="регистрация" /> */}

                    </div>

                </Form>
                 

            )}
        </Formik>
       
        </div> 
    )
}



export default Reg;