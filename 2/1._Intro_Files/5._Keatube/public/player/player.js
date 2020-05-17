// show the full path
const fullUrl = window.location.href;
const videoId = fullUrl.substr(fullUrl.lastIndexOf("/") + 1);

const player = `<video width="320" height="240" controls>
                    <source src="/Golden_Gate_Traffic.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`;
