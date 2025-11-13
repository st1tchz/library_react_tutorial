import "./index.css";
import Nav from "./components/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
                  {/* <Route path="/Books" element={() => <Books books=
                  {books} />} />*/}
          {/*<Route path="/books/:id" element={<BookInfo books={books}
          addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" element={<Cart books={books} cart={cart}
          changeQuantity={changeQuantity} />} />*/}

        </Routes>
        <Footer />
      </div>
    </Router>
        
  );
}

export default App;
