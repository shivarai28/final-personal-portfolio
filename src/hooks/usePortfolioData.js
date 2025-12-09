import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolioData.json';

export const usePortfolioData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate a small delay to show loading state
        const loadData = async () => {
            try {
                // Use the imported local data
                setData(portfolioData);
                setLoading(false);
            } catch (err) {
                console.error('Error loading portfolio data:', err);
                setError('Failed to load portfolio data');
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return { data, loading, error };
};
