import "./App.css";
import Home from './pages/Home'
import EditSelection from "./pages/EditSelection";
import Editor from './pages/Editor'
import theme from "./Theme";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/edit-selection" index element={<EditSelection />}></Route>
        <Route path="/editor" index element={<Editor />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
