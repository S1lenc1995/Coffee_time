import Footer from './Footer'
import {render} from '@testing-library/react'

describe("Test Footer", ()=>{
    test("Snapsot Footer",()=>{
        const footer = render(<Footer/>)

        expect(footer).toMatchSnapshot()
    })
})