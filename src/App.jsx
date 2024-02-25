import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react';
import lazyLoad from './lazyLoad';
import Loading from './components/common/Loading';
import Navbar from './components/common/Navbar';
import PrivateRoutes from './components/common/PrivateRoutes';

const Home = lazyLoad("./pages/home");
const Cart = lazyLoad("./pages/cart");
const About = lazyLoad("./pages/about");
const Login = lazyLoad("./pages/login");
const Signup = lazyLoad("./pages/signup");
const Wishlist = lazyLoad("./pages/wishlist");
const Profile = lazyLoad("./pages/profile");

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
