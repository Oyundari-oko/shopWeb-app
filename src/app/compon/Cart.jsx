const Cart = ({title, thumbnail,price,description,id, category})=>{
  
    return(
        <div>
       
             <div className="bord">
            <div className="style">
             <div className="text">{title}:</div> 
             <div className="id">{id}</div>
             <div className="text2">{description}</div> 
             <div className="turul">{category}</div>
            <img  className="zurag"src={thumbnail}></img> 
            
            </div>
            <div className="une">{price}$</div>
        </div>
           </div>
       
    )
}
export default Cart;