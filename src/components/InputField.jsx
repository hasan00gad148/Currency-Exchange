import React from 'react'
import PropTypes from 'prop-types';

function InputField({
  amount=0,
  label="from/to",

  selectedCurrency='egp',
  currencyList=[],

  onCurrencyChange,
  onAmountChange,

  disableAmount=false,
  disableCurrency=false,

  ClassName
}) {


amount
  
  return (
    <div className={`
    bg-slate-50 rounded-lg p-4 mx-auto flex flex-wrap items-center
    ${ClassName}`}>

      <div className='w-1/2 justify-items-start p-2 text-left my-2 '>

        <label className='block text-neutral-800 ' htmlFor="currency">{label}</label>
        <input type="number"
        className='outline-none w-3/4 bg-transparent '
        disabled={disableAmount}
          value={amount}
          onChange={(e)=>{ onAmountChange && onAmountChange(Number(e.target.value))}}
         name="currency" id="currency" />


      </div>
      <div className='w-1/2 justify-items-end p-2 text-right my-2 '>

          <label htmlFor="currencyName" 
          className='block text-neutral-800 my-2 '> currency name</label>

          <select name="currencyName" 
          className='bg-slate-200 p-1 rounded-lg' 
          value={selectedCurrency}
          onChange={(e)=>{ onCurrencyChange && onCurrencyChange(e.target.value)}} 
          disabled={disableCurrency}
          id="currencyName" >
            {currencyList.map((c)=>(<option value={c} key={c} >{c}</option>))}
          </select>
      </div>

    </div>
  )
}


InputField.propTypes = {
  // name: PropTypes.string.isRequired,
  amount: PropTypes.number,
  label: PropTypes.string,

  selectedCurrency: PropTypes.string,
  currencyList:PropTypes.array,

  onCurrencyChange: PropTypes.func,
  onAmountChange:PropTypes.func,

  disableAmount:PropTypes.bool,
  disableCurrency:PropTypes.bool,

  ClassName:PropTypes.string
};


// InputField.defaultProps = {
//   amount: 0 
// };
export default InputField