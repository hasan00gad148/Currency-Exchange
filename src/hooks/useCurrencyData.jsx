import { useEffect, useState } from 'react'
import React from 'react'

 
function useCurrencyData(currency) {
    let[data,setData] = useState({})
    console.log(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)

    useEffect(()=>{
        const getData = async()=>{
        const res = await  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        const d = await res.json()
        setData(d[currency])
        // console.log("useEffect",d[currency])
        return d[currency]
        }

        getData()

    },[currency])

    return data
}

export  {useCurrencyData}