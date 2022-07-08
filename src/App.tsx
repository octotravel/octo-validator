import "./App.css";
import Home from "./views/home";
import { ProductContext } from "./context/productContext";
import { useProductsContextValue } from "./context/useProductContext";

function App() {
  const productContextValue = useProductsContextValue();
  return (
    <ProductContext.Provider value={productContextValue}>
      <div className="App min-h-screen  flex flex-wrap bg-primary relative">
        <div className="md:container md:mx-auto px-4">
          <h1 className="text-3xl tracking-wide mt-4 mb-4 font-bold capitalize text-text-base">
            ventrata validation
          </h1>
          <Home />
        </div>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
