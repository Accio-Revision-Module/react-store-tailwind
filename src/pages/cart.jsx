import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/common/Loading'
import Error from '../components/common/Error'
import Product from '../components/Product'
import { fetchCartItems } from '../store/actions/cartActions'

function Cart() {
  const {items, isLoading, error} = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems())
  }, [])

  console.log("Items>>", items)
  
  return (
      <main className='flex flex-col justify-center items-center gap-10'>
        <h2 className='font-bold text-4xl'>Cart</h2>
        {isLoading && <Loading />}
        {error && <Error e={error} />}
        <div className="grid grid-cols-4 gap-8">
          {items?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </main>
  )
}

export default Cart