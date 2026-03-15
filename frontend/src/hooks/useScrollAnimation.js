import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a boolean `isVisible`.
 * When the element enters the viewport, `isVisible` becomes true.
 * Attach the ref to any DOM element you want to animate on scroll.
 */
const useScrollAnimation = (threshold = 0.15) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // animate once
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isVisible];
};

export default useScrollAnimation;
