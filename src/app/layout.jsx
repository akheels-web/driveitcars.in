import './globals.css'
import SiteLayoutWrapper from '@/components/SiteLayoutWrapper'

export const metadata = {
  title: 'Book Self Drive Cars & Luxury Car Rentals in Hyderabad | DriveIt',
  description: 'Planning your next drive? Explore self drive cars, monthly rentals and luxury cars in Hyderabad with DriveIt.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon/favicon-32x32.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/jquery.datepicker.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/lightgallery.min.css" />
        <link rel="stylesheet" href="/assets/css/jquery-clockpicker.min.css" />
        <link rel="stylesheet" href="/assets/css/slicknav.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body>
        <SiteLayoutWrapper>
          {children}
        </SiteLayoutWrapper>
      </body>
    </html>
  )
}
