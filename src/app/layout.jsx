import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GlobalFaqHandler from '@/components/GlobalFaqHandler'

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
        <GlobalFaqHandler />
        <Header />
        {children}
        <Footer />
        
        {/* Scripts */}
        <script src="/assets/js/jquery-3.2.1.min.js"></script>
        <script src="/assets/js/jquery-migrate.js"></script>
        <script src="/assets/js/jquery-ui.js"></script>
        <script src="/assets/js/popper.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/owl.carousel.min.js"></script>
        <script src="/assets/js/magnific-popup.min.js"></script>
        <script src="/assets/js/slicknav.min.js"></script>
        <script src="/assets/js/isotope.pkgd.min.js"></script>
        <script src="/assets/js/clockpicker.min.js"></script>
        <script src="/assets/js/lightgallery-all.min.js"></script>
        <script src="/assets/js/custom.js"></script>
      </body>
    </html>
  )
}
