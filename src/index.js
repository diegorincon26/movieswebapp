import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Route,
  Routes,
  RouteCompoenentProps,
} from "react-router-dom";
import MovieDetail from "./components/movieDetail";
import App from "./App";
import "./index.css";
import "bulma/css/bulma.min.css";
import reportWebVitals from "./reportWebVitals";
<script
  defer
  src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
></script>;
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
