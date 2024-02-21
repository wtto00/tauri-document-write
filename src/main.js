const { invoke } = window.__TAURI__.tauri;

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });

  const testBtn = document.querySelector("#test-btn");
  testBtn.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.style.cssText = "position:fixed;left:100vw;";
    document.body.appendChild(iframe)

    const documentIframe = iframe.contentWindow.document
    documentIframe.open()
    documentIframe.write('hello')
    documentIframe.close()

    // document.write('hello')
  });
});
