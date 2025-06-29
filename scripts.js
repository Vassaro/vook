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