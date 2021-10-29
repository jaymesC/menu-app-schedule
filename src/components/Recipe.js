import './style.css'

function Recipe( {img, title, price, description}) {
  return (
    <div className="card">
      <img src={img} alt="item-one" />
      <div className="content">
        <section className="item">
          <h3>{title}</h3>
          <h4>{price}</h4>
        </section>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Recipe
