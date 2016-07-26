/**
 * Useful constants a MathDecidr may use in equations.
 */
export interface IConstants {
    [i: string]: any;
}

/**
 * A calculation Function.
 * 
 * @param constants   Useful constants from a MathDecidr.
 * @param equations   Other calculation Functions stored in the MathDecidr.
 * @param args   Any other arguments to pass to the equation.
 */
export interface IEquation {
    (constants: IConstants, equations: IEquations, ...args: any[]): any;
}

/**
 * A collection of equations, keyed by name.
 */
export interface IEquations {
    [i: string]: IEquation;
}

/**
 * Settings to initialize a new IMathDecidr.
 */
export interface IMathDecidrSettings {
    /**
     * Constants the MathDecidr may use in equations.
     */
    constants?: any;

    /**
     * Calculation Functions, keyed by name
     */
    equations?: IEquations;
}

/**
 * A computation utility to automate running common equations with access
 * to a set of constant values.
 */
export interface IMathDecidr {
    /**
     * @returns Useful constants the MathDecidr may use in equations.
     */
    getConstants(): any;

    /**
     * @param name   The name of a constant to return.
     * @returns The requested constant.
     */
    getConstant(name: string): any;

    /**
     * @returns Stored equations with the internal members bound as 
     *          their arguments.
     */
    getEquations(): IEquations;

    /**
     * @returns The raw stored equations, unbound.
     */
    getRawEquations(): IEquations;

    /**
     * @param name   The name of the equation to return.
     * @returns The equation under the given name.
     */
    getEquation(name: string): IEquation;

    /**
     * @param name   The name of the equation to return.
     * @returns The raw equation under the given name.
     */
    getRawEquation(name: string): IEquation;

    /**
     * Adds a constant of the given name and value.
     * 
     * @param name   The name of the constant to add.
     * @param value   A value for the constant.
     */
    addConstant(name: string, value: any): void;

    /**
     * Adds an equation Function under the given name.
     * 
     * @param name   The name of the equation to add.
     * @param value   A value for the equation.
     */
    addEquation(name: string, value: IEquation): void;

    /**
     * Runs a stored equation with any number of arguments, returning the result.
     * 
     * @param name   The name of the equation to run.
     * @param args   Any arguments to pass to the equation.
     */
    compute(name: string, ...args: any[]): any;
}
