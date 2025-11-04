'use client'
export default function DotGrid() {
  return (
    <div
      className="fixed top-0 left-0 z-0 h-screen w-full"
      style={{
        backgroundColor: 'white',
        backgroundImage: `radial-gradient(circle, purple 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }}
    />
  )
}