import rootReducer from '../reducers'
import {actionCurrentMachine} from '../actions/index'

describe("reducers", ()=>{

    test('Curent machine',()=>{
        const itemMock = {
            id: 1,
            name: "DeLonghi",
            price: 10500,
            img: "./img/DeLonghi.jpg",
            article: 245454,
            color: "black"
        }
        const resultMock = {"currentMachine": {"article": 245454, "color": "black", "id": 1, "img": "./img/DeLonghi.jpg", "name": "DeLonghi", "price": 10500}}
        expect(rootReducer(
            {}, actionCurrentMachine(itemMock)
        )).toStrictEqual(resultMock)
    })
})
