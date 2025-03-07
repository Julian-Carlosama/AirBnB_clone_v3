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
    })
  
    $.get("http://0.0.0.0:5001/api/v1/status/", function(data) {
      if (data.status === "OK") {
        $("#api_status").addClass("available")
      } else {
        $("#api_status").removeClass("available")
      }
    })
  });
