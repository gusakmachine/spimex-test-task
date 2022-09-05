import React from 'react';
import styles from "./SpimexCompaniesCounter.module.css";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const Submit = () => {
    const {loading} = useSelector((state: RootState) => state.spimexCompaniesCount);

    return (
        <button
            type='submit'
            className={`${styles.calculate} ant-btn ant-btn-primary`}
            disabled={loading}
        >
            Calculate
        </button>
    );
};

export default Submit;