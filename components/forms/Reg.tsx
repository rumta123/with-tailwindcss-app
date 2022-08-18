import React, { useContext, useState, useEffect } from "react";
import Button from "../ui/Button";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BtnReg from "../ui/BtnReg";
const Reg = function ({ children }: React.PropsWithChildren) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isTel, setIsTel] = useState(false)

    const [isTelValue, setIsTelValue] = useState('')
    const [Output, setOuput] = useState('')


    // отработка Бэкспэйс
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
            {isTel ? <div> <Formik
                initialValues={{ kod: '' }}

                validate={values => {
                    values.kod = isTelValue
                    const errors = {};
                    if (!values.kod) {
                        errors.kod = 'Обязательное поле';
                    }
                    if (values.kod.length < 4) {
                        errors.kod = 'минимальное количество цифр должно быть 4';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {

                    values.kod = isTelValue
                    setTimeout(() => {

                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="py-2">
                            <Field type="tel" name="kod" placeholder="Введите код" value={isTelValue} onChange={(e) => { setIsTelValue(e.target.value) }} className="input input-bordered w-full max-w-xs" />
                            <ErrorMessage className="text-red-600" name="kod" component="div" />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flexEnd' }}>

                            <Button disabled={isSubmitting} name="подтвердить" />


                        </div>

                    </Form>


                )}
            </Formik>
                <div className="flex items-center"> <p>Если вы ошиблись нажмите </p><BtnReg style={{ marginLeft: '-12px' }} onClick={() => setIsTel(x => !x)} name="назад" /></div>

            </div>
                :
                <Formik
                    initialValues={{ tel: '' }}
                    validate={values => {
                        values.tel = Output
                        const errors = {};
                        if (!values.tel) {
                            errors.tel = 'Обязательное поле';
                        }
                        if (values.tel.length < 17) {
                            errors.tel = 'Упс. Телефон не правильный!';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        values.tel = Output

                        setTimeout(() => {

                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                        setIsTel(x => !x)
                    }

                    }
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="py-2">
                                <Field type="tel" onInput={ShowInput} name="tel" onKeyDown={handleBackspace} value={Output} placeholder="Введите телефон" className="input input-bordered w-full max-w-xs" />
                                <ErrorMessage className="text-red-600" name="tel" component="div" />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flexEnd' }}>
                                <Button disabled={isSubmitting} name="вход" />
                            </div>

                        </Form>


                    )}
                </Formik>


            }
        </div>
    )
}



export default Reg;