import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Report from "./scenes/reports"
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import ViewQuery from "./scenes/query/viewQuery";
import CreateReport from "./scenes/form/createReport";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {/* <Route path="/" element={<LoginPage />} /> */}
              {/* <Route path="/home" element={isAuth ? <Dashboard /> : <Navigate to="/" />} />
              <Route path="/reports" element={isAuth ? <Report /> : <Navigate to="/" />} />
              <Route path="/contacts" element={isAuth ? <Contacts /> : <Navigate to="/" />} />
              <Route path="/invoices" element={isAuth ? <Invoices /> : <Navigate to="/" />} /> */}

              <Route path="/" element={<Dashboard />} />
              <Route path="/reports" element={<Report />} />
              <Route path="/createReport" element={<CreateReport />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/viewQuery" element={<ViewQuery />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
