import Header from "./Header";
import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom';
import { actionToggleModalAddtoBasket } from "../../actions";

describe("Test Header", ()=>{
    test('Snapshot Headr', ()=>{
        const header = render(<BrowserRouter><Header/></BrowserRouter>)

        expect(header).toMatchSnapshot()
    })

    test('check text', ()=>{
        render(<BrowserRouter><Header/></BrowserRouter>)

        expect(screen.getByText(/COFFEE/i))
    })
})