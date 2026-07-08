// Layout primitive enforcing consistent vertical rhythm + container width.
// `tone` swaps between the light (paper) and dark sections for contrast.
export default function Section({
  id,
  tone = 'light',
  className = '',
  children,
  ...rest
}) {
  const tones = {
    light: 'bg-paper text-ink',
    dark: 'bg-ink text-paper',
  }

  return (
    <section
      id={id}
      className={`${tones[tone]} px-6 py-24 sm:px-8 sm:py-32 lg:py-40 ${className}`}
      {...rest}
    >
      <div className="mx-auto w-full max-w-container">{children}</div>
    </section>
  )
}
