import AppMain from "./pages/app";
import configureStore from "./redux/reducers/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppMain />
    </Provider>
  );
}

export default App;
