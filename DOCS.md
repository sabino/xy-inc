# XY Inc GPS System v1.0.0

A

- [Poi](#poi)
	- [Create poi](#create-poi)
	- [Delete poi](#delete-poi)
	- [Retrieve poi](#retrieve-poi)
	- [Retrieve pois](#retrieve-pois)
	- [Update poi](#update-poi)
	


# Poi

## Create poi



	POST /poi


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Poi's name.</p>							|
| x			| 			|  <p>Poi's x.</p>							|
| y			| 			|  <p>Poi's y.</p>							|

## Delete poi



	DELETE /poi/:id


## Retrieve poi



	GET /poi/:id


## Retrieve pois



	GET /poi


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update poi



	PUT /poi/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Poi's name.</p>							|
| x			| 			|  <p>Poi's x.</p>							|
| y			| 			|  <p>Poi's y.</p>							|


