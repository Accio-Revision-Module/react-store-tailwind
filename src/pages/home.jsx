import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import { fetchProducts } from '../store/actions/productsAction';
import { searchForProducts } from '../store/slices/productsSlice';

function Home() {
  const [query, setQuery] = useState("");
  const {products, isLoading, error} = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  useEffect(() => {
    dispatch(searchForProducts(query))
  }, [query])

  return (
    <main className='flex flex-col gap-8 p-4 w-full bg-gray-50'>
      <header className='flex flex-col justify-center items-center gap-4'>
          <h1 className='text-7xl uppercase font-bold'>All Store</h1>
          <input value={query} onChange={(e) => setQuery(e.target.value)} type='search' placeholder='Search for products...' className='border-gray-200 border-2 rounded p-2 outline-none text-lg w-2/5' />
      </header>

      <hr />

      <div className='flex flex-col justify-center items-center gap-10'>
        <h2 className='font-bold text-2xl'>Products</h2>
        {isLoading && <Loading />}
        {error && <Error e={error} />}
        <div className="grid grid-cols-4 gap-8">
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home