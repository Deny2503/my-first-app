import "./BlogList.css"

function BlogList({ posts }) {
    return (
        <div className="blog-container">
            {posts.map((post) => (
                <div key={post.id} className="blog-card">
                    <h2 className="blog-title">{post.title}</h2>
                    <p className="blog-date">🗓 {new Date(post.date).toLocaleDateString("uk-UA")}</p>
                    <p className="blog-content">{post.content}</p>
                    <div className="blog-tags">
                        {post.tags.map((tag, index) => (
                            <span key={index} className="blog-tag">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogList;