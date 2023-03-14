import {useState, useEffect} from 'react'
import axios from 'axios'

function OrderAPI() {
    const [orderInfo, setOrderInfo] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getCatigories = async () =>{
            const res = await axios.get('/api/ordered')
            setOrderInfo(res.data)
        }
        
        getCatigories()
    },[callback])
    return {
        orderInfo: [orderInfo, setOrderInfo],
        callback: [callback, setCallback]
    }
}

export default OrderAPI
