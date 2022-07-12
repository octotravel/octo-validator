import "./App.css";
import HomeView from "./views/home-view";
import {
  ProductContext,
  useProductsContextValue,
} from "./context/productContext";

function App() {
  const productContextValue = useProductsContextValue();
  return (
    <ProductContext.Provider value={productContextValue}>
      <HomeView />
    </ProductContext.Provider>
  );
}

export default App;
