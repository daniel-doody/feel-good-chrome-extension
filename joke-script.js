async function fetchJoke() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8d871420d1msh809c11ce1d72750p18151cjsn4e291655d1af",
      "X-RapidAPI-Host": "daddyjokes.p.rapidapi.com",
    },
  };

  const response = await fetch(
    "https://daddyjokes.p.rapidapi.com/random",
    options
  );
  const record = await response.json();
  // Append image:
  const image = document.createElement("img");
  image.src = "tyson.gif";
  const content = document.getElementById("content-block");
  content.appendChild(image);
  // Insert joke:
  document.getElementById("text").innerHTML = record.joke;
}
