import { useParams } from "react-router-dom";

const EditPage = () => {
    const {id} = useParams();
    return (
        <div>Edit Page</div>
    );
}

export default EditPage;