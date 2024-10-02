import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Translation

const CalendlyBadge = () => {
    const { t } = useTranslation();
    
    useEffect(() => {
        // Function to load script
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Script load error for ${src}`));
                document.head.append(script);
            });
        };

        // Function to load styles
        const loadStyles = (href) => {
            const link = document.createElement('link');
            link.href = href;
            link.type = 'text/css';
            link.rel = 'stylesheet';
            document.head.append(link);
        };

        // Load Calendly styles and scripts
        loadStyles("https://assets.calendly.com/assets/external/widget.css");
        loadScript("https://assets.calendly.com/assets/external/widget.js")
            .then(() => {
                // Initialize the Calendly widget after the script is successfully loaded
                // eslint-disable-next-line no-undef
                Calendly.initBadgeWidget({ 
                    url: 'https://calendly.com/berezvay-albert/30min', 
                    text: t('schedule button'), 
                    color: '#00ffff', 
                    textColor: '#000000', 
                    branding: undefined });
            })
            .catch(error => console.error('Failed to load Calendly script:', error));
    }, []);

    return null;  // This component does not render anything itself
};

export default CalendlyBadge;


