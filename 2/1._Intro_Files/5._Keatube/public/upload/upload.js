let fileValid = false;

function validateForm() {
    const title = document.forms.videoupload.title.value;
    const description = document.forms.videoupload.description.value;
    const tags = document.forms.videoupload.tags.value;
    const catagory = document.forms.videoupload.catagory.value;

    console.log("123123123213", catagory)

    if (title < 8 || title > 64) {
        return false;
    }

    if (description > 2048) {
        return false;
    }

    return true && fileValid;
}

function handleFileUpload(files) {
    const file = files[0];

    const mimeTypeArray = file.type.split("/");

    if (mimeTypeArray[0] !== "video") {
        fileValid = false;
        return;
    }

    const fileSize = file.size;

    const twoGBFileLimit = 2147483648;

    if (fileSize > twoGBFileLimit) {
        fileValid = false;
        return;
    }
    fileValid = true;
}