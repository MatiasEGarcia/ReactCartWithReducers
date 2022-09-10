const CartItem = ({data,delFromCart}) =>{
    let {id,name,price,quantity} = data;

    return(
        <div style={{borderBottom:"thin solid grey"}}>
            <h4>{name}</h4>
            <h5>${price} x {quantity}</h5>
            <button onClick={()=> delFromCart(id)}>Delete one</button>
            <br/>
            <button onClick={()=> delFromCart(id,true)}>Delete all</button>
            <br/><br/>
        </div>
    )
}

export default CartItem;