# gov-petitions
Experimenting with publicly available data from petition.parliament.uk

## What we're doing
* Make call to get petition data (by ID)
* Handle return (either error or display data)
* Store Last-Modified header in localStorage
* Every [x] seconds, make HEAD call to check Last-Modified
* If Last-Modified == localStorage val, do nothing.
* If Last-Modified != localStorage val, make call to retrieve new data
* Repeat polling

## Nice-to-have
* New signatures appear at top of list and are marked when they arrive (flash green or suchlike)
