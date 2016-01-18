<?php include('includes/precontent.inc.php'); ?>

    <h1>Most popular petitions</h1>

    <div class="ko-petition-list petition-list__wrap">
        <ol class="petition-list__list">
            <!-- ko if: error() === '' -->
                <!-- ko foreach: data -->
                    <li class="petition-list__item">
                        <a data-bind="attr: { 'href': 'petition.php?id=' + id }, text: attributes.action"></a><br />
                        <span class="feint" data-bind="text: attributes.signature_count + ' signatures'"></span>
                    </li>
                <!-- /ko -->
            <!-- /ko -->
        </ol>
    </div>

<?php include('includes/postcontent.inc.php'); ?>