import React from 'react';
import { BookOpen, Download } from 'lucide-react';
import './Resume.css';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Resume = () => {
    const { data: portfolioData, loading, error } = usePortfolioData();

    if (loading) {
        return (
            <article className="resume active">
                <header>
                    <h2 className="h2 article-title">Resume</h2>
                </header>
                <p style={{ textAlign: 'center', padding: '40px' }}>Loading...</p>
            </article>
        );
    }

    if (error || !portfolioData) {
        return (
            <article className="resume active">
                <header>
                    <h2 className="h2 article-title">Resume</h2>
                </header>
                <p style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                    {error || 'Failed to load data'}
                </p>
            </article>
        );
    }

    return (
        <article className="resume active">
            <header className="resume-header">
                <h2 className="h2 article-title">Resume</h2>
                <a 
                    href="/resume.pdf" 
                    download="Shiva_Rai_Resume.pdf"
                    className="download-resume-btn"
                >
                    <Download size={18} />
                    <span>Download Resume</span>
                </a>
            </header>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <BookOpen size={20} color="#ffdb70" />
                    </div>
                    <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list">
                    {portfolioData.resume.education.map((item, index) => (
                        <li className="timeline-item" key={index}>
                            <h4 className="h4 timeline-item-title">{item.title}</h4>
                            <span>{item.date}</span>
                            <p className="timeline-text">{item.description}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <BookOpen size={20} color="#ffdb70" />
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>

                <ol className="timeline-list">
                    {portfolioData.resume.experience.map((item, index) => (
                        <li className="timeline-item" key={index}>
                            <h4 className="h4 timeline-item-title">{item.title}</h4>
                            <span>{item.date}</span>
                            <p className="timeline-text">{item.description}</p>
                        </li>
                    ))}
                </ol>
            </section>
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <BookOpen size={20} color="#ffdb70" />
                    </div>
                    <h3 className="h3">Skills</h3>
                </div>

                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Languages</h4>
                        <p className="timeline-text">
                            {portfolioData.resume.skillsText}
                        </p>
                    </li>
                </ol>
            </section>


        </article>
    );
};

export default Resume;
