import Itemcount from "./ItemCount"



const Itemdetail = (productos) => {

const stateUpCount = (dataDelHijo) => {
  console.log("Hemos recibido la data del hijo:" + dataDelHijo)
}

  return (
    <>
    <div className="product-details">
      <img src={productos.pictureUrl} alt="imagen producto"/>
        <div className="product-details-text">
          <h2>{productos.title}</h2>
          <p className="product-details-details">{productos.details}</p>
          <p className="product-details-price">${productos.price}</p>
          <div className="counter">
            <Itemcount onClick={stateUpCount} />
          </div>
        </div>

    </div>
    </>
  )

}

export default Itemdetail;
