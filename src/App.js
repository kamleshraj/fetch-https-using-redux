import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "./Products";
import { getAllProducts } from "./Redux/actions/productAction";

export default function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="App">
      <h3>Fetching API data using Redux</h3>
      {/* {JSON.stringify(data)} */}
      <Products />
    </div>
  );
}
