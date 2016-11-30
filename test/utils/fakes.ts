import { IConstants, IEquation, IEquations, IMathDecidr, IMathDecidrSettings } from "../../src/IMathDecidr";
import { MathDecidr } from "../../src/MathDecidr";

export interface IMockConstants extends IConstants {
    gravity: number;
}

export interface IMockEquations extends IEquations {
    fallingForce: IEquation;
}

export interface IMockMathDecidr extends IMathDecidr {
    readonly constants: IMockConstants;
    readonly equations: IMockEquations;
}

export const mockConstants: IMockConstants = {
    gravity: 9.81
};

export const mockEquations: IMockEquations = {
    fallingForce: function (this: IMockMathDecidr, mass: number): number {
        return mass * this.constants.gravity;
    }
};

/**
 * @param settings   Settings for the 
 * @returns A new MathDecidr instance.
 */
export function mockMathDecidr(settings?: IMathDecidrSettings): IMockMathDecidr {
    return new MathDecidr(settings || {
        constants: mockConstants,
        equations: mockEquations
    }) as any as IMockMathDecidr;
}
