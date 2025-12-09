import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: 'Design conferences in 2022',
            category: 'Design',
            date: 'Feb 23, 2022',
            description: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
            image: 'https://picsum.photos/id/10/800/600'
        },
        {
            id: 2,
            title: 'Best fonts every designer',
            category: 'Design',
            date: 'Feb 23, 2022',
            description: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
            image: 'https://picsum.photos/id/11/800/600'
        },
        {
            id: 3,
            title: 'Design digest #80',
            category: 'Design',
            date: 'Feb 23, 2022',
            description: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
            image: 'https://picsum.photos/id/12/800/600'
        },
        {
            id: 4,
            title: 'UI interactions of the week',
            category: 'Design',
            date: 'Feb 23, 2022',
            description: 'Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'https://picsum.photos/id/13/800/600'
        },
        {
            id: 5,
            title: 'The forgotten art of spacing',
            category: 'Design',
            date: 'Feb 23, 2022',
            description: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://picsum.photos/id/14/800/600'
        },
        {
            id: 6,
            title: 'Design digest #79',
            category: 'Design',
            date: 'Feb 23, 2022',
            description: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.',
            image: 'https://picsum.photos/id/15/800/600'
        }
    ];

    return (
        <article className="blog active">
            <header>
                <h2 className="h2 article-title">Blog</h2>
            </header>

            <div className="blog-posts">
                <ul className="blog-posts-list">
                    {posts.map(post => (
                        <li className="blog-post-item" key={post.id}>
                            <Link to={`/blog/${post.id}`}>
                                <figure className="blog-banner-box">
                                    <img src={post.image} alt={post.title} loading="lazy" />
                                </figure>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <p className="blog-category">{post.category}</p>
                                        <span className="dot"></span>
                                        <time dateTime="2022-02-23">{post.date}</time>
                                    </div>
                                    <h3 className="h3 blog-item-title">{post.title}</h3>
                                    <p className="blog-text">{post.description}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default Blog;
