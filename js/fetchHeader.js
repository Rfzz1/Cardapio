
fetch('header.php')
.then(response => response.text())
.then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
});