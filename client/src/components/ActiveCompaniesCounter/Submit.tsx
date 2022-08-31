import React from 'react';
import styles from "./ActiveCompaniesCounter.module.css";

const Submit = () => {
    return (
        <button
            className={`${styles.calculate} ant-btn ant-btn-primary`}
            type='submit'
        >
            Calculate
        </button>
    );
};

export default Submit;