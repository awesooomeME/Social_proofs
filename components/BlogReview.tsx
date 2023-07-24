import {BsFillStarFill} from "react-icons/bs";

type BlogReviewProps = {
    stars: number,
    blog: string,
    gap: number
}

const BlogReview = ({stars, blog, gap}: BlogReviewProps) => {
    return (
        <div className={`flex px-2 lg:px-5 py-2 bg-soft_pink/5 rounded-xl 
            flex-col lg:flex-row items-center lg:justify-start 
            gap-5 w-[400px] ml-${gap*5}`}>
            <div className="flex gap-2">
                {Array.from(Array(stars+1).keys()).map((val) => <BsFillStarFill key={val} className="text-yellow-500"/>)}
            </div>
            <h1 className="text-very_dark_magenta font-bold text-center lg:text-left">
                Rated {stars} Stars in {blog}
            </h1>
        </div>
    )
}

export default BlogReview;