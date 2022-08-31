import React, {useState} from 'react';
import styles from './ActiveCompaniesCounter.module.css';
import CountIndicator, {STATES} from "../CountIndicator/CountIndicator";
import {countNumberOfValidRecords} from "../../api/ActiveCompanies";
import {SubmitHandler, useForm} from "react-hook-form";
import RegionInput from "./RegionInput";
import {Inputs} from "./types";
import Submit from "./Submit";

const ActiveCompaniesCounter = () => {
    const {register, handleSubmit, formState} = useForm<Inputs>();
    const {errors} = formState;
    const [indicatorState, setIndicatorState] = useState(STATES.default);
    const [count, setCount] = useState<undefined | number>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setIndicatorState(STATES.loading);

        countNumberOfValidRecords(data.region).then((count) => {
            if (count === undefined)
                setIndicatorState(STATES.error);
            else
                setIndicatorState(STATES.done);

            setCount(count);
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.calculate}>
                <CountIndicator state={indicatorState} count={count}/>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <RegionInput register={register} errors={errors}/>
                <Submit/>
            </form>
        </div>
    );
};

export default ActiveCompaniesCounter;