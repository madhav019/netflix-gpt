import { Provider as StoreProvider } from "react-redux";
import Body from "./Body";
import store from "./store";

function App() {
  return (
    <StoreProvider store={store}>
      <Body />
    </StoreProvider>
  );
}

export default App;
