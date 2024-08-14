import PropTypes from 'prop-types'

function Card({ product }) {
    return (
        <div className="card card-compact bg-base-100 bg-opacity-80 w-96 shadow-xl">
<figure style={{height: "50%"}}>
<img 
  src={product.images[0]}
  alt={product.title} />
</figure>
<div className="card-body">
<h2 className="card-title self-center">{product.title}</h2>
<p>{product.description}</p>
<p className="text-lg font-bold">{product.price}€</p>
<div className="card-actions justify-center">
  <button className="btn btn-block btn-accent">Buy Now</button>
</div>
</div>
</div>
    )
}

Card.propTypes = {
    product: PropTypes.object,
}

export default Card;