import React, { useContext } from 'react'

import './login.css'
import { Formik } from "formik"
import { userContext } from "../../context/user/user"
import { register } from "../../context/user/auth"

export const Register = ({registershow , setRegistershow}) => {

    const {state, dispatch} = useContext(userContext)

    return (
        <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: `${registershow ? 'block': 'none'}`}}>
    	  <div className="modal-dialog">
          <Formik
            initialValues={{username:'', password: '',email:'' }}
            validate={values => {
                const errors = {};
                
                if (!values.username) {
                    errors.username = 'Required';
                
                }
                if (!values.password) {
                    errors.password = 'Required';
                }
                if (!values.email) {
                    errors.email = 'Required';
                }
                if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                return errors;
            }}
            onSubmit={ async ( values, { setSubmitting }) => {
                register(dispatch,values)

                setSubmitting(false);
            }}

            >
				
                    {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <div className="loginmodal-container">
					<h1>Login to Your Account</h1><br />
                    <p  className='errors'>{state.error}</p>
                        <form onSubmit={handleSubmit}>
                            <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            placeholder = 'Input your Username'
                            type="text" name="username"  />

                            <p  className='errors'>{errors.username && touched.username && errors.username}</p>
                            <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder = 'Input your Email'
                            type="text" name="email"  />

                            <p  className='errors'>{errors.email && touched.email && errors.email}</p>

                            <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder = 'Input your Password'
                            type="password" name="password"  />
                            <p className='errors'>{errors.password && touched.password && errors.password}</p>

                            <button type="submit" disabled={isSubmitting} name="login" className="login loginmodal-submit" value="Login"> Submit </button> 
                            <button onClick = {() => setRegistershow()} className="login loginmodal-submit close"> Close </button> 

                        </form>
                    </div>
                )}
					
				  
				
            </Formik>
			</div>
		  </div>
    )
}