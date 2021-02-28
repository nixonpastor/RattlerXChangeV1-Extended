import Footer from "./Footer";
import "./AddProduct.css";

function EditProduct() {
  return (
    <div>
        <h2>Edit Product Information</h2>
        <div className="main">
            <div className="addImage">
                <button>Add/Delete Image(s) +/-
                </button>
            </div>
            <div className = "productLabels">
            <form>
                <label>
                    Product Name: 
                    <input type="text" name="Edit Product name" placeholder = "Edit Product name" />
                </label>
                <label>
                    Cost: 
                    <input 
                    type="text" name="Edit Cost of the Product" placeholder = "Edit Cost of the Product" />
                </label>
                <label>
                    Product Condition : 
                    <input type="text" name="Edit Product Condition" placeholder = "Edit Product Condition" />
                </label>
                <label>
                    Category: 
                    <input type="text" name="Select Category" placeholder = "Select Category" />
                </label>
                <label>
                    Description: 
                    <input type="text" name="Product Description" placeholder = "Edit Description" />
                </label>
                <input type="submit" value="Save Changes" />
            </form>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default EditProduct;