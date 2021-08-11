import {Greeter} from "../src/greeter";

describe("", ()=>{
    test("",()=>{
        //arrange
        let kaela = new Greeter ("hello");
        //assert
        expect(kaela.greet("Kaela")).toBe("hello, Kaela!");
    })
    test("",()=>{
        let scott = new Greeter ("What's up");
        expect(scott.greet("Scott")).toBe("What's up, Scott!");
    })
})

