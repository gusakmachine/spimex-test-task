import React from 'react';
import styles from "./ActiveCompaniesCounter.module.css";
import {RegionInputFC} from "./types";

const RegionInput: RegionInputFC = ({register, errors}) => {
    const rules = {
        required: true,
        validate: (value: number) => value > 0,
    };
    const inputProps = {
        id: 'region-0',
        type: 'number',
        className: `${styles.region} ant-input`,
        ...register(NAME, rules)
    };

    let label = LABEL_STATES.default;

    if (errors.region) {
        switch (errors.region.type) {
            case "required":
                label = LABEL_STATES.required;
                break;
            case "validate":
                label = LABEL_STATES.validate;
                break;
            case "default":
                label = LABEL_STATES.error;
        }
    }

    return (
        <div className={styles.region}>
            <label htmlFor={inputProps.id}>{label}</label>
            <input {...inputProps} />
        </div>
    );
};

export default RegionInput;
export const NAME = 'region';
export const LABEL_NAME = 'Region Number';
export const LABEL_STATES = {
    default: `${LABEL_NAME}:`,
    required: `Is required field:`,
    onlyNumbers: `Only numbers:`,
    validate: `Only positive numbers:`,
    error: `Input error:`,
}