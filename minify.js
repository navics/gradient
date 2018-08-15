var UglifyJS = require("uglify-es"),
    fs = require("fs"),
    minFileName = "./dist/gradient.min.js"
    ;
const options = {
    output: {
        comments: true
    },
}

var code = fs.readFile("./dist/gradient.js", { encoding: "UTF-8" }, (err, code) => {
    if (err) throw err
    var result = UglifyJS.minify(code, options);
    if (result.error) console.log(result.error);
    fs.writeFile(minFileName, result.code, err => {
        if (err) throw err
        console.log("Minified code!")
        fs.unlink("./dist/gradient.js", err=>{
            if(err) return // todo
            console.log("Removed gradient!")
        })
    })
})
