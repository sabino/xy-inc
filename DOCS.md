# XY Inc GPS System v1.0.0

A

- [POI](#poi)
	- [Create POI](#create-poi)
	- [Delete poi](#delete-poi)
	- [Retrieve POIs](#retrieve-pois)
	- [Retrieve POIs](#retrieve-pois)
	- [Retrieve based on Max Distance](#retrieve-based-on-max-distance)
	- [Update POI](#update-poi)
	


# POI

## Create POI



	POST /poi


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>POI's name.</p>							|
| x			| 			|  <p>POI's x position.</p>							|
| y			| 			|  <p>POI's y position.</p>							|

## Delete poi



	DELETE /poi/:id


## Retrieve POIs



	GET /poi/:id


## Retrieve POIs



	GET /poi


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Retrieve based on Max Distance



	GET /filter?dmax=&amp;x=&amp;y=


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| dmax			| 			|  <p>POI's Max Distance.</p>							|
| y			| 			|  <p>POI's x position.</p>							|

## Update POI



	PUT /poi/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>POI's name.</p>							|
| x			| 			|  <p>POI's x position.</p>							|
| y			| 			|  <p>POI's y position.</p>							|


