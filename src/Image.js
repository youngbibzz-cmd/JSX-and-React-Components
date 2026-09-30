import product from './product.js'

function Image() {
  return (
    <img
      className="product-image"
      src={product.imageUrl}
      alt={product.name}
    />
  )
}

export default Image