import koh from "../koh.js";
import App from "./src/pages/App.js";

/*
      ┌───────── App ──────────┐
      │           │            │
    Header       Todo        Footer
                  │
              ┌───┴───┐
        TodoInput   TodoList
                       │
                    TodoItem
*/

koh.createRoot(document.getElementById("root")).render(App);
