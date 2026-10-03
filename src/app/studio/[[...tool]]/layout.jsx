export const metadata = {
  title: 'Sanity Studio',
  description: 'Manage content for DriveIt Cars',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
