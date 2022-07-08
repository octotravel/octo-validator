import "./App.css";
import Home from "./views/home";
import { GlobalProvider,  } from "./context/globalState";


function App() {
  return (

    <div className="App min-h-screen  flex flex-wrap bg-primary relative">
      <GlobalProvider>
        <div className="md:container md:mx-auto px-4">
          <h1 className="text-3xl tracking-wide mt-4 mb-4 font-bold capitalize text-text-base">
            ventrata validation
          </h1>
          <Home />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
