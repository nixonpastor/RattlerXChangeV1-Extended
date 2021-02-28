import Footer from "./Footer";
import "./AddProduct.css";
import "./Pages.css";

function AddProduct() {
  return (
    <div className="pageContent">
      <h2>Add a Product</h2>
      <div className="main">
        <div className="addImage">
          <button>Add Image(s) +</button>
        </div>
        <div className="productLabels">
          <form>
            <label>
              Product Name:
              <input
                type="text"
                name="Enter Product name"
                placeholder="Enter Product name"
              />
            </label>
            <label>
              Cost:
              <input
                type="text"
                name="Enter Cost of the Product"
                placeholder="Enter Cost of the Product"
              />
            </label>
            <label>
              Product Condition :
              <input
                type="text"
                name="Enter Product Condition"
                placeholder="Enter Product Condition"
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                name="Select Category"
                placeholder="Select Category"
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="Product Description"
                placeholder="Product Description"
              />
            </label>
            <input type="submit" value="List Product" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddProduct;
