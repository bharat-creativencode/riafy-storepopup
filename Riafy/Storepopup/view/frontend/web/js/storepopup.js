require(
    [ 'jquery', 'Magento_Ui/js/modal/modal' ],
    function($, modal) {
        modal({
            autoOpen: true,
            responsive: true,
            clickableOverlay: false,
            modalClass: 'modal-custom',
            title: 'List Store',
            buttons: [{
                text: $.mage.__('Proceed'),
                class: '',
                click: function () {
                    let dataPostObj = $("#dropdown-store-popup :selected").attr('data-post');
                    dataPostAction = JSON.parse( dataPostObj );
                    let redirectURL = dataPostAction.action + '?___store=' + dataPostAction.data.___store + '&___from_store=' + dataPostAction.data.___from_store + '&uenc=' + dataPostAction.data.uenc
                    window.location.href = redirectURL;
                    //console.log(dataPostAction);
                    //console.log(redirectURL);
                }
            }]
        }, $("#storepopup"));
    }
);