import { useEffect, useRef, useState } from 'react'

/**
 * Fades its children in (opacity 0 -> 100) with a subtle upward slide
 * as they scroll into view. Uses IntersectionObserver so it's cheap
 * and doesn't run on every scroll frame.
 *
 * Props:
 *  - delay: ms to stagger the reveal (useful for grids/lists)
 *  - once:  when true (default) the element stays visible after revealing
 *  - className: extra classes to merge onto the wrapper
 */
function Reveal({ children, delay = 0, once = true, className = '' }) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        // Respect users who prefer reduced motion.
        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches
        if (prefersReduced) {
            setVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    if (once) observer.unobserve(entry.target)
                } else if (!once) {
                    setVisible(false)
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [once])

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transform-gpu transition-all duration-700 ease-out ${
                visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
            } ${className}`}
        >
            {children}
        </div>
    )
}

export default Reveal
