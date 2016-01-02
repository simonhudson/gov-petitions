<?php include('includes/precontent.inc.php'); ?>

    <div class="ko-petition-detail petition-detail">
        <!-- ko if: error() !== '' -->
            <p data-bind="text: error"></p>
        <!-- /ko -->
        <!-- ko if: error() === '' -->
            <!-- ko if: data().action -->
            <h1 class="petition-title"><a data-bind="text: data().action, attr: { 'href': data().link, 'target': '_blank' }"></a></h1>
            <!-- /ko -->
            <!-- ko if: data().open_at && data().signature_count -->
            <p class="sig-count"><strong class="sig-count-number" data-bind="text: data().signature_count"></strong><span data-bind="text: 'signatures'"></span></p>
            <!-- /ko -->
            <!-- ko if: data().background -->
                <p data-bind="text: data().background"></p>
            <!-- /ko -->
            <!-- ko if: data().additional_details -->
                <p data-bind="text: data().additional_details"></p>
            <!-- /ko -->
            <!-- ko if: data().open_at -->
                <p><strong data-bind="text: 'Opened: '"></strong> <span data-bind="text: new Date(data().open_at)"></span></p>
            <!-- /ko -->
        <!-- /ko -->
    </div>

<?php include('includes/postcontent.inc.php'); ?>