import { screens } from '../content/site.js'

// A single app-screen frame. Shows the image once `src` is set, otherwise a
// clean labelled placeholder ready for a screenshot.
function Screen({ item }) {
  return (
    <div className="screen">
      {/* Labelled placeholder sits underneath; the image covers it once loaded,
          and reveals it again if the file is missing (onError). */}
      <div className="screen__ph">
        <span>{item.label}</span>
      </div>
      {item.src ? (
        // Eager loading (no loading="lazy"): the columns scroll via transform,
        // so lazy-load never fires for frames whose layout box is below the fold.
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

// One vertical column. The frames are duplicated so the scroll loops seamlessly
// (translateY(-50%) lands exactly on the second copy).
function Column({ items, dir }) {
  const Group = () => (
    <div className="screens__group">
      {items.map((it, i) => (
        <Screen key={i} item={it} />
      ))}
    </div>
  )
  return (
    <div className={`screens__col screens__col--${dir}`}>
      <Group />
      <Group />
    </div>
  )
}

// Hero showcase — two columns of app screens drifting in opposite directions.
// Decorative, so marked aria-hidden.
export default function ScreenShowcase() {
  return (
    <div className="screens" aria-hidden="true" role="presentation">
      <Column items={screens.columnA} dir="a" />
      <Column items={screens.columnB} dir="b" />
      <Column items={screens.columnC} dir="c" />
    </div>
  )
}
