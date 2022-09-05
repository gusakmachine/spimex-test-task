import React from 'react';
import style from "../SpimexCompaniesCounter/SpimexCompaniesCounter.module.css";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const MSG_LOADING = 'Loading..';

const CountIndicator = () => {
    const {loading, error, count} = useSelector((state: RootState) => state.spimexCompaniesCount);
    let message: number | string = count;

    if (loading) {
        message = MSG_LOADING;
    }

    if (error) {
        message = error;
    }

    return (
        <div className={style.indicator}>
            <span>Companies count:</span>
            <h1>{message}</h1>
        </div>
    );
};

export default CountIndicator;