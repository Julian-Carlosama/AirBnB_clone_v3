$('document').ready(function () {
    const amenitids = {};
    $('input[type="checkbox"]').change(function () {
        if ($(this).is(':checked')) {
            amenitids[$(this).attr('data-id')] = $(this).attr('data-name');
        }
        else {
            delete amenitids[$(this).attr('data-id')];
        }
        $('div.amenities h4').text(Object.values(amenitids).join(', '));
    });
});