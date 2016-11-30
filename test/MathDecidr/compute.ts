import { mochaLoader } from "../main";
import { mockConstants, mockMathDecidr } from "../utils/fakes";

mochaLoader.it("computes an equation with a parameter", (): void => {
    // Arrange
    const MathDecider = mockMathDecidr();
    const mass: number = 7;

    // Act
    const fallingForce: number = MathDecider.compute("fallingForce", mass);

    // Assert
    chai.expect(fallingForce).to.be.equal(7 * mockConstants.gravity);
});
