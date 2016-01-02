<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Parliament Petitions</title>
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
<script src="http://ajax.aspnetcdn.com/ajax/knockout/knockout-3.3.0.js"></script>
<link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
<noscript>
    <p><strong>Warning! JavaScript is not enabled.</strong></p>
    <p>This software requires your browser to have JavaScript enabled.</p>
</noscript>

<header>
    <div class="wrap header__wrap">
        <p class="page-title"><a class="page-title__link" href="./">Petitions</a></p>
        <form class="petition-search" id="petition-search">
            <label for="petition-search__q">Search for petition</label>
            <input id="petition-search__q" placeholder="Petition ID (e.g 114003)" required type="search" />
            <input type="submit" value="Search" />
        </form>
    </div>
</header>

<div class="wrap" id="main-wrap">