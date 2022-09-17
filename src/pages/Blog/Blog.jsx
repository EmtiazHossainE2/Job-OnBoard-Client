import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { BiRightArrowCircle } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import auth from "../../Auth/Firebase/Firebase.init";
import Loading from "../../components/Loading/Loading";
import { fetchBlogs } from "../../Features/Blogs/BlogSlice";
import useAdmin from "../../hooks/useAdmin";
import Footer from "../../Shared/Footer/Footer";
import AddBlog from "./AddBlog";
import "./BlogCss/Blog.css";

const Blog = () => {
  // const [blogs, setBlogs] = useState([]);
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();

  const { isLoading, blogs, error } = useSelector((state) => state.blogs);
  if (isLoading) {
    <Loading />;
  }
  if (error) {
    toast.error(error.message);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  // const { refetch } = useQuery(["allBlogs"], () =>
  //   fetch(`${BASE_API}/allBlogs`, {
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setBlogs(data))
  // );

  const blogsDetails = (bdId) => {
    navigate(`${bdId}`);
  };
  return (
    <section className="container mx-auto">
      <div
        className="flex justify-between items-center border-b-2 border-cyan-600 
      h-20 mb-5"
      >
        <span></span>
        <h2 className="text-center text-2xl font-bold ">
          <span className="text-5xl font-serif text-primary">W</span>elcome To
          Our Blog
        </h2>
        <div>{admin && <AddBlog />}</div>
      </div>

      {blogs.length === 0 ? (
        <Loading />
      ) : (
        <div className="blogContainer">
          <div className="firstAndSecondContainer">
            <div className="firstBlog">
              {blogs.slice(0, 1).map((blog) => (
                <div
                  onClick={() => blogsDetails(blog._id)}
                  className="card card-compact bg-base-100 shadow-xl cursor-pointer"
                >
                  <span className="new absolute right-0 bg-indigo-900 px-4 py-1 text-white font-bold -top-1">
                    new
                  </span>
                  <figure>
                    <img className="max-w-full" src={blog.image} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <p className="text-[17px]">
                      {blog.about.slice(0, 150) + " ...."}
                    </p>
                    <button
                      onClick={() => blogsDetails(blog._id)}
                      className="go-btn flex justify-end text-xl text-blue-700"
                    >
                      <BiRightArrowCircle />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Second Blog Title and about */}
            <div className="secondBlog  px-3 ">
              {blogs.slice(0, 5).map((blog) => (
                <div
                  onClick={() => blogsDetails(blog._id)}
                  className="secondInfo py-2 cursor-pointer"
                >
                  <h2 className="uppercase font-bold mb-1 text-cyan-600">
                    {blog.title.slice(0, 30)}
                  </h2>
                  <p className="flex">
                    {blog.about.slice(0, 50) + "...."}{" "}
                    <button className="go-btn flex justify-end text-xl text-indigo-800">
                      <RiArrowRightSLine />
                    </button>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="thirdBlog px-3 lg:px-10 my-10 gap-8 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
            {blogs.slice(1, 20000).map((blog) => (
              <div
                onClick={() => blogsDetails(blog._id)}
                className="thirdInfo relative cursor-pointer"
              >
                <div className="shadow-xl rounded-md overflow-hidden h-full">
                  <figure>
                    <img className="max-w-full" src={blog.image} alt="Shoes" />
                  </figure>
                  <div className="p-3">
                    <h2 className="card-title text-sky-700">
                      {blog.title.slice(0, 50)}
                    </h2>
                    <p className="text-[17px]">
                      {blog.about.slice(0, 150) + "..."}
                    </p>
                    <button
                      onClick={() => blogsDetails(blog._id)}
                      className="go-btn absolute bottom-2  right-3 text-xl text-indigo-800"
                    >
                      <BiRightArrowCircle />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </section>
  );
};

export default Blog;
