try {
    var request = new Request(
      "http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      { method: "HEAD", mode: "no-cors" }
    );
    fetch(request)
      .then(function (request) {
      })
      .catch(function (request) {
     let adbnwrap = document.querySelector(".adbn-wrap");
         adbnwrap.style.display = "flex";
      });
  } catch (err) {
  }
  let adbnrefresh = document.querySelector("#adbnrb");
  adbnrefresh.addEventListener("click", function () {
    location.reload();
  });
  
// back to top button //
  let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
}
// modal for cart
var modal = document.getElementById("myModalcart");

// Get the button that opens the modal
var btn = document.getElementById("myOnclick");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}