import React, { useEffect, useState } from 'react';
import '../Form/Form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {

    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    const [street, setStreet] = useState();
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [tg.MainButton])

    useEffect(() => {
        if(!country && !city && !street){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city,street])
    
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    
    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className='form'>
            <h3>Введите ваши данные</h3>
            <input 
            type="text" 
            className='input' 
            placeholder='Страна'
            value={country}
            onChange={onChangeCountry}
            />
            

            <input 
            type="text" 
            className='input' 
            placeholder='Город'
            value={city}
            onChange={onChangeCity}
            />
            
            <input 
            type="text" 
            className='input' 
            placeholder='Улица'
            value={street}
            onChange={onChangeStreet}
            />

            <select onChange={onChangeSubject} value={subject} className='select'>
            <option value="physical">Физ. лицо</option>
            <option value="legal">Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;