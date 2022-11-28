import { useState } from "react";
import "./CreateBlog.scss";
const CreateBlog = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { handleSubmitBlog } = props;
    const handleSubmitForm = async () => {
        if (!title || !content) {
            alert("You need insert all of fields!");
            return;
        }
        let createBlog = {
            title: title,
            body: content,
            userId: 1,
        };
        handleSubmitBlog(createBlog);
        setTitle("");
        setContent("");
    };

    return (
        <div className="create-blog-container">
            <h1 className="title-create-blog">Create Blog Page</h1>
            <div className="form-create-blog">
                <div className="input-row">
                    <label htmlFor="titleInput">Title</label>
                    <input
                        type="text"
                        id="titleInput"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="input-row">
                    <label htmlFor="contentInput">Content</label>
                    <textarea
                        type="text"
                        id="contentInput"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="div-btn-add">
                    <button
                        className="add-submit"
                        type="button"
                        onClick={() => handleSubmitForm()}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};
export default CreateBlog;
