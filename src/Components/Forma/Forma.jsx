import Input from './Input'
import {Button} from '../../Components/Button'
import {Formik, Form} from 'formik'
import { selectorOrderData, selectorBasket } from '../../selectors'
import { useDispatch, useSelector } from 'react-redux'
import { actionOrderData, actionOrderProductData, actionCleanBasketAfterBuy } from '../../actions'
import { useState, useEffect } from 'react';
import {validationSchema} from './Validation'

import { PatternFormat } from 'react-number-format';

import './Forma.scss'

const Forma = ()=>{
    const [orderModal, setOrderModal] = useState(false);
    const dispatch = useDispatch()
    const orderData = useSelector(selectorOrderData)
    const orderItemsData = useSelector(selectorBasket)


    const orderModalToggle = ()=>{
        setOrderModal(!orderModal)
        console.log('aaa')
    }

   useEffect(()=>{
    console.log('+++++', orderData)
   },[orderData ])


   
    return(
        <>
      
        <Formik initialValues={orderData}
        onSubmit = { (values) =>{
            dispatch(actionOrderData(values))
            dispatch(actionOrderProductData(orderItemsData))
            orderModalToggle()
            dispatch(actionCleanBasketAfterBuy())
        }}
        validationSchema = {validationSchema}
        >
            {({errors, touched, getFieldProps })=>(
                <Form>
                   <div className= {orderModal ? 'form-wraper active' : 'form-wraper' } onClick={orderModalToggle}>
                        <div className = {orderModal ? 'form__content active': 'form__content'} onClick={e=>e.stopPropagation()}>
                        <svg className="modal-order-close" onClick={orderModalToggle} viewBox="0 0 16 16" width="16" height="16">
								<path
									d="m9.3 8 6.1-6.1c.4-.4.4-.9 0-1.3s-.9-.4-1.3 0L8 6.7 1.9.6C1.6.3 1 .3.6.6c-.3.4-.3 1 0 1.3L6.7 8 .6 14.1c-.4.4-.3.9 0 1.3l.1.1c.4.3.9.2 1.2-.1L8 9.3l6.1 6.1c.4.4.9.4 1.3 0s.4-.9 0-1.3L9.3 8z"/>
							</svg>
                            <Input inputName={'name'} label={'Enter your name'} error={errors.name && touched.name} placeholder={'Name'}/>
                            <Input inputName={'lastName'} label={'Enter your last name'} error={errors.lastName && touched.lastName} placeholder={'last name'}/>
                            <Input inputName={'age'} label={'Enter your age'} error={errors.age && touched.age} placeholder={'Age'}/>
                            <Input inputName={'deliveryAddress'} label={'Enter delivery address'} error={errors.deliveryAddress && touched.deliveryAddress} placeholder={'Delivery address'}/>
                            <Input inputName={'mobileNumber'} className='aaa'   label={'Enter your mobile number'} error={errors.mobileNumber && touched.mobileNumber} placeholder={'Mobile number'}
                             render ={(field)=><PatternFormat className={'form-control input'}  {...field} format="+3 (###) #### ###" allowEmptyFormatting mask="_"  />}/> 
                            <Button  clas='submit-form' type='submit' text={'Create order'}  ></Button>
                        </div>
                    </div>
                   
                </Form>
            )}
        
        </Formik>
        <Button clas="buy" text={'Create order'} openModalReg={orderModalToggle}/>
        </>
    )
}

export default Forma;