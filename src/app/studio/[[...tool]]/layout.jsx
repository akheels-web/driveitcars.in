export const metadata = {
  title: 'Sanity Studio',
  description: 'Manage content for DriveIt Cars',
}

export default function StudioLayout({ children }) {
  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0, overflow: 'hidden' }}>
      {children}
    </div>
  )
}
