import * as UglifyJS from "uglify-es";
import { readFile, writeFile, unlink, copyFile } from "fs"

import { resolve } from "path";

var minFileName: string = "../dist/gradient.min.js",
    options: object = {
        output: {
            comments: true
        }
    }
    ;

function checkErr(e: Error) {
    if (e) throw e
}
var code: any = readFile("../dist/gradient.js", { encoding: "UTF-8" }, (err: Error, code: Buffer) => {
    checkErr(err)
    var result = UglifyJS.minify(code, options);
    if (result.error) console.log(result.error);
    writeFile(minFileName, result.code, (err: Error) => {
        checkErr(err)
        console.log("Minified code!")
        unlink("../dist/gradient.js", (err: Error) => {
            checkErr(err)
            console.log("Removed gradient.js")
        })
    })
})


