function attachEvents() {
    $('.button').click(
        function() {
            $('a').removeClass('selected');
            $(this).addClass('selected');
        }
    );
}
