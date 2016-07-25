/// <reference path="../../lib/MathDecidr.d.ts" />

interface IMockConstants extends MathDecidr.IConstants {
    gravity: number;
}

interface IMockEquations extends MathDecidr.IEquations {
    fallingForce: MathDecidr.IEquation;
}

interface IMocks {
    mockConstants: IMockConstants;

    mockEquations: IMockEquations;

    mockMathDecidr: (settings?: MathDecidr.IMathDecidrSettings) => MathDecidr.IMathDecidr;
}

const mocks: IMocks = {
    mockConstants: {
        gravity: 9.81
    },

    mockEquations: {
        fallingForce: (constants: IMockConstants, equations: MathDecidr.IEquations, mass: number): number => {
            return mass * constants.gravity;
        }
    },

    /**
     * @param settings   Settings for the MathDecidr.
     * @returns A new MathDecidr instance.
     */
    mockMathDecidr: (settings?: MathDecidr.IMathDecidrSettings): MathDecidr.IMathDecidr => {
        return new MathDecidr.MathDecidr(settings || {
            constants: mocks.mockConstants,
            equations: mocks.mockEquations
        });
    }
};
