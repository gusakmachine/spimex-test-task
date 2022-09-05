import {FieldErrorsImpl, UseFormRegister} from "react-hook-form";

export type Inputs = {region: number};

export type RegionInputProps = {
    register: UseFormRegister<Inputs>,
    errors: FieldErrorsImpl<{region: number}>
};
export type RegionInputFC = (props: RegionInputProps) => JSX.Element;