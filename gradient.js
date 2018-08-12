/**
 * 
 */
class gradient {
    constructor(selector, opts) {
        this.selector = selector;
        this.opts = opts || {};
    }
    colors(...args) {
        return args
    }
    animate() {
        var selector = this.selector;
        //        typeof _ !== "function"? "error":""
        var colors = new Array(
            [209, 220, 222],
            [0, 0, 0, 0],
            [60, 180, 75],
            [0, 128, 128],
            [199, 238, 180],
            [232, 238, 180]
        );

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
            
           selector.style="background: -moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%); background:-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
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
        setInterval(updateGradient, 10);
        console.log(this.options({}))
    }
    options(opts) {
        return opts
    }

}

new gradient(document.getElementById("main")).animate()

var g = new gradient(document.getElementById("mainer"))
g.options({
    interval: 23,
    colors: "main"
})
g.animate()
