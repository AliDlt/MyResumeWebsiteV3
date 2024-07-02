document.addEventListener("DOMContentLoaded", function () {
  var myDivs = document.getElementsByClassName("my-popup");
  for (var i = 0; i < myDivs.length; i++) {
    myDivs[i].addEventListener("click", function (e) {
      showPopup(e);
    });
  }

  function showPopup(event) {
    // Get the clicked div
    var clickedDiv = event.currentTarget;

    // Traverse the DOM hierarchy to find h3 and p elements
    var h3Content = clickedDiv.querySelector(".card-text h3").innerText;
    var pContent = clickedDiv.querySelector(".card-text p").innerText;
    var singleImage = clickedDiv.querySelector(".card-image img").src;

    var content = clickedDiv.querySelector(".card-content");
    content === null
      ? (content = `<img class="singleImage" src="${singleImage}">\n${pContent}`)
      : (content.style.display = "block");
    const myPopup = new Popup({
      id: "my-popup",
      title: h3Content,
      content: content,
    });

    // Show the popup
    myPopup.show();
  }
});
