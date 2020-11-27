function search() {
    let totalFound=$("li:contains('"+$('#searchText')[0].value+"')").length;
    $('#result').text(
        totalFound.toString()+' match'+((totalFound!=1)?'es':'')+' found'    
    );
}
