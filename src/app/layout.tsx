import { ReactNode } from 'react'
import './globalStyles.css'

export const metadata = {
  title: 'Teste Leadster'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en" suppressHydrationWarning={true}>
        <head />
        <body>
          {children}
        </body>
      </html>
  )
}
