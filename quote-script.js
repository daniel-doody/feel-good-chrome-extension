// let randomNum = Math.floor(Math.random() * 500);

async function fetchQuote() {
  let randomNum = Math.floor(Math.random() * 500);

  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Remove image:
      if (document.getElementById("patrick"))
        document.getElementById("patrick").remove();
      if (document.getElementById("tyson"))
        document.getElementById("tyson").remove();

      // Append image:
      const image = document.createElement("img");
      image.id = "patrick";
      image.src = "patrick.gif";
      const content = document.getElementById("content-block");
      content.appendChild(image);
      console.log(data);
      // Insert quote/author:
      document.getElementById("text").innerHTML = data[randomNum].text;
      document.getElementById("author").innerHTML = data[randomNum].author;
    });
}

document.getElementById("quoteButton").addEventListener("click", fetchQuote);
