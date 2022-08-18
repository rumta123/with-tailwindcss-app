import React, { useState,     useEffect } from 'react';
import Select from 'react-select';
import styles from '../../styles/Home.module.css';
import Button from '../ui/Button';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru)
const AddTrip = () => {


    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 0), 9)
    );
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };
    const options = [
        { value: 'buy', label: 'Буй' },
        { value: 'chb', label: 'Чистые Боры' },
        { value: 'susanino', label: 'Сусанино' },
        { value: 'kostroma', label: 'Кострома' },
        { value: 'yaroslavl', label: 'Ярославль' },
    ];
    const options1 = [
        { value: 'buy', label: 'Буй' },
        { value: 'chb', label: 'Чистые Боры' },
        { value: 'susanino', label: 'Сусанино' },
        { value: 'kostroma', label: 'Кострома' },
        { value: 'yaroslavl', label: 'Ярославль' },
    ];
    const [kuda1, setKuda1] = useState('');
    const [kuda2, setKuda2] = useState('');
    const [freePlace, setFreePlace] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',

        }),
        control: () => ({
            display: 'flex',
            backgroundColor: '#fff',
            width: '100%',
            // none of react-select's styles are passed to <Control />

        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }
    useEffect(() => {
        if (selectedOption && selectedOption2) {
          setKuda1(selectedOption.label )+ ' -> ' + setKuda2(selectedOption2.label )
        }
        else {
          setKuda1('')
          setKuda2('')
        }
      }, [selectedOption, selectedOption2]);

    return (

        <div className="w-full max-w-xs">
            <form className="w-full max-w-xs">
                <div className=" w-full max-w-xs">

                    <div className='flex'>
                        <p>свободных мест</p>
                        <input type="text" placeholder=' свободных мест' value={freePlace} onChange={(e) => { setFreePlace(e.target.value) }} />
                    </div>

                    <p>Откуда</p>
                    <Select

                        styles={customStyles}
                        placeholder="откуда"
                        onChange={setSelectedOption}
                        options={options}
                        instanceId={1}
                    />
                </div>
                <div className="w-full max-w-xs">
                    <p>Куда</p>
                    <Select
                        styles={customStyles}
                        placeholder="куда"
                        onChange={setSelectedOption2}
                        options={options1}
                        instanceId={2}
                    />
                </div>
                <div className=" flex w-full max-w-xs" style={{ marginTop: '10px' }}>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        minDate={new Date()}
                        filterTime={filterPassedTime}
                        dateFormat="d MMMM , yyyy h:mm "
                        locale="ru"
                        className={styles.description1}

                    />

                    <p>Количество свободных мест {freePlace}</p>
                    <p>{kuda1}</p>
                    <p>{kuda2}</p>
                </div>

            </form>
            <Button style={{ marginTop: '10px' }} name="Создать поездку" />


        </div>
    )
}
export default AddTrip;