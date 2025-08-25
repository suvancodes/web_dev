async function searchWord() {
  const word = document.getElementById("wordInput").value.trim();
  const resultBox = document.getElementById("resultBox");

  if (word === "") {
    resultBox.innerHTML = "<p>Please enter a word.</p>";
    return;
  }

  resultBox.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    console.log(response)
    if (!response.ok) throw new Error("Word not found");

    const data = await response.json();
    console.log(data);
    const meaning = data[0].meanings[0].definitions[0].definition;
    const example = data[0].meanings[0].definitions[0].example || "No example available.";
    const phonetic = data[0].phonetic || "Phonetic not available.";

    resultBox.innerHTML = `
      <h3>Word: <strong>${word}</strong></h3>
      <p><strong>Phonetic:</strong> ${phonetic}</p>
      <p><strong>Meaning:</strong> ${meaning}</p>
      <p><strong>Example:</strong> ${example}</p>
    `;
  } catch (error) {
    resultBox.innerHTML = `<p style="color: red;">❌ ${error.message}</p>`;
  }
}
