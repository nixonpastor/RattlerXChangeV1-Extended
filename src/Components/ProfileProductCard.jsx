import "./ProfileProductCard.css";
import axios from "axios";
//import { useHistory } from "react-router-dom";

import { Link, useHistory } from "react-router-dom";

function ProfileProductCard(props) {

  const history = useHistory();

  console.log(props)


  function deleteButtonPressed(e){
    console.log("Check")
    console.log(props)
    console.log(props.prodId)
    axios
      .delete("http://localhost:5000/products/"+ props.prodId, {id:props.prodId})
      .then((res) => console.log(res.data));

    console.log("Check line")
    window.alert("Product Deleted.")
    
    //history.push("/home");
    window.location.reload()
  }

  return (
    <li className="CardContainer">
      <figure className="PriceLabel" data-category={props.value}>
        <img className="image" alt="product" src={"images/" + props.img} />
      </figure>
      <div className="productTitle">
        <h1>{props.text}</h1>
      </div>
      <div className="cardIcons">
        <Link to={{
          pathname: "/editProduct",
          productProps: {
            productID: props.prodId,
          },
        }}
          className="iconEditProduct">
          <i class="fas fa-pencil-alt"></i>
        </Link>
        <Link to="/home" className="iconTrashCan" onClick={deleteButtonPressed}>
          <i class="fas fa-trash-alt"></i>
        </Link>
      </div>
    </li>
  );
}

export default ProfileProductCard;
