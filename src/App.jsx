import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react';
import lazyLoad from './lazyLoad';
import Loading from './components/common/Loading';
import Navbar from './components/common/Navbar';

const Home = lazyLoad("./pages/home");
const Cart = lazyLoad("./pages/cart");
const About = lazyLoad("./pages/about");
const Login = lazyLoad("./pages/login");
const Signup = lazyLoad("./pages/signup");
const Wishlist = lazyLoad("./pages/wishlist");

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
