import { useParams,useNavigate } from "react-router-dom";//useParams() is a React Router hook. It allows you to get dynamic values from the URL — for example, product ID.
//use navigate use to navigate to pages on click
import all_product from "../../assets/all_product"
import "./Css/ProductDetail.css"
import star from "../../assets/star_dull_icon.png"
import star2 from "../../assets/star_icon.png"
import Relatedproducts from "../Relatedproducts/Relatedproducts.jsx"
const ProductDetail = ({ addToCart }) => {
  const { id } = useParams(); // this will be 1, 2, etc.
   const navigate = useNavigate();
  const product = all_product.find((p) => p.id === parseInt(id));//map sai saare product mil jaate hume idhr ek time pai ek
  //cahhiye isliye find,,ye p esey he random naam select krlia koi

   // If product not found
  if (!product) return <div>Product not found</div>;

  return (
    <>
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} width="400" />
      </div>
     
      <div className="product-info">
        <h2>{product.name}</h2>
         <div className="rating">
        <img src={star2}></img>
        <img src={star2}></img>
        <img src={star2}></img>
        <img src={star2}></img>
        <img src={star}></img> (122)
       
      </div>
       <div className="price-section">
          <span className="old-price"><s>₹{product.old_price}</s></span>
          <span className="new-price">₹{product.new_price}</span>
        </div>
      <p>Elevate your wardrobe with this versatile and stylish piece, crafted with comfort and quality in mind. Made from premium materials, this [item type] offers a perfect blend of durability, softness, and breathability. Designed for a flattering fit, it's ideal for both casual outings and special occasions. Whether paired with your everyday basics or dressed up for a night out, this [item] will quickly become a go-to favorite in your collection.<br/>

Material: 100% cotton, polyester blend<br/>

Fit:  regular fit, slim fit, relaxed fit<br/>

Care:  Machine wash cold, tumble dry low<br/>

Style Tip:  Pair with jeans or layer with a jacket for a chic look.

</p>
   <h3>Select Size</h3>
   <div className="size">
   <button >S</button>
   <button >M</button>
   <button >L</button>
   <button >XL</button>
   <button >XXL</button>
   </div>
        
       
        <button className="add"  onClick={() => {
              addToCart(product);
              navigate("/cart");
              
            }}>Add to Cart</button>
      </div>
    </div>
    <Relatedproducts></Relatedproducts>
    </>
  );
};

export default ProductDetail;
