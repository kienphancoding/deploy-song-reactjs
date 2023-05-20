import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoute } from "./routes/Route";
import Layout from "./layout/Layout.jsx";
import "./App.scss";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) => {
            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;