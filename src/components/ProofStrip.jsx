import { screens } from '../content/site.js'

// All the hero app screens, flattened into one ribbon.
const allScreens = [...screens.columnA, ...screens.columnB, ...screens.columnC]

// A single phone-screen frame (same treatment as the hero showcase).
function ScreenFrame({ item }) {
  return (
    <div className="screen">
      <div className="screen__ph">
        <span>{item.label}</span>
      </div>
      {item.src ? (
        <img
          src={item.src}
          alt={item.label}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      ) : null}
    </div>
  )
}

// Bottom ribbon: the app screens as a seamless auto-scrolling marquee.
// Duplicated for a seamless loop; pauses on hover; halts under
// prefers-reduced-motion.
export default function ProofStrip() {
  const Group = () => (
    <div className="cards-group cards-group--screens">
      {allScreens.map((it, i) => (
        <ScreenFrame key={i} item={it} />
      ))}
    </div>
  )
  return (
    <section className="overflow-hidden bg-paper py-10 text-ink sm:py-14">
      <div className="cards-marquee" aria-hidden="true" role="presentation">
        <div className="cards-track">
          <Group />
          <Group />
        </div>
      </div>
    </section>
  )
}
