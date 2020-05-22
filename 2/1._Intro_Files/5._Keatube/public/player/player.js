// show the full path
const fullUrl = window.location.href;
const videoId = fullUrl.substr(fullUrl.lastIndexOf("/") + 1);

// this is a way to test if jQuery is linked properly
// console.log($)

const player = `<video width="320" height="240" controls>
                    <source src="/${videoId}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`;

$("#player-wrapper").append(player);