"use client"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>KnowYourPlan Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style jsx global>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
