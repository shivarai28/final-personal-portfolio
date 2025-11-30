import React, { useState } from 'react';
import { Mail, Phone, Calendar, MapPin, ChevronDown, Linkedin, Github, Instagram } from 'lucide-react';
import './Sidebar.css';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);
    const { data: portfolioData, loading, error } = usePortfolioData();

    // Icon mapping for contacts and socials
    const iconMap = {
        Mail: Mail,
        Phone: Phone,
        Calendar: Calendar,
        MapPin: MapPin,
        Linkedin: Linkedin,
        Github: Github,
        Instagram: Instagram
    };

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    if (loading) {
        return (
            <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
                <div className="sidebar-info">
                    <p style={{ textAlign: 'center', padding: '20px' }}>Loading...</p>
                </div>
            </aside>
        );
    }

    if (error || !portfolioData) {
        return (
            <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
                <div className="sidebar-info">
                    <p style={{ textAlign: 'center', padding: '20px', color: 'var(--text-secondary)' }}>
                        {error || 'Failed to load data'}
                    </p>
                </div>
            </aside>
        );
    }

    return (
        <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={portfolioData.sidebar.avatar} alt={portfolioData.sidebar.name} width="80" />
                </figure>

                <div className="info-content">
                    <h1 className="name" title={portfolioData.sidebar.name}>{portfolioData.sidebar.name}</h1>
                    <p className="title">{portfolioData.sidebar.role}</p>
                </div>

                <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
                    <span>Show Contacts</span>
                    <ChevronDown size={16} className={`chevron-icon ${isActive ? 'active' : ''}`} />
                </button>
            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">
                    {portfolioData.sidebar.contacts.map((contact, index) => {
                        const IconComponent = iconMap[contact.icon];
                        return (
                            <li className="contact-item" key={index}>
                                <div className="icon-box">
                                    <IconComponent size={18} color="#ffdb70" />
                                </div>
                                <div className="contact-info">
                                    <p className="contact-title">{contact.title}</p>
                                    {contact.link ? (
                                        <a href={contact.link} className="contact-link">{contact.value}</a>
                                    ) : contact.dateTime ? (
                                        <time dateTime={contact.dateTime}>{contact.value}</time>
                                    ) : (
                                        <address>{contact.value}</address>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    {portfolioData.sidebar.socials.map((social, index) => {
                        const IconComponent = iconMap[social.icon];
                        return (
                            <li className="social-item" key={index}>
                                <a href={social.link} className="social-link">
                                    <IconComponent size={18} />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
