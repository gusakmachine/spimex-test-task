import React from 'react';
import style from "./SpimexCompaniesCounter.module.css";
import {RegionInputFC} from "./types";

//Название поля и строки ошибок валидации
const NAME = 'region';
const LABEL_NAME = 'Region Number';
const LABEL_STATES = {
    default: `${LABEL_NAME}:`,
    required: `Is required field:`,
    onlyNumbers: `Only numbers:`,
    validate: `Only positive numbers:`,
    error: `Input error:`,
};

const rules = {
    required: true,
    //Регион всегда положительное число
    validate: (value: number) => value > 0,
};

const RegionInput: RegionInputFC = ({register, errors}) => {
    //Настройка пропсов компонента
    const inputProps = {
        id: 'region-0',
        type: 'number',
        className: `ant-input`,
        status: '',
        ...register(NAME, rules)
    };

    let label = LABEL_STATES.default;

    if (errors.region) {
        inputProps.status = 'error';

        switch (errors.region.type) {
            case "required":
                label = LABEL_STATES.required;
                break;
            case "validate":
                label = LABEL_STATES.validate;
                break;
        }
    }

    return (
        <div className={style.region}>
            <label htmlFor={inputProps.id}>{label}</label>
            <input {...inputProps} />
        </div>
    );
};

export default RegionInput;