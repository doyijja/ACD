
function onTabSelecting(sender, args) {

    if (args.get_tab().get_pageViewID()) {

        args.get_tab().set_postBack(false);

    }

}

function onRequestStart(sender, args) {

    if (args.get_eventTarget().indexOf("ExportTo") >= 0) {

        args.set_enableAjax(false);

    }

}


