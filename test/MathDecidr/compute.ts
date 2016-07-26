/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/MathDecidr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("computes an equation with a parameter", (): void => {
    // Arrange
    const MathDecider = mocks.mockMathDecidr();
    const mass: number = 7;

    // Act
    const fallingForce: number = MathDecider.compute("fallingForce", mass);

    // Assert
    chai.expect(fallingForce).to.be.equal(7 * mocks.mockConstants.gravity);
});
