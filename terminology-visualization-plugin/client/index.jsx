// import ReactDOM from "react-dom";
import {h,render} from 'preact';
import { store } from "./store";
import ModuleViewer from "./components/module-viewer";

let ws;
try {
  if (window.enableWebSocket) {
    ws = new WebSocket(`ws://${location.host}`);
  }
} catch (err) {
  console.warn(
    "Couldn't connect to websocket server so you'll have to reload page manually to see updates"
  );
}

window.addEventListener("load", () => {
  store.setData(window);

  render(<ModuleViewer/>, document.getElementById('app'));
});
