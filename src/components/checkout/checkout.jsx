import React, { useContext } from 'react'
import './checkout.css'
import { Formik } from 'formik';
import styled from "styled-components";
import { cartContext } from "../../context/cart/cart";
import Axios from "axios";

const Input = styled.input`
    width: 300px;
    border: 2px solid green;
    height: 35px;
    border-radius: 10px;
    outline: none;
    display: block;
    margin: 15px auto;
    font-size: 15px;
    padding-left: 15px;
`
const Button = styled.button`

    height: 50px;
    border: 1px solid green;
    outline: none;
    font-size: 20px;
    padding: 10px;
    background: transparent;
    margin-right: 10px;
    border-radius: 10px;
   
    :hover {
    color: white;
    background: green;
    border: 0px solid;
}
`
const Dismiss = styled.button`
    position: absolute;
    font-size: 14px;
    top: 5px;
    left: 5px;
    background: green;
    color: white;
    border-radius: 100%;
    border: 0px solid black;

`

const Checkout = ({show, setShow}) => {

    const {state, dispatch} = useContext(cartContext)

    

    return (
        <div className="wrap">
            <div className={` ${show? "is-active" : null} modal js-modal`}>
            <Formik
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
                    const ids = state.items.map(item => `http://localhost:8000/pizzas/${item.id}/`)
                    const order = {...values, item:ids, total:state.total}
                    console.log(order)
                    const response = await Axios.post('http://localhost:8000/orders/', order)

                    console.log(response)
                    
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