import React,{ useState } from 'react'
import {InputField} from './components/index.js'
import {useCurrencyData} from './hooks/index.js'



function App() {

  let[from,setFrom] = useState("usd");
  let[to,setTo] = useState("egp");

  let currencyData =  useCurrencyData(from)
  let currencyList = Object.keys(currencyData)

  let[amount,setAmount] = useState(0);
  let[convertedAmount,setConvertedAmount] = useState(0);

console.log(convertedAmount,currencyData[to],amount)

  return (
    <>
      <div  className='w-screen h-screen bg-cover object-cover bg-stocks2 text-center flex  items-center'>

        <div className='  mx-auto xl:w-1/2  lg:w-1/2 sm:w-full w-3/4  bg-slate-100/35 p-16 rounded-xl shadow-lg'>
            <form action="" className=' w-full '>
              <InputField  ClassName={"mb-2"} 
              label={`from ${from}`}
              amount={amount}
              currencyList={currencyList}
              selectedCurrency={from}
              onAmountChange={(amount)=>{
                setAmount(amount)
              }}
              onCurrencyChange={(currency)=>{
                setFrom(currency)
                setConvertedAmount(0)
                setAmount(0)
              }}
              />
              <div className='relative w-full h-1'>
                <button 
                onClick={(e)=>{
                    e.preventDefault()
                    setFrom(to)
                    setTo(from)
                    setAmount(convertedAmount)
                    setConvertedAmount(amount)
                }}
                className='absolute -translate-y-6 -translate-x-6 border-2 border-black  bg-lime-600 text-slate-50 p-2 rounded-lg'> swap</button>
              </div>
              <InputField ClassName={"mb-2"} 
                    label={`to ${to}`}
                    amount={convertedAmount}
                    currencyList={currencyList}
                    selectedCurrency={to}
                    disableAmount={true}
                    onCurrencyChange={(currency)=>{
                      setTo(currency)
                      setConvertedAmount(0)
                      setAmount(0)
                    }}
              />
              <input type="submit" value={`convert ${from} to ${to}`}
                  onClick={(e)=>{
                    e.preventDefault()
                    setConvertedAmount(currencyData[to]*amount)
                  }} 
              className='mb-4 w-full border-2 border-black font-bold text-lg bg-lime-600 text-slate-50 p-2 rounded-lg' />
            </form>
        </div>

      </div>
    </>
  )
}

export default App
