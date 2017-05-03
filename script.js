/**
 * Created by kenn on 02/05/17.
 */

function changeBackground(url) {
    document.body.style.backgroundImage = "url('" + url + "') ";
}

/*function main()
{
    var inputFileToLoad = document.createElement("input");
    inputFileToLoad.type = "file";
    inputFileToLoad.id = "inputFileToLoad";
    document.body.appendChild(inputFileToLoad);

    var buttonLoadFile = document.createElement("button");
    buttonLoadFile.onclick = loadImageFileAsURL;
    buttonLoadFile.textContent = "Load Selected File";
    document.body.appendChild(buttonLoadFile);
}

function loadImageFileAsURL()
{
    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent)
            {
                var imageLoaded = document.createElement("img");
                imageLoaded.src = fileLoadedEvent.target.result;
                document.body.appendChild(imageLoaded);
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }
}

/*main();*/

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

/*document.getElementById('getval').addEventListener('change', readURL, true);
function readURL(){
    var file = document.getElementById("getval").files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('clock').style.backgroundImage = "url(" + reader.result + ")";
    }
    if(file){
        reader.readAsDataURL(file);
    }else{
    }
}*/

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