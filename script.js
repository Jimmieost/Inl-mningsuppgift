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