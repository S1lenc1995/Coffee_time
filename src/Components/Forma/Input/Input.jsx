import {Field, ErrorMessage} from "formik"
import cx from 'classnames'
import PropTypes from 'prop-types'

import './Input.scss'

const Input = ({className, error, label, type, inputName, placeholder, render, ...restProps}) => {
    return(
        <label className={cx("form-item", className, {'has-validation': error})}>
            <p className="form-label input-header"> {label} </p>
            <Field type={type} 
            render={({field})=>render?render(field  ):<input  className='form-control input'  {...field}/>   }
                  
                   name={inputName} 
                   placeholder={placeholder} 
                   {...restProps}/>
                   <ErrorMessage className='error-message' name={inputName} component={'p'}/>
        </label>
    )
}
Input.defaultProps = {
    type: 'text',
}


Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    inputName: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.object,
}
export default Input;
