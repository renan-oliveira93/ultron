import GetDrDoomData from "../../utils/getDrDoomData";
import { Post } from "@/types/Post";

export default async function MainCard() {
    const posts: Post[] | undefined = await GetDrDoomData('posts', 'GET');
    return (
        <>
            <section className="main-card">
                {posts && posts.map(post => (
                    <ul key={post.id}>
                        <li>{post.title}</li>
                        <li>{post.subtitle}</li>
                        <li>{post.description}</li>
                    </ul>
                ))}
            </section>
        </>
    )
}