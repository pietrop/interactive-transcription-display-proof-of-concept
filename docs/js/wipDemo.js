/**
WIP - Demo
*/

// hypertranscript - Parsing to HTML HyperTranscript

function parseTranscript(transcript) {
    for (var i = 0; i < transcript.length; i++) {
        var tcin = transcript[i]['tc_in'];
        var tcout = transcript[i]['tc_out'];
        var word = transcript[i]['word'];
        var videoSrc = transcript[i]['src'];
        var span_tag = document.createElement("span");
        span_tag.setAttribute("tcin", tcin);
        span_tag.setAttribute("tcout", tcout);
        span_tag.setAttribute("transcriptID", i);
        span_tag.setAttribute("id", "not_read");
        span_tag.setAttribute("videoSrc", videoSrc);
        span_tag.className = "hyper";
        var word_text = document.createTextNode(word);
        span_tag.appendChild(word_text);
        var transcript_div = document.getElementById("transcript");
        transcript_div.appendChild(span_tag);

        /////////make words clickable
        span_tag.addEventListener("click", function () {

            video = document.getElementById("mainVideo");
            video.currentTime =parseFloat(this.getAttribute("tcin"));
           // alert(this.getAttribute("tcin")+" "+ video.currentTime);
            video.play();
        });
        /////////end of make words clickable
    }

}

parseTranscript(transcript);

//change color while playing
video.addEventListener("timeupdate", function (e) {
    ////hypertranscript - change color of words, Listen for timeupdate event
    var spans = document.getElementsByClassName("hyper");
    for (var k = 0; k < spans.length - 1; k++) {
        //console.log("loop");
        //console.log(spans[k]);
        //make cliccable

        if (parseInt(spans[k].getAttribute("tcin")) < parseInt(video.currentTime)) {
            spans[k].setAttribute("id", "read");
            //console.log("before");
        } else {
            spans[k].setAttribute("id", "not_read");
            // console.log("after");
        }
    } //end change color of words while playing
}, false);



//Search function

/* *
 * HyperTranscript Search function
 * Word accurate, highlights the line in yellow, and makes matched word bold.
 * It does so by switching CSS classes.
 * */

/////////////////////////// word accurate search///////////////////////////////////
    $("#search-criteria").keypress(function(){
        var txt = $('#search-criteria').val();
        console.log(txt);
        if (txt == ""){
            $( '.line' ).css( "background-color", "" );
            $( '.word' ).css( "background-color", "" );
            $( '.word' ).css( "font-weight", "" );
        }else {
            $( '.line' ).css( "background-color", "" );
            $( '.word' ).css( "background-color", "" );
            $( '.word' ).css( "font-weight", "" );
            $( '.line:contains("'+txt+'")' ).css( "background-color", "yellow" );
            $( '.word:contains("'+txt+'")' ).css( "font-weight", "bold" );
        }
    });
    $("#search-criteria").keyup(function(){
        var txt = $('#search-criteria').val();
        console.log(txt);
        if (txt === ""){
            $( '.hyper' ).css( "background-color", "" );
            $( '.hyper' ).css( "background-color", "" );
            $( '.hyper' ).css( "font-weight", "" );
        }else {
            $( '.hyper' ).css( "background-color", "" );
            $( '.hyper' ).css( "background-color", "" );
            $( '.hyper' ).css( "font-weight", "" );
            $( '.hyper:contains("'+txt+'")' ).css( "background-color", "yellow" );
            $( '.hyper:contains("'+txt+'")' ).css( "font-weight", "bold" );
        }
    });

/////////// word accurate search///////////////////////////////////
    $("#search-criteria").keypress(function(){
        var txt = $('#search-criteria').val();
        console.log(txt);
        if (txt == ""){
            $( '.hyper' ).css( "background-color", "" );
            $( '.hyper' ).css( "background-color", "" );
            $( '.hyper' ).css( "font-weight", "" );
        }else {
            $( '.hyper' ).css( "background-color", "" );
            $( '.hyper' ).css( "background-color", "" );
            $( '.hyper' ).css( "font-weight", "" );
            $( '.hyper:contains("'+txt+'")' ).css( "background-color", "yellow" );
            $( '.hyper:contains("'+txt+'")' ).css( "font-weight", "bold" );
        }
    });
//resets live search
    $("#search-criteria").keyup(function(){
        var txt = $('#search-criteria').val();
        console.log(txt);
        if (txt === ""){
            $( '.hyper' ).css( "background-color", "" );
            $( '.hyper' ).css( "background-color", "" );
            $( '.word' ).css( "font-weight", "" );
        }else {
            $( '.hyper' ).css( "background-color", "" );
            $( '.hyper' ).css( "background-color", "" );
            $( '.hyper' ).css( "font-weight", "" );
            $( '.hyper:contains("'+txt+'")' ).css( "background-color", "yellow" );
            $( '.hyper:contains("'+txt+'")' ).css( "font-weight", "bold" );
        }
    });
/////////////////////end  word accurate search////////////////////////////////


/* scroll text to video*/
/* scroll text to video*/

//event listener time update for video playhead. when video is playing do
video = document.getElementById("mainVideo");
video.ontimeupdate = function() {
    //gets current time from video
    var currentTimeInSeconds =  video.currentTime;
    //hilights text as video playes.
    // scroll to text to equivalent playhead position
    scrollText(currentTimeInSeconds);
};

//function to sync the text scroll in the transcription div with the playhead position.
function scrollText(currentTimeInSeconds){
//if we are not at the beginning of the video or the video as not started
    if (currentTimeInSeconds !== 0 ){
        //to grab the current span
        //NB the granularity at which video js gives you current time, would struggle to give you a much using decimal places.
        //get the floor of the current Time, eliminate decimal places, to make comparison easier with span m time attributes
        var currenTimeFloor = Math.floor(currentTimeInSeconds);
        //make an array of all the times attribute in the span tags
        var mSpanTimesArray = $("#transcript").find("span").map(function(){return $(this).attr("tcin");}).get();
        //for that array remove decimal places, to make an easier comparison with current time number,
        var mSpanTimesArrayFloor = $.map( mSpanTimesArray, function( a ) {
            return Math.floor(a);
        });

        //if currenTimeFloor in array of spans time floor
        if ($.inArray(currenTimeFloor, mSpanTimesArrayFloor) !== -1){
            //get spans time with decimal places using currenTimeFloor inArray of spans time floor ->returns index
            var index = $.inArray(currenTimeFloor, mSpanTimesArrayFloor);
            //use the index to get the current span m time attribute.
            var currentSpanTime  = mSpanTimesArray[index];
            //using the current span time to find the span in the transcription
            //using `.position()` to get position attribute
            //calling top to get distance
            var current = $('#transcript').find("span[tcin='"+currentSpanTime+"']").position().top;
            console.log("current");
            console.log(current);
            //div transcription is set to scroll in css
            //scrollTop() can take argument of where to scroll it to.
            //scrollTop() without argument returns current position
            // adding current span top position to transcription div position moves transcription scroll to current line
                console.log("top");
            console.log($('#transcript').scrollTop() );
            $('#transcript').scrollTop($('#transcript').scrollTop() + current-450);
            //450 added to offset height of the position of video div
                console.log("res");
                console.log($('#transcript').scrollTop() + current);
        }//if array
    }//!==0
}
