import Footer from "./Footer";
import "./EditProduct.css";

function EditProduct() {
    return (
        <div className="pageContent">
            <h2 className="editProductHeader">Edit Product Information</h2>
            <div className="mainEditProduct">
                <div className="addImageEditProduct">
                    <button className="editProductImage">Add/Delete Image(s) +/-
                </button>
                </div>
                <div className="editProductLabels">
                    <form className="editProductForm">
                        <label>
                            Product Name:
                    <input type="text" name="Edit Product name" className="editProductInput" placeholder="Edit Product name" />
                        </label>
                        <label>
                            Cost:
                    <input type="text" name="Edit Cost of the Product" className="editProductInput" placeholder="Edit Cost of the Product" />
                        </label>
                        <label>
                            Product Condition :
                    <input type="text" name="Edit Product Condition" className="editProductInput" placeholder="Edit Product Condition" />
                        </label>
                        <label>
                            Category:
                    <input type="text" name="Select Category" className="editProductInput" placeholder="Select Category" />
                        </label>
                        <label>
                            Description:
                    <input type="text" name="Product Description" className="editProductInput" placeholder="Edit Description" />
                        </label>
                        <button type="submit" className="saveChangesButton">
                            Save Changes
                    </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EditProduct;
