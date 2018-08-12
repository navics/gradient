/**
 * @author Navicstein Rotciv
 * @description Adds instagram background color animation to your `div's`
 * @param selector, opts
 * @returns void
 */
class gradient {
    constructor(selector, opts) {
        var defaults = Object.assign({
            interval: 20,
            colors: new Array(
                [209, 220, 222],
                [0, 0, 0, 0],
                [60, 180, 75],
                [0, 128, 128],
                [199, 238, 180],
                [232, 238, 180]
            )
        })
        this.selector = selector;
        this.opts = opts || defaults;
    }
    // this is a private method
    check() {
        var errors = new Array(),
            hasError = false
            ;
            console.clear()
        if (this.selector === null) {
            errors.push(`[x] can't select the document model, '${this.selector}' is not found`);
            hasError = true
        }
        if (typeof this.selector !== "object") {
            errors.push(`[?] 'selector' must be an element [document object].`);
            hasError = true
        }
        if (typeof this.opts.interval === "string") {
            errors.push(`[?]'interval' must be a number.`);
            hasError = true
        }
        if (typeof this.opts.colors !== "object") {
            errors.push(`[?] 'colors' must be an Array on 'rgb' colors.\n`)
            hasError = true
        }
        if (hasError) {
            console.warn(`ERROR: => 
${new String("-").repeat(10)} 
${errors.splice(" ").join("\n")}
${new String("-").repeat(10)} 
contact the author Navicstein[at]gmail[dot]com, and tell him about your issues.
            `)
            throw `:( Giving up after Fatal Errors, not trying again!`
        }
    }
    animate() {
        this.check();
        var selector = this.selector;
        //        typeof _ !== "function"? "error":""
        var colors = this.opts.colors
        let step = 0,
            colorIndices = [0, 1, 2, 3],
            gradientSpeed = 0.002
            ; // todo

        function updateGradient() {
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

                //pick two new target color indices
                //do not pick the same as the current one
                colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
                colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

            }
        }
        // then run the loop
        setInterval(updateGradient, this.opts.interval);
    }

}


