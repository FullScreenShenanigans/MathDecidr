var constants = {
        "gravity": 9.81
    },
    equations = {
        "fallingForce": function (constants, equations, mass) {
            return mass * constants.gravity;
        }
    },
    MathDecider;

describe("constructor", function () {
    it("runs without error", function () {
        MathDecider = new MathDecidr.MathDecidr({
            "constants": constants,
            "equations": equations
        });
    });

    it("stores constants", function () {
        chai.expect(MathDecider.getConstants()).to.be.equal(constants);
    });

    it("stores raw equations", function () {
        chai.expect(MathDecider.getRawEquations()).to.be.equal(equations);
    });
});

describe("computing", function () {
    it("computes", function () {
        chai.expect(MathDecider.compute("fallingForce", 7)).to.be.equal(7 * constants.gravity);
    });
});
