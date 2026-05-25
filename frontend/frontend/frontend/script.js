async function compileApp() {

  const output =
    document.getElementById("output");

  const prompt =
    document.getElementById("prompt").value;

  output.textContent =
    "Compiling through pipeline...\n";

  try {

    const response = await fetch(
      "http://localhost:5001/compile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      }
    );

    const data = await response.json();

    const text =
      JSON.stringify(data, null, 2);

    output.textContent = "";

    let i = 0;

    const interval = setInterval(() => {

      output.textContent += text[i];

      i++;

      output.scrollTop =
        output.scrollHeight;

      if (i >= text.length) {
        clearInterval(interval);
      }

    }, 5);

  } catch (error) {

    output.textContent =
      "Backend server not running.";

  }
}

function loadExample() {

  document.getElementById("prompt").value =
    "Build a CRM with login contacts dashboard admin analytics and premium payments";

}
document
  .getElementById("themeToggle")
  .onclick = () => {

    document.body.classList.toggle("light");

};
function copyOutput() {

  const text =
    document.getElementById("output").textContent;

  navigator.clipboard.writeText(text);

  alert("Copied to clipboard!");

}