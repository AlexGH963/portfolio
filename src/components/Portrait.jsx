import { useState } from 'react'

// Elegant portrait treatment: a clean frame, grayscale that warms to full
// color on hover. If /portrait.jpg is missing, falls back to a tasteful
// monogram block so the layout never breaks.
//
// Drop your black-and-white headshot at: /public/portrait.jpg
export default function Portrait({
  className = '',
  alt = 'Portrait',
  priority = false,
  fill = false,
}) {
  const [failed, setFailed] = useState(false)

  // In `fill` mode the image keeps a natural 4:5 ratio when stacked (mobile),
  // but stretches to its container's full height on desktop so it can line up
  // with an adjacent text column. `object-cover` keeps the photo undistorted.
  const ratio = fill ? 'aspect-[4/5] lg:aspect-auto lg:h-full' : 'aspect-[4/5]'

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-neutral-200 ${
        fill ? 'lg:h-full' : ''
      } ${className}`}
    >
      {failed ? (
        <div
          className={`flex items-center justify-center bg-neutral-900 ${ratio}`}
        >
          <span className="select-none font-sans text-6xl font-semibold tracking-tightest text-paper">
            AH
          </span>
        </div>
      ) : (
        <img
          src="/portrait.jpg"
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
          className={`w-full object-cover grayscale transition-all duration-700 ease-smooth will-change-transform group-hover:grayscale-0 motion-safe:group-hover:scale-[1.02] ${ratio}`}
        />
      )}
      {/* Subtle inner border to keep the frame crisp on any background. */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
    </div>
  )
}
