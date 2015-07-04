// @echo '/// <reference path="NumberMakr-0.2.2.ts" />'

// @ifdef INCLUDE_DEFINITIONS
/// <reference path="References/NumberMakr-0.2.2.ts" />
/// <reference path="MathDecidr.d.ts" />
// @endif

// @include ../Source/MathDecidr.d.ts

module MathDecidr {
    "use strict";

    export class MathDecidr implements IMathDecidr {
        private NumberMaker;

        private constants;

        private equations;

        private rawEquations;

        /**
         * 
         */
        constructor(settings: IMathDecidrSettings) {
            var i: string;

            this.NumberMaker = settings.NumberMaker || new NumberMakr.NumberMakr();

            this.constants = settings.constants || {};
            this.equations = {};
            this.rawEquations = settings.equations || {};

            if (this.rawEquations) {
                for (i in this.rawEquations) {
                    this.addEquation(i, this.rawEquations[i]);
                }
            }
        }


        /* Simple gets
        */

        /**
         * 
         */
        getConstants() {
            return this.constants;
        }

        /**
         * 
         */
        getConstant(name: string) {
            return this.constants[name];
        }

        /**
         * 
         */
        getRawEquations() {
            return this.rawEquations;
        }

        /**
         * 
         */
        getEquations() {
            return this.equations;
        }

        /**
         * 
         */
        getEquation(name) {
            return this.equations[name];
        }


        /* Simple additions
        */

        /**
         * 
         */
        addConstant = function (name, value) {
            this.constants[name] = value;
        }

        /**
         * 
         */
        addEquation = function (name, value) {
            this.equations[name] = value.bind(this, this.NumberMaker, this.constants, this.equations);
        }


        /* Computations
        */

        /**
         * 
         */
        compute(name) {
            return this.equations[name].apply(this, Array.prototype.slice.call(arguments, 1));
        }

        /**
         * 
         */
        ensureArgumentsDefined(names, settings) {
            var i: number;

            for (i = 0; i < names.length; i += 1) {
                if (typeof settings.arguments[i] === "undefined") {
                    throw new Error(i + "is undefined in equation arguments.");
                }
            }
        }

        /**
         * 
         */
        ensureArgumentsPropreties(names, settings) {
            var i: number;

            for (i = 0; i < names.length; i += 1) {
                if (!settings.hasOwnProperty(i)) {
                    throw new Error(i + "is not an arguments property in equation.");
                }
            }
        }
    }
}
