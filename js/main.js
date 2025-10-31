/*Navbar*/
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
  });

  /*Footer*/
fetch('footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer-placeholder').innerHTML = data;
});

function open_link(e) {
 e.preventDefault();
    const url = e.currentTarget.getAttribute("data-link");
    if (url) {
      window.open(url, "_blank");
    }
}
