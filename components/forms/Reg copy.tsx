import { text } from "node:stream/consumers";
import React, { useContext, useState, useEffect } from "react";



const Reg = function () {

    let textInput = React.createRef()
    let textOut = React.createRef()
    const [title, setTitle] = useState('')
    const [Output, setOuput] = useState('hello')
    useEffect(() => {
        document.title = `Вы нажали ${title} раз`;
    });

    function ShowInput(event) {
        const formattedInputValue = ""
        // console.log(event.target.value)
        if (["7", "8", "9"].indexOf(textInput.current.value[0]) > -1) {
            if (textInput.current.value[0] == '9')
                textInput.current.value = '7' + textInput.current.value
            const firstSymbols = (textInput.current.value[0] == "8") ? "8" : "+7"
            formattedInputValue = input.value = firstSymbols + " "
            if (textInput.current.value.length > 1) {
                formattedInputValue += '(' + textInput.current.value.substring(1, 4)
            }
            if (textInput.current.value.length >= 5) {
                formattedInputValue += ') ' + textInput.current.value.substring(4, 7);
            }
            if (textInput.current.value.length >= 8) {
                formattedInputValue += '-' + textInput.current.value.substring(7, 9);
            }
            if (textInput.current.value.length >= 10) {
                formattedInputValue += '-' + textInput.current.value.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + textInput.current.value.substring(0, 16);
        }
    }


    // console.log(textInput.current.value)
    // if (textInput.current.value[0] == 7 || textInput.current.value[0] == 8) {
    //     textInput.current.value = '+7'

    // }
    // if (textInput.current.value[0] == 9) {
    //     textInput.current.value = '+7' + textInput.current.value[0]
    // }
    // if (textInput.current.length > 1) {
    //     textInput.current.value = textInput.current.value + '('
    // }
    // textOut.current.innerHTML = textInput.current.value

    setOuput(textInput.current.value)
}
return (

    <form>
        <h3> {title}</h3>
        <div className="py-2">
            <input type="tel" onInput={ShowInput} name="tel" ref={textInput} placeholder="Введите телефон" data-tel-input className="input input-bordered w-full max-w-xs" />

        </div>
        <p ref={textOut}></p>
        <h3>{Output}</h3>
        <div style={{ display: 'flex', justifyContent: 'flexEnd' }}>
            <button type="submit" className="btn btn-success" >
                регистрация
            </button>
            <button type="submit" className="btn btn-success ml-2" onClick={() => setTitle(title + 1)} >
                вход
            </button>

        </div>

    </form>


)
}



export default Reg;