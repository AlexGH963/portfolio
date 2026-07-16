import { bottomScreens } from '../content/site.js'

// A horizontal carousel of app-screen frames that scrolls smoothly and loops
// seamlessly. The screens are duplicated so the track can translate a full set
// (-50%) and snap back invisibly. Pure CSS animation — pauses on hover and
// honours prefers-reduced-motion. (Same marquee used in the bottom ribbon.)
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

export default function ProjectStack() {
  const Group = () => (
    <div className="cards-group cards-group--screens">
      {bottomScreens.map((it, i) => (
        <ScreenFrame key={i} item={it} />
      ))}
    </div>
  )
  return (
    <div className="cards-marquee" aria-hidden="true" role="presentation">
      <div className="cards-track">
        <Group />
        <Group />
      </div>
    </div>
  )
}
