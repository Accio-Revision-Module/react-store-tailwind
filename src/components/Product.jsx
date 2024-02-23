function Product({product}) {
  return (
    <div className="w-[300px] bg-gray-100 rounded-lg">
        <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
        <div className="flex flex-col p-4 justify-between items-start gap-4">
            <h3 className="font-bold text-lg line-clamp-2">{product.title}</h3>
            <p className="line-clamp-3">{product.description}</p>
            <h3 className="font-bold text-lg line-clamp-2">${product.price}</h3>
            <button className="bg-gray-500 hover:bg-transparent text-gray-50 hover:text-gray-500 p-2 rounded border-gray-500 border-2 transition">Add To Cart</button>
        </div>
    </div>
  )
}

export default Product