$(document).ready(function () {
    $('#ddBox').hide();
    $('#CBshort').change(function () {
        var $this = $(this);        
        if ($this.is(':checked')) {            
            $('#ddBox').toggle();
        } else {            
            $('#ddBox').toggle();
        }
    });

});
