const quotesArray = [];
let randomNum = Math.floor(Math.random() * 500);

async function fetchQuote() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Append image:
      const image = document.createElement("img");
      image.src = "patrick.gif";
      const content = document.getElementById("content-block");
      content.appendChild(image);
      console.log(data);
      // Insert quote/author:
      document.getElementById("text").innerHTML = data[randomNum].text;
      document.getElementById("author").innerHTML = data[randomNum].author;
    });
}
