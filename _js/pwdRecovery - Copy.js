$(document).ready(function () {
    $('.clsBtnCls').button({
        icons: { primary: "ui-icon-close" }
    }).click(function () {
        parent.$.fancybox.close();
    });
  

    $('.contBtnCls').button({
        icons: { primary: "ui-icon-arrowthick-1-e" }
    });
    $('input[type=text]').removeClass();
});

function closeME() {
    parent.$.fancybox.close();
}