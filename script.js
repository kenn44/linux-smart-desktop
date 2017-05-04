/**
 * Created by kenn on 02/05/17.
 */

function changeBackground(url) {
    document.body.style.backgroundImage = "url('" + url + "') ";
}


function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
        changeBackground(reader.result);
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}


function main() {
    var btnChangeBkg = document.getElementById("btnChangeBkg");
    var imgUpload = document.getElementById("imgUpload");

    btnChangeBkg.addEventListener("click", function () {
        imgUpload.click();
    });

    imgUpload.addEventListener("change", function () {
        previewFile();
    });
}

main();