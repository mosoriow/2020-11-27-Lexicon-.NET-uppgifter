function attachEvents() {

    $('li').each(function() {
            $(this).click(
                function() {
                    if($(this).css('background-color').toString()=='rgb(128, 128, 128)')
                        $(this).css('background-color','');
                    else
                        $(this).css('background-color','gray');
                }
            )
        }
    );

    $('#showTownsButton').click(
        function() {
            let result='';
            $('li').each(
                function() {
                    if($(this).css('background-color').toString()=='rgb(128, 128, 128)') {
                        if(result.length!=0) result=result.concat(', ');
                        result=result.concat($(this).text());
                    }
                }
            );
            
            result='Selected Towns: '+result;
            $('#selectedTowns').text(result);
        }
    );
}
