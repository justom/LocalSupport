describe('bootstrap toggle', function() {
    var link;
    beforeEach(function() {
        setFixtures('<li class="dropdown" id="menuOrgs">'+
            '<a class="dropdown-toggle" href="#" data-toggle ="dropdown">Organisations</a>' +
            '<ul class="dropdown-menu">' +
            '    <li><a href="/organization_reports/without_users">Without Users</a></li>' +
            '</ul>' +
        '</li>');
        link = $('a').first();
    });
    describe('when clicking on the parent', function() {
        it('pops up a list', function() {
            link.click();
            expect($('li#menuOrgs')).toHaveClass('open');
            link.click();
            expect($('li#menuOrgs')).not.toHaveClass('open');
        });
    });
});

