import { useParams, useHistory } from "react-router-dom";
import useFetch from "../fetches/useFetch";

const BlogDetail = () => {
    const { id } = useParams();
    let history = useHistory();
    const handleGoBack = () => {
        history.push(`/blog`);
    };
    const { data: blogData, isLoading } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        false
    );
    //check empty object
    const isEmptyObj = Object.keys(blogData).length === 0 ? true : false;
    return (
        <>
            <div>
                <span onClick={() => handleGoBack()}>back</span>
            </div>
            <h1>This is detail blog {id}</h1>
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <div>
                    {!isEmptyObj && (
                        <>
                            <h1>{blogData.title}</h1>
                            <p>{blogData.body}</p>
                        </>
                    )}
                </div>
            )}
        </>
    );
};
export default BlogDetail;
