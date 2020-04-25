import React, { useState, useEffect } from 'react'
import data from "../data";
import './order.css'
import Axios from "axios";


  
const Row = ({order}) => (
    < >
        <tr>
            <td className="table__cell">{order.id}</td>
            <td className="table__cell">{order.name}</td>
            <td className="table__cell">{order.address}</td>
            <td className="table__cell">{order.item.length}</td>
            <td className="table__cell">{order.total}</td>
            {/* <td className="table__cell"> */}
            {/* <button type="button" data-a11y-toggle="expandable-row-1">toggle detailed information
            </button> */}
            {/* </td> */}
        </tr>
        <tr id="expandable-row-1" className="expandable-row">
            <td className="table__cell" colSpan="3">
            I have more information for you.
            </td>
        </tr>
    </>
)

const Order = () => {
    const [data, setData] = useState(null)

    const fetchData = async  () => {

        const response =  Axios.get('https://mypizzapps.herokuapp.com/api/orders/').then(res => {
            const result = res.data
            setData(result)
        })
        return response
    }

    useEffect(() => {
      fetchData()


    }, [])
 
    return (
        <div style={{overflowX:'scroll',}}>
            <table className="table table--has-expandable-rows">
            <caption id="caption-expandableOrders">
            <div className="sr-only">Lists user IDs, their handles and even more...</div>
            </caption>
            <thead>
            <tr>
                <th className="table__heading" role="columnheader" scope="col">ID</th>
                <th className="table__heading" role="columnheader" scope="col">Name</th>
                <th className="table__heading" role="columnheader" scope="col">Address</th>
                <th className="table__heading" role="columnheader" scope="col">No. of Items</th>
                <th className="table__heading" role="columnheader" scope="col">Total</th>
            </tr>
            </thead>
            {data &&
                <tbody>

                {data && data.map(order => 

                    <Row key={order.id} order = {order} />

                )}
                
                </tbody>
            }   
        </table>
    </div>
    )
};

export default Order;