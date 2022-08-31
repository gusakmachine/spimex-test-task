import React from 'react';
import {CountIndicatorFC} from "./types";
import style from "./CountIndicator.module.css";

const CountIndicator: CountIndicatorFC = ({state, count}) => {
    let message: number | string = STATES.default;

    switch (state) {
        case STATES.loading:
            message = STATES.loading;
            break;
        case STATES.error:
            message = ERROR.server;
            break;
        case STATES.done:
            if (count === undefined)
                message = ERROR.count;
            else
                message = count;
    }

    return (
        <div className={style.container}>
            <span>Companies count:</span>
            <h1>{message}</h1>
        </div>
    );
};

export default CountIndicator;
export const STATES = {
    loading: 'Loading...',
    error: 'Error',
    done: 'Done',
    default: '0',
};
export const ERROR = {
    server: 'Server Error',
    count: 'Count Error',
}