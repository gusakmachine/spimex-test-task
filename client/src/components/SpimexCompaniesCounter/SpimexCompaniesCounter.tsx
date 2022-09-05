import React from 'react';
import style from './SpimexCompaniesCounter.module.css';
import {SubmitHandler, useForm} from "react-hook-form";
import {Inputs} from "./types";
import {useAppDispatch} from "../../store/store";
import {fetchCount} from "../../store/slices/SpimexCompaniesCountSlice";
import CountIndicator from "../CountIndicator/CountIndicator";
import RegionInput from "./RegionInput";
import Submit from "./Submit";

const SpimexCompaniesCounter = () => {
    const dispatch = useAppDispatch();
    const {register, handleSubmit, formState} = useForm<Inputs>();
    const {errors} = formState;

    const onSubmit: SubmitHandler<Inputs> = ({region}) => {
        dispatch(fetchCount(region));
    };

    return (
        <div className={style.container}>
            <div className={style.calculate}>
                <CountIndicator/>
            </div>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <RegionInput register={register} errors={errors}/>
                <Submit/>
            </form>
        </div>
    );
};

export default SpimexCompaniesCounter;