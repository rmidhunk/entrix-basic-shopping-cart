import { Provider } from "react-redux";
import store from "./redux/store";
import ShoppingCart from "./components/ShoppingCart";
import "./styles/ShoppingCart.scss";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  );
}

export default App;
