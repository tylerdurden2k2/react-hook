import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import CreateBlog from "./CreateBlog";

const ModalBlog = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { handleAddNewBlog } = props;
    const handleSubmitBlog = (newBlog) => {
        handleAddNewBlog(newBlog);
    };
    return (
        <>
            <Button variant="primary" className="my-3" onClick={handleShow}>
                Add new Blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateBlog
                        handleSubmitBlog={(newBlog) =>
                            handleSubmitBlog(newBlog)
                        }
                    />
                </Modal.Body>
            </Modal>
        </>
    );
};
export default ModalBlog;
