/*  import SliderCoffeeMachine from "./CoffeeMachine"; 
import { fireEvent, render, waitFor } from "@testing-library/react";
import * as reactRedux from 'react-redux';
import store from "../../../../store"; 
import { selectorModalAddtoBasket } from "../../../../selectors";
import {Modal} from '../../../Modal/index'

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe("CoffeeMachineList", ()=>{

    beforeEach(() => {
        useDispatchMock.mockImplementation(() => () => {});
        useSelectorMock.mockImplementation(selector => selector(mockStore));
    })
    afterEach(() => {
        useDispatchMock.mockClear();
        useSelectorMock.mockClear();
    })
    const useSelectorMock = reactRedux.useSelector;
    const useDispatchMock = reactRedux.useDispatch;

    const mockStore = {
        thing1: 'this is thing1',
        somewhere: {
            thing2: 'and I am thing2!',
        }
    };

   
    test ('Check List', ()=>{
        const {container} = render(<Provider store={store}><SliderCoffeeMachine/></Provider>)
        const div = container.querySelector('div')
        waitFor(() => expect(div).toHaveClass('coffee-machines__items'))
    })



    test('Button click', ()=>{
        const {container, getByTestId} = render(<Provider store={store}><SliderCoffeeMachine/></Provider>)
        const button = container.querySelector('.coffee-machines__items--button')
        const modal = useSelector(selectorModalAddtoBasket) 
        const modallWraper = document.querySelector('.active')

  
        
        

         waitFor(() => fireEvent.click(button))

        
         expect(modal).toBe(true) 
         /* expect(modallWraper).toBeInTheDocument() 
    })
})  */