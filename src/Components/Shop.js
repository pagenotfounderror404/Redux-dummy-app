import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../State/index'
import { bindActionCreators } from 'redux'

const Shop = () => {
  const dispatch = useDispatch()
  const actions = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => actions.withdrawMoney(100)}
      >
        -
      </button>
      Add this item to cart
      <button
        className="btn btn-primary mx-2"
        onClick={() => actions.depositMoney(100)}
      >
        +
      </button>
      {/* <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch(actionCreators.withdrawMoney(100))}
      >
        -
      </button>
      Add this item to cart
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch(actionCreators.depositMoney(100))}
      >
        +
      </button> */}
    </div>
  )
}

export default Shop
