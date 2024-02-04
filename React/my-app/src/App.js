// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Testimonials from "./pages/Testimonials";
// import Products from "./pages/Products";
// import Navbar from "./components/Navbar";
import List from "./components/List";
import Login from "./components/Login";
function App() {
  // const [movies, setMovies] = useState([]);
  // const getMovies = () => {
  //   import("./data").then((module) => {
  //     console.log(module.moviesData);
  //     setMovies(module.moviesData);
  //   });
  // };
  // return (
  //   <div>
  //     <h1>Hello</h1>
  //     <p>{movies.length > 0 ? JSON.stringify(movies) : " "}</p>
  //     <button onClick={getMovies}>Show Movies</button>
  //   </div>
  // );

  // const Home = lazy(() => import("./pages/Home"));
  // const About = lazy(() => import("./pages/About"));
  // const Testimonials = lazy(() => import("./pages/Testimonials"));
  // const Products = lazy(() => import("./pages/Products"));
  // return (
  //   <Suspense fallback={<h1>loading.....</h1>}>
  //     <BrowserRouter>
  //       <Navbar />
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/testimonials" element={<Testimonials />} />
  //         <Route path="/products" element={<Products />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </Suspense>
  // );

  return (
    // <div>
    //   <List />;<a href="/">Learn React</a>
    //   <p>Hello</p>
    //   <img
    //     title="Scenery"
    //     alt="nature"
    //     src="https://https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnature-landscape&psig=AOvVaw2eJdQYu6u7CZOkJCjvk29r&ust=1706957550757000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMi5y8e-jIQDFQAAAAAdAAAAABAE"
    //   />
    //   <img
    //     title="flowers"
    //     alt="nature"
    //     src="https://https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnature-landscape&psig=AOvVaw2eJdQYu6u7CZOkJCjvk29r&ust=1706957550757000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMi5y8e-jIQDFQAAAAAdAAAAABAE"
    //   />
    // </div>

    <div className="App">
      {/* <input
        value="Adam123"
        name="userName"
        id="userID"
        type="text"
        placeholder="Enter UserName"
      />
      <img
        title="Scenery"
        alt="nature"
        src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"
      />
      <img
        title="Flowers"
        alt="flowers"
        src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"
      /> */}
      <Login />
    </div>
  );
}

export default App;

//babel - it is a transpiler, it will convert into browser readable code
