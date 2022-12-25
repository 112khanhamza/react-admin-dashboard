import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Report from "./scenes/reports"
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import ViewQuery from "./scenes/query/viewQuery";
import CreateReport from "./scenes/form/createReport";
import { useSelector } from "react-redux";
import LoginPage from "./scenes/login/Login";

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
              <Route path="/invoices" element={isAuth ? <Invoices /> : <Navigate to="/" />} />
              <Route path="/createReport" element={isAuth ? <CreateReport /> : <Navigate to="/" />} />
              <Route path="/bar" element={isAuth ? <Bar /> : <Navigate to="/" />} />
              <Route path="/pie" element={isAuth ? <Pie /> : <Navigate to="/" />} />
              <Route path="/line" element={isAuth ? <Line /> : <Navigate to="/" />} />
              <Route path="/faq" element={isAuth ? <FAQ /> : <Navigate to="/" />} />
              <Route path="/calendar" element={isAuth ? <Calendar /> : <Navigate to="/" />} />
              <Route path="/geography" element={isAuth ? <Geography /> : <Navigate to="/" />} />
              <Route path="/calendar" element={isAuth ? <Calendar /> : <Navigate to="/" />} />
              <Route path="/viewQuery" element={isAuth ? <ViewQuery /> : <Navigate to="/" />} /> */}

              <Route path="/" element={<Dashboard />} />
              <Route path="/reports" element={<Report />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/createReport" element={<CreateReport />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/viewQuery" element={<ViewQuery />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
