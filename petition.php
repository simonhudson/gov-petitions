<?php include('includes/precontent.inc.php'); ?>

    <div class="loader-wrap"></div>
    <div class="ko-petition-detail petition-detail data-area">
        <!-- ko if: error() !== '' -->
            <p data-bind="text: error"></p>
        <!-- /ko -->
        <!-- ko if: error() === '' -->
            <!-- ko if: data().action -->
            <h1 class="petition-title" data-bind="text: data().action"></h1>
            <!-- /ko -->
            <!-- ko if: data().open_at && data().signature_count -->
            <p class="sig-count"><span class="sig-count-number" data-bind="text: data().signature_count"></span><span data-bind="text: 'signatures'"></span></p>
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