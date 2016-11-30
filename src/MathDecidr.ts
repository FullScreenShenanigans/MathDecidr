import {
    IConstants, IEquation, IEquations, IMathDecidr, IMathDecidrSettings
} from "./IMathDecidr";

/**
 * A computation utility to automate running common equations with access
 * to a set of constant values.
 */
export class MathDecidr implements IMathDecidr {
    /**
     * Useful constants the MathDecidr may use in equations.
     */
    public readonly constants: IConstants;

    /**
     * Stored equations bound to the MathDecidr.
     */
    public readonly equations: IEquations;

    /**
     * The raw equations, unbound.
     */
    private rawEquations: IEquations;

    /**
     * Initializes a new instance of the MathDecidr class.
     * 
     * @param [settings]   Settings to be used for initialization.
     */
    constructor(settings: IMathDecidrSettings = {}) {
        this.constants = settings.constants || {};
        this.equations = {};
        this.rawEquations = settings.equations || {};

        if (this.rawEquations) {
            for (const i in this.rawEquations) {
                if (this.rawEquations.hasOwnProperty(i)) {
                    this.addEquation(i, this.rawEquations[i]);
                }
            }
        }
    }

    /**
     * @param name   The name of a constant to return.
     * @returns The requested constant.
     */
    public getConstant(name: string): any {
        return this.constants[name];
    }

    /**
     * @returns The raw stored equations, unbound.
     */
    public getRawEquations(): IEquations {
        return this.rawEquations;
    }

    /**
     * @param name   The name of the equation to return.
     * @returns The equation under the given name.
     */
    public getEquation(name: string): IEquation {
        return this.equations[name];
    }

    /**
     * @param name   The name of the equation to return.
     * @returns The raw equation under the given name.
     */
    public getRawEquation(name: string): IEquation {
        return this.rawEquations[name];
    }

    /**
     * Adds a constant of the given name and value.
     * 
     * @param name   The name of the constant to add.
     * @param constant   A value for the constant.
     */
    public addConstant(name: string, constant: any): void {
        this.constants[name] = constant;
    }

    /**
     * Adds an equation Function under the given name.
     * 
     * @param name   The name of the equation to add.
     * @param equation   A value for the equation.
     */
    public addEquation(name: string, equation: IEquation): void {
        this.rawEquations[name] = equation;
        this.equations[name] = equation.bind(this);
    }

    /**
     * Runs a stored equation with any number of arguments, returning the result.
     * 
     * @param name   The name of the equation to run.
     * @param args   Any arguments to pass to the equation.
     * @returns The result of the equation.
     */
    public compute(name: string, ...args: any[]): any {
        return this.equations[name].apply(this, args);
    }
}
