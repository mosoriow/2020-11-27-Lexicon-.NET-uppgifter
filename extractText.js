function extractText() {
    let items=$('li');
    let result="";

    for(let i=0;i<items.length;i++) {
        if(i>0) result=result.concat(', ');
        result=result.concat(items[i].innerText);
    }

    /*
    let result="";
    $('li').each(
        function(index) {
            result=result.concat( $(this).text() );
            if()
        }
    );
    */

    $('#result').text(result);
}

