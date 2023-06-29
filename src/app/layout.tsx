import { ReactNode } from 'react'
import './globalStyles.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en" suppressHydrationWarning={true}>
        <head>
          <title>Teste Leadster</title>
          <link rel="icon" href="/icon.png" sizes="any" />
        </head>
        <body>
          {children}
        </body>
      </html>
  )
}
