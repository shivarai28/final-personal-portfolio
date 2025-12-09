import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import './Portfolio.css';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const { data: portfolioData, loading, error } = usePortfolioData();

    if (loading) {
        return (
            <article className="portfolio active">
                <header>
                    <h2 className="h2 article-title">Portfolio</h2>
                </header>
                <p style={{ textAlign: 'center', padding: '40px' }}>Loading...</p>
            </article>
        );
    }

    if (error || !portfolioData) {
        return (
            <article className="portfolio active">
                <header>
                    <h2 className="h2 article-title">Portfolio</h2>
                </header>
                <p style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                    {error || 'Failed to load data'}
                </p>
            </article>
        );
    }

    const projects = portfolioData.portfolio.projects;
    const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);
    const categories = portfolioData.portfolio.categories;

    return (
        <article className="portfolio active">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">
                <ul className="filter-list">
                    {categories.map(category => (
                        <li key={category} className="filter-item">
                            <button
                                className={filter === category ? 'active' : ''}
                                onClick={() => setFilter(category)}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="filter-select-box">
                    <button className="filter-select" onClick={e => e.currentTarget.classList.toggle('active')}>
                        <div className="select-value">{filter}</div>
                        <div className="select-icon"><Eye size={14} /></div>
                    </button>
                    <ul className="select-list">
                        {categories.map(category => (
                            <li key={category} className="select-item">
                                <button onClick={() => setFilter(category)}>{category}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <ul className="project-list">
                    {filteredProjects.map(project => (
                        <ProjectItem key={project.id} project={project} />
                    ))}
                </ul>
            </section>
        </article>
    );
};

const ProjectItem = ({ project }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <li className="project-item active">
            <Link to={`/projects/${project.id}`}>
                <figure className="project-img" style={{ backgroundColor: 'var(--bg-card)' }}>
                    {/* Blank placeholder while loading; background color provides space */}
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        onLoad={() => setIsLoaded(true)}
                        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
                    />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
            </Link>
        </li>
    );
};

export default Portfolio;
