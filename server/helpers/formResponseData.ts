/**
 * Стандартизация возвращаемых ответов от сервера.
 * */

export const formResponseData: FormResponseData = <Result>(error, result) => {
    return {
        error: error,
        result: result,
    };
}

export const formResponseError = (message: string): ResponseData<string> => {
    return formResponseData<string>(true, message);
}

export type ResponseData<Result> = { error: boolean, result: string | Result, };
export type FormResponseData = <Result>(error: boolean, result: string) => ResponseData<Result>;