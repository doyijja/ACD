jQuery(document).ready(function () {


    //$('input[type=text],input[type=password]').focus(function () {
    //        //$(this).removeClass();
    //        //$(this).addClass('focBackCls').removeClass('plnBackCls');
    //});
    //$('input[type=text],input[type=password]').blur(function () {
    //        $(this).removeClass();
    //        $(this).addClass('plnBackCls').removeClass('focBackCls');       
    //});

    $('#devNotifydlg').dialog({
        autoOpen: false,
        modal: true,
        //width: 'inherit',
        title: 'Attention!',
        width: 500,
        height: 'auto',
        stack: true,
        buttons: {
            "Yes": function () {
                $(this).dialog("close");
                //Redirect to user page
            },
            "No": function () {
                location.href = 'https://vzu.verizon.com/vzu/';
            }
        },
        open: function (event, ui) {
            $('#devNotifydlg').css('overflow', 'hidden');
            $('#dlgCont').css('font-size', '14px');
        }

    });
  
    $('#browserNotifydlg').dialog({
        autoOpen: false,
        modal: true,
        //width: 'inherit',
        title: 'Attention!',
        width: 500,
        height: 375,
        stack: true,
        buttons: {
            "Ok": function () {
                $(this).dialog("close");
                //Redirect to user page
            }
        },
        open: function (event, ui) {
            $('#browserNotifydlg').css('overflow', 'hidden');
            $('#dlgCont2').css('font-size', '14px');
        }

    });



    var urlStr = document.URL;

    if ((urlStr.indexOf('act') > 0) && (urlStr.indexOf('rid') > 0)) {
        var action = getParameterByName('act');
        var rid = getParameterByName('rid');
        //alert(action + ' // ' + rid + ' // ' + rid.length);
        
        if ((action == 'PwdRst') && (rid.length > 20)) {
            lanchPWCont();
        }
    }



    //alert(urlStr);
    if (urlStr.indexOf("tools-dev") > 0) {
        $('#devNotifydlg').dialog("resize", "auto");
        $('#devNotifydlg').dialog('open')
    }

    checkBrowser();


    $("#Btn1").click(function () {
        $("#link2").fancybox({
            //'width': '75%',
            height: 525,
            //'autoScale': true,
            autoSize: false,
            scrolling: 'no',
            //fitToView: true,
            //'transitionIn': 'elastic',
            //'transitionOut': 'elastic',
            //'showCloseButton': true,
            //'titleShow': true,
            //'titlePosition': 'over',
            //'scrolling': 'no',
            closeBtn: true,
            type: 'iframe',
            modal: true,
            helpers: {
                title: {
                    type: 'outside'
                }
            },
            beforeLoad: function () {
                //return window.confirm('Continue?');
                $.fancybox.showLoading();
                
            },
            onCancel: function () {
                //alert('Canceled!');
            },
            afterShow: function () {
                //alert('Completed!');
                $.fancybox.hideLoading();
                this.inner.css({
                    overflow: 'auto' // or 'no'
                });

            },
            afterClose: function () {
                //alert('Closed!'); 
                location.reload();
            }
        });


    });




});

function lanchPWCont() {
    var lnk = 'PwdRecovery.aspx';
    $('#link2').attr('href', lnk);
    $('#link2').attr('title', 'Password Recovery');
    $("#Btn1").trigger('click');
}
  
function checkBrowser() {
    var rawUserAgent = navigator.userAgent;
    var userAgent = navigator.userAgent.toLowerCase(),
        browser = '',
        version = 0;

    $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());

    // Is this a version of IE?
    if ($.browser.msie) {
        userAgent = $.browser.version;
        userAgent = userAgent.substring(0, userAgent.indexOf('.'));
        version = $.browser.version;
        browser = "Internet Explorer";
    }

    // Is this a version of Chrome?
    if ($.browser.chrome) {
        userAgent = userAgent.substring(userAgent.indexOf('chrome/') + 7);
        userAgent = userAgent.substring(0, userAgent.indexOf('.'));
        version = userAgent;
        // If it is chrome then jQuery thinks it's safari so we have to tell it it isn't
        $.browser.safari = false;
        browser = "Chrome";
    }

    // Is this a version of Safari?
    if ($.browser.safari) {
        userAgent = userAgent.substring(userAgent.indexOf('safari/') + 7);
        userAgent = userAgent.substring(0, userAgent.indexOf('.'));
        version = userAgent;
        browser = "Safari";
    }

    // Is this a version of Mozilla?
    if ($.browser.mozilla) {
        //Is it Firefox?
        if (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
            userAgent = userAgent.substring(userAgent.indexOf('firefox/') + 8);
            userAgent = userAgent.substring(0, userAgent.indexOf('.'));
            version = userAgent;
            browser = "Firefox"
        }
            // If not then it must be another Mozilla
        else {
            browser = "Mozilla (not Firefox)"
        }
    }

    // Is this a version of Opera?
    if ($.browser.opera) {
        userAgent = userAgent.substring(userAgent.indexOf('version/') + 8);
        userAgent = userAgent.substring(0, userAgent.indexOf('.'));
        version = userAgent;
        browser = "Opera";
    }
    // only display below if NOT IE
    if (browser != 'Internet Explorer') {
        $('#browserNotifydlg').dialog("resize", "auto");
        $('#browserNotifydlg').dialog('open')
        $('#browserLbl').text(browser + ' :' + version + ' -- ' + userAgent + '\n' + rawUserAgent);
    }
  
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}