function getLocation(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

function getUrlParameter(paramName, url) {
    url = decodeURIComponent((url && getLocation(url) || window.location).search.substring(1));
    var urlVars = url.split('&'),
        paramParts, i;

    paramName = paramName.toLowerCase();

    for (i = 0; i < urlVars.length; i++) {
        paramParts = urlVars[i].split('=');

        if (paramParts[0].toLowerCase() === paramName) {
            return paramParts[1] === undefined ? true : paramParts[1];
        }
    }
};

$(document).ready(function () {

    // Handle parse Url params

    var videoId = getUrlParameter("video-id") || '';
    var videpList = getUrlParameter("video-list") || '';

    // https://www.youtube-nocookie.com/watch?v=UOwl-BBAwnA&list=PLcetZ6gSk96_UR0qeay5Dh52SvAD-vmGH
    // https://www.youtube-nocookie.com/embed/aJOTlE1K90k?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG
    $('#video-id').val(videoId);
    $('#video-list').val(videpList);
    // $('iframe').attr("src", "https://www.youtube-nocookie.com/embed/" + videoId + "?enablejsapi=1");
    $('iframe').attr("src", "https://www.youtube-nocookie.com/embed/" + videoId + "?enablejsapi=1&list=" + videpList);
    //$('iframe').attr("src", "https://www.youtube-nocookie.com/watch?v=UOwl-BBAwnA&list=PLcetZ6gSk96_UR0qeay5Dh52SvAD-vmGH");
});

$('button').on('click', function () {

    // Handle view button click

    var videoId = $('#video-id').val();
    var videpList = null;

    // Check if the video-id is an URL
    // https://www.youtube.com/watch?v=neCmEbI2VWg
    if (videoId.indexOf('youtube.com') >= 0) {
        var link = videoId;

        videoId = getUrlParameter("v", link) || '';
        videpList = getUrlParameter("list", link) || '';

        $('#video-id').val(videoId);
        $('#video-list').val(videpList);
    }

    var videpList = $('#video-list').val();
    $('iframe').attr("src", "https://www.youtube-nocookie.com/embed/" + videoId + "?enablejsapi=1&list=" + videpList);
});
