!function ($) {

    $(function () {

        var $window = $(window)

        // Disable certain hashtag-only links
        $('[href^=#]').click(function (e) {
            e.preventDefault()
        })

        // tooltip
        $().tooltip({
            selector: "a[data-toggle=tooltip]"
        })

        // smooth scroll to top
        $('footer a').click(function (e) {
            $('body,html').animate({ scrollTop: 0 }, 600)
        })

        $("#btnSearch").click(function () {
            var $form = $('#frmSearch');
            var url = $form.attr('action');
            if (!$form.valid || $form.valid()) {
                $.post(url, $form.serializeArray(),
            function (res) {
                $("#dvMechantList").html(res);
                return false;
            });
            }
        })

        $("#btnCopy").click(function () {
            $("#divCopyAlertContainer").html("");
            var $form = $('#frmCopy');
            var url = $form.attr('action');
            if (!$form.valid || $form.valid()) {
                $.post(url, $form.serializeArray(),
            function (res) {
                $("#divCopyAlertContainer").html(res.data);
                return false;
            });
            }
        })

        //        $('a[name="lnkPage"]').on('click', function () {
        //            alert('clicked');
        //        })

    })

} (window.jQuery)

$(document).on("click", "a[name='lnkPage']", function () {
    var currentPageNo = $(this).attr("id").replace('lnkPage_', '');
    var url = "";
    var $form = $('#frmSearch');
    var o = {};
    if ($form != null && !$form.valid || $form.valid()) {
        url = $form.attr('action');
        try {
            var frmSearch = $('#frmSearch');
            if (frmSearch != null && frmSearch != undefined) {
                var data = frmSearch.serializeArray();
                $.each(data, function () {
                    if (o[this.name] !== undefined) {
                        if (!o[this.name].push) {
                            o[this.name] = [o[this.name]];
                        }
                        o[this.name].push(this.value || '');
                    } else {
                        o[this.name] = this.value || '';
                    }
                });
            }
        }
        catch (ex) {
        }
    }
    if (url == null) {
        url = $(this).attr("href").replace('#','');
    }
    o['currentPageNo'] = currentPageNo;
    $.post(url, o,
            function (res) {
                $("#dvMechantList").html(res);
                return false;
            });
});

$(document).on("change", "*[data-action]", function () {
    var url = $(this).attr("data-action");
    var dropDownListName = $(this).attr("name");
    var data = dropDownListName + "=" + $(this).val();
    $.post(url, data,
            function (res) {
                var refreshControlId = "div" + dropDownListName;
                if (res.data == null) {
                    $("#" + refreshControlId).html(res);
                }
                else {
                    $("#" + refreshControlId).html(res.data);
                }
                return false;
            });
});

        $(document).on("click", "#lnkAddNewAccountManager", function () {
            var url = $(this).attr("href").replace('#', '');
            $.post(url, null,
            function (res) {
                $("#divAccountManagerEditor").html(res);
                return false;
            });
        });

        $(document).on("click", "#btnSaveAccountManager", function () {
            var $frmAccountManager = $('#frmAccountManager');
            var o = {};
            if ($frmAccountManager != null && !$frmAccountManager.valid || $frmAccountManager.valid()) {
                url = $frmAccountManager.attr('action');
                var data = $frmAccountManager.serializeArray();
                $.post(url, data,
            function (res) {
                if (res.success) {
                    $("#divAccountManagerEditor").html("");
                    $("#divAlertContainer").html(res.data);
                    $("#divAccountManagerList").html(res.list);
                }
                else {
                    $("#divAccountManagerEditor").html(res.data);
                }
                return false;
            });
            }
    });

    $(document).on("click", "#btnCancelAccountManager", function () {
        $("#divAccountManagerEditor").html("");
    });