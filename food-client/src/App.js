// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Home/Header";
// import Sidebar from "./Home/Sidebar";
// import Footer from "./Home/Footer";
// import Home from "./Home/Home";

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Header />
//         <Sidebar />
//         <main>
//           <Routes>
//             <Route exact path="/" component={Home} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import ProductList from "./Components/Product/ProductList";

const App = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default App;
