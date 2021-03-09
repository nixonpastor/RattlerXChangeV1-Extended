import Footer from "./Footer";
import "./AddProduct.css";
import "./Pages.css";

function AddProduct() {
  return (
    <div className="pageContent">
      <h2 className="addProductHeader">Add a Product</h2>
      <div className="mainAddProduct">
        <div className="addImageAddProduct">
          <button className="addProductImage">Add Image(s) +</button>
        </div>
        <div className="productLabels">
          <form className="productForm">
            <label className="productName">
              Product Name:
              <input
                type="text"
                name="Enter Product name"
                placeholder="Enter Product name"
                className="addProductInput"
              />
            </label >
            <label className="productCost">
              Cost:
              <input
                type="text"
                name="Enter Cost of the Product"
                placeholder="Enter Cost of the Product"
                className="addProductInput"
              />
            </label>
            <label className="productCondition">
              Product Condition :
              <input
                type="text"
                name="Enter Product Condition"
                placeholder="Enter Product Condition"
                className="addProductInput"
              />
            </label>
            <label className="productCategory">
              Category:
              <input
                type="text"
                name="Select Category"
                placeholder="Select Category"
                className="addProductInput"
              />
            </label>
            <label className="productDescription">
              Description:
              <input
                type="text"
                name="Product Description"
                placeholder="Product Description"
                className="addProductInput"
              />
            </label>
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AddProduct;
