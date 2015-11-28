declare module MathDecidr {
    export interface IEquation {
        (constants: any, equations: IEquationContainer, ...args: any[]): any;
    }

    export interface IEquationContainer {
        [i: string]: IEquation;
    }

    export interface IMathDecidrSettings {
        constants?: any;
        equations?: {
            [i: string]: IEquation;
        };
    }

    export interface IMathDecidr {
        getConstants(): any;
        getConstant(name: string): any;
        getEquations(): IEquationContainer;
        getRawEquations(): IEquationContainer;
        getEquation(name: string): IEquation;
        getRawEquation(name: string): IEquation;
        addConstant(name: string, value: any): void;
        addEquation(name: string, value: IEquation): void;
        compute(name: string, ...args: any[]): any;
    }
}
