import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./ProductInfo.css";

function ProductInfo() {
    return (
        <div className="pageContent">
            <h2 className="productInfoHeader">Product Information</h2>
            <div className="mainProductInfo">
                <div className="imageProductInfo">
                    <button className="productInfoImageButton" /*style="background: url('Rattler.jpeg')"*/> Image Goes Here
                </button>
                </div>
                <div className="productLabels">
                    <form className="productInfoForm">
                        <label>
                            Product Name:
                    <input type="button" name="Product Name" className="productInfoField" value="Product name not available" />
                        </label>
                        <label>
                            Cost:
                    <input type="button" name="Cost" className="productInfoField" value="Cost not available" />
                        </label>
                        <label>
                            Product Condition :
                    <input type="button" name="Condition" className="productInfoField" value="Condition not available" />
                        </label>
                        <label>
                            Category:
                    <input type="button" name="Category" className="productInfoField" value="Category not available" />
                        </label>
                        <label>
                            Description:
                    <input type="button" name="Description" className="productInfoField" value="Description not avaiable" />
                        </label>

                        <div className="buttons">
                            <div>
                                <button type="submit" className="sellerInfoButton">
                                    Contact Seller
                            <div class="buttonTextSpace" />
                                    <i class="fas fa-envelope"></i>
                                </button>
                            </div>
                            <div class="divider" />
                            <div>
                                <button type="submit" className="wishlistButton">
                                    Wishlist
                            <div class="buttonTextSpace" />
                                    <i class="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductInfo;
