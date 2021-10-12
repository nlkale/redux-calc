import ReactDOM from "react-dom";

//import Styles
import "./index.css";

//import components
import Calc from "./Components/Calc/Calc";

//import store
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return(
    <Provider store={store}>
      <Calc/>
    </Provider>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));