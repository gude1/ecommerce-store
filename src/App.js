import "./App.css";
import { IconButton } from "./components/ui/IconButton/IconButton";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="store-header">
        <h2 className="store-name">Nixmar & Swag </h2>
        <nav className="navtabs-ctn">
          <ul className="navtabs">
            <li>
              <IconButton name={"Home"} className="navtabs-btn" />
            </li>
            <li>
              <IconButton name={"search"} className="navtabs-btn" />
            </li>
            <li>
              <IconButton name={"shopping_cart"} className="navtabs-btn" />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
