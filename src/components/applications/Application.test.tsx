import { render , screen } from '@testing-library/react';
import Application from './Application';
describe("application",()=>{
    test("renders correctly",()=>{
        render(<Application/>)
        const headingElement=screen.getByRole("heading",{
           level:1,
        })
        expect(headingElement).toBeInTheDocument()

        const sectionHeading =screen.getByRole("heading",{
            level:2,
        })
        expect(sectionHeading).toBeInTheDocument()

        const nameElement=screen.getByRole('textbox',{
            name:"Name"
        })
        expect(nameElement).toBeInTheDocument()

        const nameElement2=screen.getByLabelText('Name')
        expect(nameElement2).toBeInTheDocument()
        
        const nameElement3=screen.getByPlaceholderText("Fullname")
        expect(nameElement3).toBeInTheDocument()

        const nameElement4=screen.getByDisplayValue("sujith")
        expect(nameElement4).toBeInTheDocument()

        const paragraphElement=screen.getByText("All fields are mandatory")
        expect(paragraphElement).toBeInTheDocument()

        const imageElement=screen.getByAltText("a person with laptop")
        expect(imageElement).toBeInTheDocument()

        const spanElement=screen.getByTitle("close")
        expect(spanElement).toBeInTheDocument()

        const customElement=screen.getByTestId("custom-element")
        expect(customElement).toBeInTheDocument()

        const bioElement=screen.getByRole("textbox",{
            name:"Bio"
        })
        expect(bioElement).toBeInTheDocument()

        const jobLocationElement=screen.getByRole("combobox")
        expect(jobLocationElement).toBeInTheDocument()

        const termsElement=screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument()

        const termsElement2=screen.getByLabelText("I agree to the terms and conditions")
        expect(termsElement2).toBeInTheDocument()

        const submitButtonElement=screen.getByRole("button")
        expect(submitButtonElement).toBeInTheDocument()
    })
})