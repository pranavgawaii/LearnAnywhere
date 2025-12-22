import React, { useEffect } from 'react';

// Since we are not using React Router, this component might need to listen to props
// But properly, App.tsx handles page state.
// If we were using react-router-dom, we would use useLocation.
// Given the current architecture (state-based routing), 
// we already have window.scrollTo in App.tsx handleCourseAccess.
// So this component acts as a declarative way to Ensure scroll to top if mounted or updated significantly.

// Actually, in the current App.tsx, `window.scrollTo(0,0)` is called manually in handlers.
// A better approach for "ScrollToTop" in this manual routing setup is to have a component that watches the `currentPage` prop.

interface ScrollToTopProps {
    currentPage: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ currentPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return null;
};

export default ScrollToTop;
