import { render, screen } from "@testing-library/react"
import Skills from "./Skills"

describe('skills',()=>{
    const skills=['HTML','CSS','JAVASCRIPT']

    test('render correctly',()=>{
        render(<Skills skills={skills}/>)
        const listElement=screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })

    test('render a list of skills',()=>{
        render(<Skills skills={skills}/>)
        const listItemElement=screen.getAllByRole('listitem')
        expect(listItemElement).toHaveLength(skills.length)
    })

    test('renders login button',()=>{
        render(<Skills skills={skills}/>)
        const loginElement=screen.getByRole("button",{
            name:"Login",
        })
        expect(loginElement).toBeInTheDocument()
    })

    test('start learning button is not render',()=>{
        render(<Skills skills={skills}/>)
        const startLearningButton=screen.queryByRole('button',{
            name:"Start learning",
        })
        expect(startLearningButton).not.toBeInTheDocument()
    })

    test('start learning button is eventually displayed',async ()=>{
        render(<Skills skills={skills}/>)
        const startLearningButton=await screen.findByRole('button',{
            name:"Start learning",
        },
        {
            timeout:2000,
        })
        expect(startLearningButton).toBeInTheDocument()
    })
})