import { useState, useEffect } from 'react';

// Use environment variable, fallback to Gist URL if not set
const GIST_URL = import.meta.env.VITE_GIST_URL || 'https://gist.githubusercontent.com/shivarai28/f2934d326c926cb1b88eab654c800d64/raw/c50d86ddb4e4011f6dc302dc258e140e94b72bd8/portfolioData.json';
const CACHE_KEY = 'portfolioData';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const usePortfolioData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Debug: Log the Gist URL being used
                console.log('🔍 GIST_URL:', GIST_URL);
                console.log('🔍 Environment:', import.meta.env.MODE);
                
                // Check if using local fallback
                if (GIST_URL === 'LOCAL') {
                    console.log('📁 Using local portfolioData.json');
                    const localData = await import('../data/portfolioData.json');
                    setData(localData.default);
                    setLoading(false);
                    return;
                }

                console.log('🌐 Fetching from Gist:', GIST_URL);

                // Check cache first
                const cached = localStorage.getItem(CACHE_KEY);
                if (cached) {
                    const { data: cachedData, timestamp } = JSON.parse(cached);
                    const age = Date.now() - timestamp;
                    
                    // Use cache if less than 5 minutes old
                    if (age < CACHE_DURATION) {
                        setData(cachedData);
                        setLoading(false);
                        return;
                    }
                }

                // Fetch from Gist
                const response = await fetch(GIST_URL);
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status}`);
                }

                const gistData = await response.json();
                
                // GitHub Gist API returns the file content in a specific structure
                // If it's a raw Gist URL, the response is the JSON directly
                // If it's the API URL, we need to extract the content
                let portfolioData;
                if (gistData.files) {
                    // API URL format
                    const fileName = Object.keys(gistData.files)[0];
                    portfolioData = JSON.parse(gistData.files[fileName].content);
                } else {
                    // Raw URL format
                    portfolioData = gistData;
                }

                // Cache the data
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    data: portfolioData,
                    timestamp: Date.now()
                }));

                setData(portfolioData);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching portfolio data:', err);
                
                // Try to use cached data as fallback
                const cached = localStorage.getItem(CACHE_KEY);
                if (cached) {
                    const { data: cachedData } = JSON.parse(cached);
                    setData(cachedData);
                    setError('Using cached data');
                } else {
                    // Last resort: use local file
                    try {
                        const localData = await import('../data/portfolioData.json');
                        setData(localData.default);
                        setError('Using local fallback data');
                    } catch (localErr) {
                        setError('Failed to load portfolio data');
                    }
                }
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};
