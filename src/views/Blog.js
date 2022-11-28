import useFetch from "../fetches/useFetch";
import ModalBlog from "./Modal";
import "./Blog.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const Blog = () => {
    const [dataBlog, setDataBlog] = useState([]);

    const { data: blogData, isLoading } = useFetch(
        `https://jsonplaceholder.typicode.com/posts`,
        false
    );
    useEffect(() => {
        if (blogData && blogData.length > 0) {
            let newBlogData = blogData.slice(0, 9);
            setDataBlog(newBlogData);
        }
    }, [blogData]);

    const handleAddNewBlog = async (newBlog) => {
        let res = await axios.post(
            "https://jsonplaceholder.typicode.com/posts",
            newBlog
        );
        if (res && res.data) {
            blogData.unshift(res.data);
            setDataBlog(blogData);
        }
    };

    return (
        <>
            <ModalBlog
                handleAddNewBlog={(newBlog) => handleAddNewBlog(newBlog)}
            />

            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <div className="blog-container">
                    {dataBlog &&
                        dataBlog.length > 0 &&
                        dataBlog.map((item, index) => {
                            return (
                                <div className="blog-item" key={item.id}>
                                    <h1>{`${index + 1} - ${item.title}`}</h1>
                                    <p>{item.body}</p>
                                    <div className="div-btn">
                                        <button type="button">
                                            <Link to={`/blog/${item.id}`}>
                                                View details
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            )}
        </>
    );
};
export default Blog;
