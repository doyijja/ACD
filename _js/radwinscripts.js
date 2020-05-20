(function (global, undefined) {
    var dash = {};

    
    function openWinAngie() {
        $find(dash.templateWindowIDAngie).show();
    }

    function openWinAllURLs() {
        $find(dash.templateWindowIDAllURLs).show();
    }

    function openWinTomorrow() {
        $find(dash.templateWindowIDTomorrow).show();
    }

    function openWinQuestion() {
        $find(dash.templateWindowIDQuestion).show();
    }

    function openWinFAQ() {
        $find(dash.templateWindowIDFAQ).show();
    }

    function openWinWhoToContact() {
        $find(dash.templateWindowIDWhoToContact).show();
    }

    function openWinRecent() {
        $find(dash.templateWindowIDRecent).show();
    }

    function openWinReference() {
        $find(dash.templateWindowIDReference).show();
    }

    global.$windowContentDemo = dash;
    global.openWinAngie = openWinAngie;
    global.openWinAllURLs = openWinAllURLs;
    global.openWinTomorrow = openWinTomorrow;
    global.openWinQuestion = openWinQuestion;
    global.openWinFAQ = openWinFAQ;
    global.openWinWhoToContact = openWinWhoToContact;
    global.openWinRecent = openWinRecent;
    global.openWinReference = openWinReference;
    
})(window);