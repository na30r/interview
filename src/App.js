import "./App.css";

import Router from "./router";

function App() {
  return (
    <div>
      <div>
        <a href="/" style={{ margin: 8 }}>
          home
        </a>
        <a href="/contact-us" style={{ margin: 8 }}>
          contact us
        </a>
      </div>

      <div style={{ margin: 8 }}>
        <Router />
      </div>
    </div>
  );
}

export default App;
