import { useParams } from "react-router-dom";
import BlogForm
    from "../components/BlogForm";
const EditPage = () => {
    const { id } = useParams();
    return (
        <div>
            <BlogForm
                editing={true} />
        </div>
    );
}

export default EditPage;