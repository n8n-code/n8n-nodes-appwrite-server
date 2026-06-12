import type { INodeProperties } from 'n8n-workflow';

export const databaseDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					]
				}
			},
			"options": [
				{
					"name": "Database List Collections",
					"value": "Database List Collections",
					"action": "List Collections",
					"description": "Get a list of all the user collections. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's collections. [Learn more about different API modes](/docs/admin).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/database/collections"
						}
					}
				},
				{
					"name": "Database Create Collection",
					"value": "Database Create Collection",
					"action": "Create Collection",
					"description": "Create a new Collection.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/database/collections"
						}
					}
				},
				{
					"name": "Database Delete Collection",
					"value": "Database Delete Collection",
					"action": "Delete Collection",
					"description": "Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/database/collections/{{$parameter[\"collectionId\"]}}"
						}
					}
				},
				{
					"name": "Database Get Collection",
					"value": "Database Get Collection",
					"action": "Get Collection",
					"description": "Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/database/collections/{{$parameter[\"collectionId\"]}}"
						}
					}
				},
				{
					"name": "Database Update Collection",
					"value": "Database Update Collection",
					"action": "Update Collection",
					"description": "Update a collection by its unique ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/database/collections/{{$parameter[\"collectionId\"]}}"
						}
					}
				},
				{
					"name": "Database List Documents",
					"value": "Database List Documents",
					"action": "List Documents",
					"description": "Get a list of all the user documents. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's documents. [Learn more about different API modes](/docs/admin).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/database/collections/{{$parameter[\"collectionId\"]}}/documents"
						}
					}
				},
				{
					"name": "Database Create Document",
					"value": "Database Create Document",
					"action": "Create Document",
					"description": "Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](/docs/server/database#databaseCreateCollection) API or directly from your database console.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/database/collections/{{$parameter[\"collectionId\"]}}/documents"
						}
					}
				},
				{
					"name": "Database Delete Document",
					"value": "Database Delete Document",
					"action": "Delete Document",
					"description": "Delete a document by its unique ID. This endpoint deletes only the parent documents, its attributes and relations to other documents. Child documents **will not** be deleted.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/database/collections/{{$parameter[\"collectionId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Database Get Document",
					"value": "Database Get Document",
					"action": "Get Document",
					"description": "Get a document by its unique ID. This endpoint response returns a JSON object with the document data.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/database/collections/{{$parameter[\"collectionId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Database Update Document",
					"value": "Database Update Document",
					"action": "Update Document",
					"description": "Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/database/collections/{{$parameter[\"collectionId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /database/collections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Collections"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"description": "Search term to filter your list results. Max length: 256 chars.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Collections"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request.",
			"default": 25,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Collections"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Results offset. The default value is 0. Use this param to manage pagination.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Collections"
					]
				}
			}
		},
		{
			"displayName": "Order Type",
			"name": "orderType",
			"description": "Order result by ASC or DESC order.",
			"default": "ASC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Collections"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Key (Header)",
			"name": "security_key",
			"type": "string",
			"default": "",
			"description": "Your secret API key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Collections"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Project (Header)",
			"name": "security_project",
			"type": "string",
			"default": "",
			"description": "Your project ID",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Project": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Collections"
					]
				}
			}
		},
		{
			"displayName": "POST /database/collections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Collection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Collection name. Max length: 128 chars.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Collection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Read",
			"name": "read",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of strings with read permissions. By default no user is granted with any read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.",
			"routing": {
				"send": {
					"property": "read",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Collection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rules",
			"name": "rules",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Array of [rule objects](/docs/rules). Each rule define a collection field name, data type and validation.",
			"routing": {
				"send": {
					"property": "rules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Collection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Write",
			"name": "write",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of strings with write permissions. By default no user is granted with any write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.",
			"routing": {
				"send": {
					"property": "write",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Collection"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Key (Header)",
			"name": "security_key",
			"type": "string",
			"default": "",
			"description": "Your secret API key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Collection"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Project (Header)",
			"name": "security_project",
			"type": "string",
			"default": "",
			"description": "Your project ID",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Project": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Collection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /database/collections/{collectionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Delete Collection"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collectionId",
			"required": true,
			"description": "Collection unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Delete Collection"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Key (Header)",
			"name": "security_key",
			"type": "string",
			"default": "",
			"description": "Your secret API key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Delete Collection"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Project (Header)",
			"name": "security_project",
			"type": "string",
			"default": "",
			"description": "Your project ID",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Project": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Delete Collection"
					]
				}
			}
		},
		{
			"displayName": "GET /database/collections/{collectionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Get Collection"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collectionId",
			"required": true,
			"description": "Collection unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Get Collection"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Key (Header)",
			"name": "security_key",
			"type": "string",
			"default": "",
			"description": "Your secret API key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Get Collection"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Project (Header)",
			"name": "security_project",
			"type": "string",
			"default": "",
			"description": "Your project ID",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Project": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Get Collection"
					]
				}
			}
		},
		{
			"displayName": "PUT /database/collections/{collectionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Collection"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collectionId",
			"required": true,
			"description": "Collection unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Collection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Collection name. Max length: 128 chars.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Collection"
					]
				}
			}
		},
		{
			"displayName": "Read",
			"name": "read",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of strings with read permissions. By default inherits the existing read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.",
			"routing": {
				"send": {
					"property": "read",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Collection"
					]
				}
			}
		},
		{
			"displayName": "Rules",
			"name": "rules",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Array of [rule objects](/docs/rules). Each rule define a collection field name, data type and validation.",
			"routing": {
				"send": {
					"property": "rules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Collection"
					]
				}
			}
		},
		{
			"displayName": "Write",
			"name": "write",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of strings with write permissions. By default inherits the existing write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.",
			"routing": {
				"send": {
					"property": "write",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Collection"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Key (Header)",
			"name": "security_key",
			"type": "string",
			"default": "",
			"description": "Your secret API key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Collection"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Project (Header)",
			"name": "security_project",
			"type": "string",
			"default": "",
			"description": "Your project ID",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Project": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Collection"
					]
				}
			}
		},
		{
			"displayName": "GET /database/collections/{collectionId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Documents"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collectionId",
			"required": true,
			"description": "Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Documents"
					]
				}
			}
		},
		{
			"displayName": "Filters",
			"name": "filters",
			"description": "Array of filter strings. Each filter is constructed from a key name, comparison operator (=, !=, >, <, <=, >=) and a value. You can also use a dot (.) separator in attribute names to filter by child document attributes. Examples: 'name=John Doe' or 'category.$id>=5bed2d152c362'.",
			"default": "[]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "filters",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Documents"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Maximum number of documents to return in response.  Use this value to manage pagination. By default will return maximum 25 results. Maximum of 100 results allowed per request.",
			"default": 25,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Documents"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Offset value. The default value is 0. Use this param to manage pagination.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Documents"
					]
				}
			}
		},
		{
			"displayName": "Order Field",
			"name": "orderField",
			"description": "Document field that results will be sorted by.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderField",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Documents"
					]
				}
			}
		},
		{
			"displayName": "Order Type",
			"name": "orderType",
			"description": "Order direction. Possible values are DESC for descending order, or ASC for ascending order.",
			"default": "ASC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Documents"
					]
				}
			}
		},
		{
			"displayName": "Order Cast",
			"name": "orderCast",
			"description": "Order field type casting. Possible values are int, string, date, time or datetime. The database will attempt to cast the order field to the value you pass here. The default value is a string.",
			"default": "string",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderCast",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Documents"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"description": "Search query. Enter any free text search. The database will try to find a match against all document attributes and children. Max length: 256 chars.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Documents"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite JWT (Header)",
			"name": "security_jwt",
			"type": "string",
			"default": "",
			"description": "Your secret JSON Web Token",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-JWT": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Documents"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Key (Header)",
			"name": "security_key",
			"type": "string",
			"default": "",
			"description": "Your secret API key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Documents"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Project (Header)",
			"name": "security_project",
			"type": "string",
			"default": "",
			"description": "Your project ID",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Project": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database List Documents"
					]
				}
			}
		},
		{
			"displayName": "POST /database/collections/{collectionId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Document"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collectionId",
			"required": true,
			"description": "Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Document"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "data",
			"type": "json",
			"default": "{}",
			"description": "Document data as JSON object.",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Document"
					]
				}
			}
		},
		{
			"displayName": "Parent Document",
			"name": "parentDocument",
			"type": "string",
			"default": "",
			"description": "Parent document unique ID. Use when you want your new document to be a child of a parent document.",
			"routing": {
				"send": {
					"property": "parentDocument",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Document"
					]
				}
			}
		},
		{
			"displayName": "Parent Property",
			"name": "parentProperty",
			"type": "string",
			"default": "",
			"description": "Parent document property name. Use when you want your new document to be a child of a parent document.",
			"routing": {
				"send": {
					"property": "parentProperty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Document"
					]
				}
			}
		},
		{
			"displayName": "Parent Property Type",
			"name": "parentPropertyType",
			"type": "string",
			"default": "",
			"description": "Parent document property connection type. You can set this value to **assign**, **append** or **prepend**, default value is assign. Use when you want your new document to be a child of a parent document.",
			"routing": {
				"send": {
					"property": "parentPropertyType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Document"
					]
				}
			}
		},
		{
			"displayName": "Read",
			"name": "read",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of strings with read permissions. By default only the current user is granted with read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.",
			"routing": {
				"send": {
					"property": "read",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Document"
					]
				}
			}
		},
		{
			"displayName": "Write",
			"name": "write",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of strings with write permissions. By default only the current user is granted with write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.",
			"routing": {
				"send": {
					"property": "write",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Document"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite JWT (Header)",
			"name": "security_jwt",
			"type": "string",
			"default": "",
			"description": "Your secret JSON Web Token",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-JWT": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Document"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Key (Header)",
			"name": "security_key",
			"type": "string",
			"default": "",
			"description": "Your secret API key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Document"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Project (Header)",
			"name": "security_project",
			"type": "string",
			"default": "",
			"description": "Your project ID",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Project": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Create Document"
					]
				}
			}
		},
		{
			"displayName": "DELETE /database/collections/{collectionId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Delete Document"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collectionId",
			"required": true,
			"description": "Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Delete Document"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Document unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Delete Document"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite JWT (Header)",
			"name": "security_jwt",
			"type": "string",
			"default": "",
			"description": "Your secret JSON Web Token",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-JWT": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Delete Document"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Key (Header)",
			"name": "security_key",
			"type": "string",
			"default": "",
			"description": "Your secret API key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Delete Document"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Project (Header)",
			"name": "security_project",
			"type": "string",
			"default": "",
			"description": "Your project ID",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Project": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Delete Document"
					]
				}
			}
		},
		{
			"displayName": "GET /database/collections/{collectionId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Get Document"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collectionId",
			"required": true,
			"description": "Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Get Document"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Document unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Get Document"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite JWT (Header)",
			"name": "security_jwt",
			"type": "string",
			"default": "",
			"description": "Your secret JSON Web Token",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-JWT": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Get Document"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Key (Header)",
			"name": "security_key",
			"type": "string",
			"default": "",
			"description": "Your secret API key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Get Document"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Project (Header)",
			"name": "security_project",
			"type": "string",
			"default": "",
			"description": "Your project ID",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Project": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Get Document"
					]
				}
			}
		},
		{
			"displayName": "PATCH /database/collections/{collectionId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Document"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collectionId",
			"required": true,
			"description": "Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Document"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Document unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Document"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "data",
			"type": "json",
			"default": "{}",
			"description": "Document data as JSON object.",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Document"
					]
				}
			}
		},
		{
			"displayName": "Read",
			"name": "read",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of strings with read permissions. By default inherits the existing read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.",
			"routing": {
				"send": {
					"property": "read",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Document"
					]
				}
			}
		},
		{
			"displayName": "Write",
			"name": "write",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of strings with write permissions. By default inherits the existing write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.",
			"routing": {
				"send": {
					"property": "write",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Document"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite JWT (Header)",
			"name": "security_jwt",
			"type": "string",
			"default": "",
			"description": "Your secret JSON Web Token",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-JWT": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Document"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Key (Header)",
			"name": "security_key",
			"type": "string",
			"default": "",
			"description": "Your secret API key",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Document"
					]
				}
			}
		},
		{
			"displayName": "X Appwrite Project (Header)",
			"name": "security_project",
			"type": "string",
			"default": "",
			"description": "Your project ID",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Appwrite-Project": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Database"
					],
					"operation": [
						"Database Update Document"
					]
				}
			}
		},
];
