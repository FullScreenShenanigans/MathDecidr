/**
 * Useful constants a MathDecidr may use in equations.
 */
export interface IConstants {
    [i: string]: any;
}

/**
 * A calculation Function.
 * 
 * @param args   Any other arguments to pass to the equation.
 */
export interface IEquation {
    (this: IMathDecidr, ...args: any[]): any;
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
    constants?: IConstants;

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
     * Useful constants the IMathDecidr may use in equations.
     */
    readonly constants: IConstants;

    /**
     * Stored equations bound to the IMathDecidr.
     */
    readonly equations: IEquations;

    /**
     * @param name   The name of a constant to return.
     * @returns The requested constant.
     */
    getConstant(name: string): any;

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
     * @param constant   A value for the constant.
     */
    addConstant(name: string, constant: any): void;

    /**
     * Adds an equation Function under the given name.
     * 
     * @param name   The name of the equation to add.
     * @param equation   A value for the equation.
     */
    addEquation(name: string, equation: IEquation): void;

    /**
     * Runs a stored equation with any number of arguments, returning the result.
     * 
     * @param name   The name of the equation to run.
     * @param args   Any arguments to pass to the equation.
     */
    compute(name: string, ...args: any[]): any;
}
