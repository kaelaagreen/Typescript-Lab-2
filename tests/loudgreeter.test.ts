import { LoudGreeter } from "../src/loudgreeter";

describe("",()=>{
    //arrange
    let jim = new LoudGreeter ("Hi there")
    test("",()=>{

        //assert
        expect(jim.greet("Jim")).toBe("Hi there, Jim!!");
    })
    test("",()=>{
        //act 
        jim.addVolume();
        //assert
        expect(jim.greet("Jim")).toBe("Hi there, Jim!!!");
    });
});
