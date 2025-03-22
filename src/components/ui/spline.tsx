'use client'

import { Suspense, lazy, useEffect } from 'react'
import { initResizeObserverPolyfill } from '@/lib/resize-observer-polyfill'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  // Initialize ResizeObserver polyfill on client
  useEffect(() => {
    initResizeObserverPolyfill()
  }, [])

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
} 