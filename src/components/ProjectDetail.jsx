import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: portfolioData, loading, error } = usePortfolioData();

    if (loading) {
        return (
            <article className="project-detail active">
                <div className="detail-header">
                    <button className="back-button" onClick={() => navigate('/projects')}>
                        <ArrowLeft size={20} />
                        <span>Back to Projects</span>
                    </button>
                </div>
                <p style={{ textAlign: 'center', padding: '40px' }}>Loading...</p>
            </article>
        );
    }

    if (error || !portfolioData) {
        return (
            <article className="project-detail active">
                <div className="detail-header">
                    <button className="back-button" onClick={() => navigate('/projects')}>
                        <ArrowLeft size={20} />
                        <span>Back to Projects</span>
                    </button>
                </div>
                <p style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                    {error || 'Failed to load project'}
                </p>
            </article>
        );
    }

    const project = portfolioData.portfolio.projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <article className="project-detail active">
                <div className="detail-header">
                    <button className="back-button" onClick={() => navigate('/projects')}>
                        <ArrowLeft size={20} />
                        <span>Back to Projects</span>
                    </button>
                </div>
                <p style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                    Project not found
                </p>
            </article>
        );
    }

    return (
        <article className="project-detail active">
            <div className="detail-header">
                <button className="back-button" onClick={() => navigate('/projects')}>
                    <ArrowLeft size={20} />
                    <span>Back to Projects</span>
                </button>
            </div>

            <div className="project-detail-content">
                <div className="project-hero">
                    <img src={project.image} alt={project.title} className="project-hero-image" />
                    <div className="project-hero-overlay">
                        <span className="project-category-badge">
                            <Tag size={14} />
                            {project.category}
                        </span>
                    </div>
                </div>

                <div className="project-info">
                    <h1 className="project-detail-title">{project.title}</h1>
                    
                    <div className="project-meta">
                        {project.date && (
                            <div className="meta-item">
                                <Calendar size={16} />
                                <span>{project.date}</span>
                            </div>
                        )}
                        <div className="meta-item">
                            <Tag size={16} />
                            <span>{project.category}</span>
                        </div>
                    </div>

                    <div className="project-description">
                        <h2 className="section-title">About This Project</h2>
                        <p>{project.description || 'A detailed description of this project will be available soon.'}</p>
                    </div>

                    {project.technologies && project.technologies.length > 0 && (
                        <div className="project-technologies">
                            <h2 className="section-title">Technologies Used</h2>
                            <div className="tech-tags">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {project.features && project.features.length > 0 && (
                        <div className="project-features">
                            <h2 className="section-title">Key Features</h2>
                            <ul className="features-list">
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="project-links">
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link primary">
                                <ExternalLink size={18} />
                                <span>View Live Demo</span>
                            </a>
                        )}
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                                <Github size={18} />
                                <span>View on GitHub</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProjectDetail;
