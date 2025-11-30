import React from 'react';
import { Code, Database, Server, Cloud, Container, Network, FileCode } from 'lucide-react';
import './About.css';
import { usePortfolioData } from '../hooks/usePortfolioData';

const About = () => {
    const { data: portfolioData, loading, error } = usePortfolioData();

    // Icon mapping
    const iconMap = {
        Server: Server,
        Code: Code,
        Database: Database,
        Cloud: Cloud,
        Container: Container,
        Network: Network,
        FileCode: FileCode
    };

    if (loading) {
        return (
            <article className="about active">
                <header>
                    <h2 className="h2 article-title">About Me</h2>
                </header>
                <p style={{ textAlign: 'center', padding: '40px' }}>Loading...</p>
            </article>
        );
    }

    if (error || !portfolioData) {
        return (
            <article className="about active">
                <header>
                    <h2 className="h2 article-title">About Me</h2>
                </header>
                <p style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                    {error || 'Failed to load data'}
                </p>
            </article>
        );
    }

    // Map services with icons
    const services = portfolioData.about.services.map(service => ({
        ...service,
        icon: React.createElement(iconMap[service.icon], { size: 40, color: "#ffdb70" })
    }));

    // Map skills with icons
    const skills = portfolioData.about.skills.map(skill => ({
        ...skill,
        icon: React.createElement(iconMap[skill.icon], { size: 18, color: "#ffdb70" })
    }));

    return (
        <article className="about active">
            <header>
                <h2 className="h2 article-title">About Me</h2>
            </header>

            <section className="about-text">
                {portfolioData.about.intro.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </section>

            <section className="service">
                <h3 className="h3 service-title">What I Do</h3>

                <ul className="service-list">
                    {services.map((service, index) => (
                        <li className="service-item" key={index}>
                            <div className="service-icon-box">
                                {service.icon}
                            </div>
                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">{service.title}</h4>
                                <p className="service-item-text">{service.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Skills section styled like the clients carousel */}
            <section className="skills">
                <h3 className="h3 skills-title">Skills</h3>
                <ul className="skills-list">
                    {skills.map((skill, idx) => (
                        <li className="skill-item" key={idx}>
                            {skill.icon}
                            <span>{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default About;
