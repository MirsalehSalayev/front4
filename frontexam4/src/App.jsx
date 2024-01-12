import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import AddPage from "./Pages/AddPage";
import DetailPage from "./Pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/addpage" element={<AddPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
