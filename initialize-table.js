function createRow(country, capital) {
    /*
    $('#countriesTable').append($('<tr>')
        .append($('<td>').text(country))
        .append($('<td>').text(capital))
        .append($('<td>').text('buttons'))
    );
    */
    $('#countriesTable').append($('<tr>')
        .append($('<td>').text(country))
        .append($('<td>').text(capital))
        .append($('<td>')
            .append($('<a>').attr('href','#').text('[Delete]'))
        )
    );
}

function initializeTable() {
    createRow('Sweden','Stockholm');
    createRow('Germany','Berlin');
    createRow('France','Paris');
}

