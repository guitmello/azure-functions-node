# CRUD Azure Functions with Node and Azure CosmosDB

## Install

```
npm i
```

## Azure CosmosDB server settings

Create file `local.settings.json` in the root project

```
// local.settings.json
{
	"IsEncrypted": false,
	"Values": {
		"AzureWebJobsStorage": "",
		"FUNCTIONS_WORKER_RUNTIME": "node",
		"CosmosDB": "<cosmosdb-name>",
		"CosmosDBUser": "<cosmosdb-user>",
		"CosmosDBPasswordUrl": "<cosmosdb-passwordUrl>",
		"CosmosDBPassword": "<cosmosdb-password>",
		"CosmosDBPort": <cosmosdb-port>
	},
	"Host": {
		"LocalHttpPort": 7071,
		"CORS": "*"
	}
}

```
