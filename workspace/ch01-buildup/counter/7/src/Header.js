import koh from "../koh.js";

function Header() {
  return koh.createElement(
    "header",
    null,
    koh.createElement("h1", null, "Counter - 컴포넌트 모듈화"),
    koh.createElement(
      "p",
      null,
      "파일 경로: ",
      koh.createElement(
        "span",
        { id: "filepath" },
        `ch${document.URL.split("/ch")[1]}index.html`
      )
    )
  );
}

export default Header;
