import * as yup from 'yup'


export const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Name is required')
        .min(2, 'Name is too short'),
       

    lastName: yup
        .string('Enter your last name')
        .required('Last name is required')
        .min(2, 'Last name is too short'),

    age: yup
        .number()
        .typeError('Amount must be a number')
        .required("Please supply your age")
        .min(18, "You must be at least 18 years")
        .max(150, "Enter corect age"),

    deliveryAddress: yup
        .string('Enter your address')
        .required('Address is required')
        .min(3, 'Address is to short')
        .max(20, 'Enter corect address'),

     mobileNumber: yup
        .string('Enter your number')
        .required('Address is required') 
        .min(17, 'Number is to short')
        
})