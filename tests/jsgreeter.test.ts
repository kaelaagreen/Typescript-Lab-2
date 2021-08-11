import { JavaScriptGreeter } from "../src/jsgreeter";

describe("",()=>{
    test("",()=>{
        //arrange
        let rachel = new JavaScriptGreeter("Hey");

        //assert
        expect(rachel.greet("Rachel")).toBe("console.log('Hey, Rachel!')")
    })
    test("",()=>{
        //arrange
        let jessica = new JavaScriptGreeter ("omigod hiii");
        expect(jessica.greet("Jessica")).toBe("console.log('omigod hiii, Jessica!')")
    })
})