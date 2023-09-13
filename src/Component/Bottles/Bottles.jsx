import { useEffect } from "react"
import { useState } from "react"
import Bottle from "../Bottle/Bottle"
import './Bottles.css'
import { addToLs } from "../../utilities/localStoragr"
import { getStoredCart } from "../../utilities/localStoragr"

export default function Bottles(){
    const [bottles,setBottles]=useState([])
    const [bottlesCart,setBottlesCart]=useState([])
    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])
    useEffect(()=>{
        console.log(bottles.length)
        if(bottles.length>0){
            const storeCard=getStoredCart()
        console.log(storeCard,bottles)

            const savedCart=[]
        for (const id of storeCard){
            console.log(id)
            const bottle= bottles.find(bottle=>bottle.id===id)
            if(bottle){
                savedCart.push(bottle)

            }
            console.log('savedCart',savedCart)
            setBottlesCart(savedCart)
        }
        }
    },[bottles])
    const handleAddCart=(bottle)=>{
        // console.log('Add to the cart')
        // console.log(bottle)
        const newBottlesCart=[...bottlesCart,bottle]
        setBottlesCart(newBottlesCart)
        addToLs(bottle.id)
    }
    return (
        <div>
            <h3>Bottles Available:{bottles.length}</h3>
            <h3>Cart:{bottlesCart.length}</h3>
           <div className="bottles-container">
           {
                bottles.map(bottle=><Bottle key={bottle.id}
                    handleAddCart={handleAddCart}
                     bottle={bottle}></Bottle>)
            }
           </div>
        </div>
    )
}