async function fetchJoke() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "82c7901b7amshc6e653973bf9c11p110a52jsn3e0f4770fd53",
      "X-RapidAPI-Host": "daddyjokes.p.rapidapi.com",
    },
  };

  const response = await fetch(
    "https://daddyjokes.p.rapidapi.com/random",
    options
  );
  const record = await response.json();
  console.log(record);
  // Remove image:
  if (document.getElementById("patrick"))
    document.getElementById("patrick").remove();
  if (document.getElementById("tyson"))
    document.getElementById("tyson").remove();
  // Append image:
  const image = document.createElement("img");
  image.id = "tyson";
  image.src = "tyson.gif";
  const content = document.getElementById("content-block");
  content.appendChild(image);
  // Insert joke:
  document.getElementById("text").innerHTML = record.joke;
  document.getElementById("author").innerHTML = "";
}
document.getElementById("jokeButton").addEventListener("click", fetchJoke);
