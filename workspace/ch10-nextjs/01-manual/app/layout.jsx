import MainPage from "./page";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next.js App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

function App() {
  return (
    <RootLayout>
      <MainPage />
    </RootLayout>
  );
}