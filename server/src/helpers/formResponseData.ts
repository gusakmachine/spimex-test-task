export const formResponseData: FormResponseData = <Result>(error, result) => {
    return {
        error: error,
        result: result,
    };
}

export type ResponseData<Result> = {
    error: boolean,
    result: string | Result,
}
export type FormResponseData = <Result>(error: boolean, result: string) => ResponseData<Result>