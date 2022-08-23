import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import Carousel from "react-elastic-carousel";
 const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="bg-red-600">Create & inspire</h1>
      </div>
      <div className="pl-list">
        <Carousel
          className="shadow-lg w-full h-full "
          itemsToShow={2}
          focusOnSelect={true}
       
         >
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductList;
