/**
 * @returns A grainy effect background: needs the container to be in position relative
 */
export function GrainyBackgroundEffect() {
  return (
    <>
      <div
        className='absolute inset-0 -z-50 bg-[length:182px] opacity-70 dark:opacity-[0.18]'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E")`
        }}></div>
    </>
  );
}
