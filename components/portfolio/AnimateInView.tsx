'use client'

import React, { useEffect, useState, useRef } from 'react'

interface AnimateInViewProps {
  children: React.ReactNode
  className?: string
  activeClassName?: string
  inactiveClassName?: string
  delay?: number // animation delay in ms
  threshold?: number
}

export default function AnimateInView({
  children,
  className = '',
  activeClassName = 'opacity-100 translate-y-0',
  inactiveClassName = 'opacity-0 translate-y-4',
  delay = 0,
  threshold = 0.05,
}: AnimateInViewProps) {
  const [isInView, setIsInView] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if the user prefers reduced motion for accessibility
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    // Set initial value in a microtask to avoid synchronous setState warning
    if (mediaQuery.matches) {
      Promise.resolve().then(() => {
        setPrefersReducedMotion(true)
      })
    }

    const handleMotionPreference = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleMotionPreference)
    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreference)
    }
  }, [])

  useEffect(() => {
    // If the user prefers reduced motion, skip IntersectionObserver
    if (prefersReducedMotion) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      observer.disconnect()
    }
  }, [prefersReducedMotion, threshold])

  // If prefers-reduced-motion is true, we immediately use active styles
  const showActive = prefersReducedMotion || isInView

  const animationClasses = showActive ? activeClassName : inactiveClassName

  const transitionStyle: React.CSSProperties = prefersReducedMotion
    ? {}
    : {
        transitionDelay: showActive && delay > 0 ? `${delay}ms` : '0ms',
      }

  return (
    <div
      ref={ref}
      className={`${className} ${animationClasses}`}
      style={transitionStyle}
    >
      {children}
    </div>
  )
}
