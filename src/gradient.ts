/**
 * @author Navicstein Rotciv
 * @description Adds instagram background color animation to your `div's`
 * @param selector, opts
 * @returns void
 */

interface defaults {
    interval?: number
    gradientSpeed?: number
    colors?: number[][] | undefined // crazy me 
}

var errors: Array<string> = new Array(),
    hasError: boolean = false,
    _default: defaults = {
        interval: 20,
        gradientSpeed: 0.01,
        colors: new Array(
            [230, 25, 75],
            [0, 130, 200],
            [255, 225, 25],
            [245, 130, 48],
            [70, 240, 240],
            [0, 128, 128],
            [0, 128, 128]
        )
    }

class gradient {
    selector: any
    opts: defaults
    constructor(selector: any, opts?: defaults) {
        this.selector = selector;
        this.opts = opts || _default;
    }

    private report(attrib: string, stmt: string) {
        errors.push(`[?] '${attrib}' ${stmt}`);
        hasError = true
    }

    private check() {
        if (this.selector === null) {
            this.report('selector', "can't select the document model.")
        }
        if (typeof this.selector !== "object") {
            this.report('selector', "must be an element")
        }
        if (typeof this.opts.interval !== "number") {
            this.report('interval', 'must be a number')
        }
        if (typeof this.opts.gradientSpeed !== "number") {
            this.report("gradientSpeed", "must be a number")
        }
        if (typeof this.opts.colors !== "object") {
            this.report("colors", "must be an Array of 'rgb' colors.\n")
        }
        if (typeof hasError === "boolean" && hasError) {
            console.warn("ERROR: =>\n -----\n" + errors.splice(null).join('\n') + " please contact support ")
            throw `:( Giving up after Fatal Errors, not trying again!`
        }


    }
    animate() {
        this.check()
        var selector: any = this.selector;
        var colors: number[][] | any = this.opts.colors
        let step: number | any = 0,
            colorIndices = [0, 1, 2, 3],
            gradientSpeed = this.opts.gradientSpeed
            ;

        function updateGradient(): void {
            var c0_0 = colors[colorIndices[0]];
            var c0_1 = colors[colorIndices[1]];
            var c1_0 = colors[colorIndices[2]];
            var c1_1 = colors[colorIndices[3]];

            var istep = 1 - step;
            var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
            var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
            var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
            var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

            var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
            var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
            var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
            var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

            selector.style = "background: -moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%); background:-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
            step += gradientSpeed;
            if (step >= 1) {
                step %= 1;
                colorIndices[0] = colorIndices[1];
                colorIndices[2] = colorIndices[3];

                colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
                colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

            }
        }
        // then run the loop
        setInterval(updateGradient, this.opts.interval);

    }
}


