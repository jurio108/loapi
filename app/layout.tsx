import { Metadata } from "next"
import Navigation from "../components/navigation"

export const metadata :Metadata = {
  title: {
    template: '%s | loapi',
    default: 'loapi',
  },
  description: 'test loatark API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
