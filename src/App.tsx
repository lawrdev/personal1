import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Footer } from "./components/Footer";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4a0000",
      },
      secondary: {
        light: "#42a5f5",
        main: "#1976d2",
        dark: "#1565c0",
        contrastText: "#fff",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="max-w-6xl mx-auto pb-24">
          <Header />
          <Routes>
            <Route path="/" element={<Work />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
