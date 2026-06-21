import appwriteService from "../appwrite/conf"
import { Link } from "react-router-dom"

function PostCard({$id, title, featuredImage, post}) {
    const actualId = $id || post?.$id;
    const actualTitle = title || post?.title;
    const actualFeaturedImage = featuredImage || post?.featuredImage;

    return(
        <Link to={`/post/${actualId}`}>
            <div className="w-full bg-gray-950 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    {actualFeaturedImage && (
                        <img src={appwriteService.getFilePreview(actualFeaturedImage)} alt={actualTitle} className="rounded-xl" />
                    )}
                </div>
                <h2 className="text-xl font-bold">{actualTitle}</h2>
            </div>
        </Link>
    )
}

export default PostCard