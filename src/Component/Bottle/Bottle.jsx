import './Bottle.css'
export default function Bottle({bottle,handleAddCart}){
    // console.log(handleAddCart)
    // console.log(bottle)
    const {name,price,img}=bottle
    return (
        <div className="bottle-container">
            <h4>Name:{name}</h4>
            <img src={img}></img>
            <p>Price:${price}</p>
            <button onClick={()=>handleAddCart(bottle)}>Purchase</button>
        </div>
    )
}