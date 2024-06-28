import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import OrderManagement from "./pages/OrderManagement.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/order-management" element={<OrderManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
