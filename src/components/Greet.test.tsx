import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet",()=>{
    test("render correctly",()=>{
        render(<Greet/>)
        const textElement=screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })
    describe("nested greet",()=>{
        test("render with name",()=>{
            render(<Greet name="sujith"/>)
            const textElement=screen.getByText("Hello sujith")
            expect(textElement).toBeInTheDocument()
        })
    })
})