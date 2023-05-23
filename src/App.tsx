import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conta from "./pages/Conta";
import { Layout } from "./components/Layout/Layout";
import { AppContextProvider } from "./components/AppContext/AppContext";
import {createLocalStorage} from "./services/storage";

function App() {

 createLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/conta/:id" element={<Conta />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
