import React, { useContext } from 'react'
import './checkout.css'
import { Formik } from 'formik';
import { cartContext } from "../../context/cart/cart";
import Axios from "axios";
import { Input, Button, Dismiss } from "../global";



const Checkout = ({show, setShow}) => {

    const {state, dispatch} = useContext(cartContext)

    

    return (
        <div className="wrap">
            <div className={` ${show? "is-active" : null} modal js-modal`}>
            <Formik

            // Error handling 
                initialValues={{name:'', email: '', address: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    if (!values.name) {
                        errors.name = 'Required';
                    
                    }
                    if (!values.address) {
                        errors.address = 'Required';
                    }
                    return errors;
                }}
                onSubmit={ async (values, { setSubmitting }) => {
                    const ids = state.items.map(item => `https://mypizzapps.herokuapp.com/api/pizzas/${item.id}/`)
                    const order = {...values, item:ids, total:state.total}
                    await Axios.post('https://mypizzapps.herokuapp.com/api/orders/', order)

                    
                    setTimeout(() => {
                        dispatch({type:'REMOVE_ALL'})
                        setShow()
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
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
                    <form onSubmit={handleSubmit}>
                        <Input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder = 'Input your Full Name'
                        />
                        {errors.name && touched.name && errors.name}
                        <Input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder = 'Input your Email'
                        />
                        {errors.email && touched.email && errors.email}
                        <Input
                            type="text"
                            name="address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                            placeholder = 'Input your Address'
                        />
                        {errors.address && touched.address && errors.address}
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>
    
                <Dismiss  onClick = {setShow} >X</Dismiss>
            </div>
        </div>
    )
}

export default Checkout;