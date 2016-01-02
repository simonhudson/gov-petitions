<?php include('includes/precontent.inc.php'); ?>

    <form class="petition-search" id="petition-search">
        <label for="petition-search__q">Search for petition</label>
        <input id="petition-search__q" placeholder="Petition ID (e.g 114003)" required type="search" />
        <input type="submit" value="Search" />
    </form>

    <div class="ko-petition-list petition-list__wrap">
        <ul>
            <!-- ko if: error() === '' -->
                <!-- ko foreach: data -->
                    <li class="petition-list__item"><a data-bind="attr: { 'href': 'petition.php?id=' + id }, text: attributes.action"></a></li>
                <!-- /ko -->
            <!-- /ko -->
        </ul>
    </div>

<?php include('includes/postcontent.inc.php'); ?>