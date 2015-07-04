declare module MathDecidr {
    export interface IEquation {
        (NumberMaker: NumberMakr.INumberMakr,
        constants: any,
        equations: IEquationContainer,
        ...args: any[]): any;
    }

    export interface IEquationContainer {
        [i: string]: IEquation;
    }

    export interface IMathDecidrSettings {
        NumberMaker: NumberMakr.INumberMakr;
        constants?: any;
        equations?: {
            [i: string]: IEquation;
        };
    }

    export interface IMathDecidr {

    }
}
