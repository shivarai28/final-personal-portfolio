import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Clock } from 'lucide-react';
import './BlogDetail.css';

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Sample blog posts data - you can move this to a separate data file or fetch from API
    const posts = [
        {
            id: 1,
            title: 'Design conferences in 2022',
            category: 'Design',
            date: 'Feb 23, 2022',
            readTime: '5 min read',
            description: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
            image: 'https://picsum.photos/id/10/800/600',
            content: `
                <p>Design conferences are essential gatherings for creative professionals to learn, network, and get inspired. In 2022, we saw a resurgence of in-person events alongside virtual conferences that became popular during the pandemic.</p>
                
                <h2>Why Attend Design Conferences?</h2>
                <p>Attending design conferences offers numerous benefits including networking opportunities, learning from industry leaders, discovering new tools and techniques, and gaining fresh perspectives on design challenges.</p>
                
                <h2>Top Conferences of 2022</h2>
                <p>Some of the most notable design conferences included Adobe MAX, AIGA Design Conference, Awwwards Conference, and Config by Figma. Each offered unique insights into different aspects of design.</p>
                
                <h2>Key Takeaways</h2>
                <p>The main themes across conferences included accessibility, sustainable design, AI in design workflows, and the future of remote collaboration tools.</p>
            `,
            tags: ['Design', 'Conference', 'Networking', '2022']
        },
        {
            id: 2,
            title: 'Best fonts every designer',
            category: 'Design',
            date: 'Feb 23, 2022',
            readTime: '4 min read',
            description: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
            image: 'https://picsum.photos/id/11/800/600',
            content: `
                <p>Typography is one of the most critical elements in design. Choosing the right font can make or break your design project. Here's a comprehensive guide to the best fonts every designer should know.</p>
                
                <h2>Serif Fonts</h2>
                <p>Classic serif fonts like Garamond, Georgia, and Times New Roman convey tradition and reliability. They're perfect for editorial design and formal documents.</p>
                
                <h2>Sans-Serif Fonts</h2>
                <p>Modern sans-serif fonts like Helvetica, Inter, and Roboto offer clean, minimalist aesthetics ideal for digital interfaces and contemporary branding.</p>
                
                <h2>Display Fonts</h2>
                <p>For headlines and attention-grabbing elements, display fonts add personality and impact to your designs.</p>
            `,
            tags: ['Typography', 'Fonts', 'Design', 'Resources']
        },
        {
            id: 3,
            title: 'Design digest #80',
            category: 'Design',
            date: 'Feb 23, 2022',
            readTime: '6 min read',
            description: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
            image: 'https://picsum.photos/id/12/800/600',
            content: `
                <p>Welcome to Design Digest #80! This week we're covering the latest trends, tools, and inspiration from the design world.</p>
                
                <h2>Trending This Week</h2>
                <p>Glassmorphism continues to dominate UI design, with more designers experimenting with frosted glass effects and layered transparency.</p>
                
                <h2>New Tools</h2>
                <p>Several new design tools launched this week, including AI-powered color palette generators and collaborative prototyping platforms.</p>
                
                <h2>Inspiration Gallery</h2>
                <p>Check out our curated collection of outstanding design work from talented creators around the world.</p>
            `,
            tags: ['Weekly', 'Digest', 'Trends', 'Inspiration']
        },
        {
            id: 4,
            title: 'UI interactions of the week',
            category: 'Design',
            date: 'Feb 23, 2022',
            readTime: '3 min read',
            description: 'Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'https://picsum.photos/id/13/800/600',
            content: `
                <p>This week's roundup features some of the most creative and engaging UI interactions we've seen recently.</p>
                
                <h2>Micro-interactions</h2>
                <p>Small animations and transitions that provide feedback and enhance user experience are becoming increasingly sophisticated.</p>
                
                <h2>Loading States</h2>
                <p>Creative loading animations keep users engaged while content loads, turning wait time into a delightful experience.</p>
                
                <h2>Hover Effects</h2>
                <p>Innovative hover states add depth and interactivity to web interfaces, making them more engaging and intuitive.</p>
            `,
            tags: ['UI', 'Interactions', 'Animation', 'UX']
        },
        {
            id: 5,
            title: 'The forgotten art of spacing',
            category: 'Design',
            date: 'Feb 23, 2022',
            readTime: '7 min read',
            description: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://picsum.photos/id/14/800/600',
            content: `
                <p>Spacing is often overlooked, but it's one of the most powerful tools in a designer's arsenal. Proper spacing creates hierarchy, improves readability, and enhances overall aesthetics.</p>
                
                <h2>The 8-Point Grid System</h2>
                <p>Using an 8-point grid system helps maintain consistent spacing throughout your designs and makes collaboration with developers smoother.</p>
                
                <h2>Whitespace is Not Wasted Space</h2>
                <p>Generous whitespace gives designs room to breathe and helps guide the user's eye to important elements.</p>
                
                <h2>Practical Tips</h2>
                <p>Start with larger spacing values and reduce as needed. Consistency is key - establish a spacing scale and stick to it.</p>
            `,
            tags: ['Spacing', 'Layout', 'Typography', 'Best Practices']
        },
        {
            id: 6,
            title: 'Design digest #79',
            category: 'Design',
            date: 'Feb 23, 2022',
            readTime: '5 min read',
            description: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.',
            image: 'https://picsum.photos/id/15/800/600',
            content: `
                <p>Another week, another digest! Let's dive into the latest happenings in the design community.</p>
                
                <h2>Community Highlights</h2>
                <p>Amazing work from designers worldwide, showcasing creativity and innovation across various disciplines.</p>
                
                <h2>Learning Resources</h2>
                <p>New courses, tutorials, and articles to help you level up your design skills.</p>
                
                <h2>Industry News</h2>
                <p>Updates from major design tools and platforms, plus insights into where the industry is heading.</p>
            `,
            tags: ['Weekly', 'Digest', 'Community', 'Resources']
        }
    ];

    const post = posts.find(p => p.id === parseInt(id));

    if (!post) {
        return (
            <article className="blog-detail active">
                <div className="detail-header">
                    <button className="back-button" onClick={() => navigate('/blog')}>
                        <ArrowLeft size={20} />
                        <span>Back to Blog</span>
                    </button>
                </div>
                <p style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                    Blog post not found
                </p>
            </article>
        );
    }

    return (
        <article className="blog-detail active">
            <div className="detail-header">
                <button className="back-button" onClick={() => navigate('/blog')}>
                    <ArrowLeft size={20} />
                    <span>Back to Blog</span>
                </button>
            </div>

            <div className="blog-detail-content">
                <div className="blog-hero">
                    <img src={post.image} alt={post.title} className="blog-hero-image" />
                    <div className="blog-hero-overlay">
                        <span className="blog-category-badge">
                            <Tag size={14} />
                            {post.category}
                        </span>
                    </div>
                </div>

                <div className="blog-info">
                    <h1 className="blog-detail-title">{post.title}</h1>
                    
                    <div className="blog-meta-detail">
                        <div className="meta-item">
                            <Calendar size={16} />
                            <span>{post.date}</span>
                        </div>
                        <div className="meta-item">
                            <Clock size={16} />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                    {post.tags && post.tags.length > 0 && (
                        <div className="blog-tags">
                            <h3 className="tags-title">Tags</h3>
                            <div className="tags-list">
                                {post.tags.map((tag, index) => (
                                    <span key={index} className="tag-item">{tag}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
};

export default BlogDetail;
