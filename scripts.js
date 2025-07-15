function getDuration(d1, d2) {
    d1 = new Date(d1);
    d2 = new Date(d2);

    let seconds = Math.floor((d2 - d1) / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    let days = Math.floor(hours / 24);
    hours = hours % 24;

    let duration = "";
    if (days > 0) duration += days + "d ";
    if (hours > 0) duration += hours + "h ";
    if (minutes > 0) duration += minutes + "m ";
    if (seconds > 0) duration += seconds + "s ";
    return duration;
}

function encode(char) {
    const mod = "Z".charCodeAt(0) - "A".charCodeAt(0) + 1;
    const key = 13;
    index = char.toUpperCase().charCodeAt(0) - "A".charCodeAt(0);
    const newIndex = (index + key) % mod + "A".charCodeAt("0");
    newChar = String.fromCharCode(newIndex);
    return newChar
}

function decode(char) {
    return encode(char);
}

async function getKeys() {
    const response = await fetch("data/keys.json");
    const allControls = await response.json();
    return allControls[0].keys;
}

function getKey(keys, number) {
    return keys.find(cp => cp[0] === number)[1];
}

function getCourseID() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

async function getCourse(courseID) {
    const response = await fetch("data/courses.json");
    const allCourses = await response.json();
    return allCourses.find(course => course.id === courseID);
}

function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
}