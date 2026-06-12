import type { INodeProperties } from 'n8n-workflow';

export const functionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					]
				}
			},
			"options": [
				{
					"name": "Functions List",
					"value": "Functions List",
					"action": "List Functions",
					"description": "Get a list of all the project's functions. You can use the query params to filter your results.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/functions"
						}
					}
				},
				{
					"name": "Functions Create",
					"value": "Functions Create",
					"action": "Create Function",
					"description": "Create a new function. You can pass a list of [permissions](/docs/permissions) to allow different project users or team with access to execute the function using the client API.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/functions"
						}
					}
				},
				{
					"name": "Functions Delete",
					"value": "Functions Delete",
					"action": "Delete Function",
					"description": "Delete a function by its unique ID.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/functions/{{$parameter[\"functionId\"]}}"
						}
					}
				},
				{
					"name": "Functions Get",
					"value": "Functions Get",
					"action": "Get Function",
					"description": "Get a function by its unique ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/functions/{{$parameter[\"functionId\"]}}"
						}
					}
				},
				{
					"name": "Functions Update",
					"value": "Functions Update",
					"action": "Update Function",
					"description": "Update function by its unique ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/functions/{{$parameter[\"functionId\"]}}"
						}
					}
				},
				{
					"name": "Functions List Executions",
					"value": "Functions List Executions",
					"action": "List Executions",
					"description": "Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. [Learn more about different API modes](/docs/admin).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/functions/{{$parameter[\"functionId\"]}}/executions"
						}
					}
				},
				{
					"name": "Functions Create Execution",
					"value": "Functions Create Execution",
					"action": "Create Execution",
					"description": "Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/functions/{{$parameter[\"functionId\"]}}/executions"
						}
					}
				},
				{
					"name": "Functions Get Execution",
					"value": "Functions Get Execution",
					"action": "Get Execution",
					"description": "Get a function execution log by its unique ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/functions/{{$parameter[\"functionId\"]}}/executions/{{$parameter[\"executionId\"]}}"
						}
					}
				},
				{
					"name": "Functions Update Tag",
					"value": "Functions Update Tag",
					"action": "Update Function Tag",
					"description": "Update the function code tag ID using the unique function ID. Use this endpoint to switch the code tag that should be executed by the execution endpoint.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/functions/{{$parameter[\"functionId\"]}}/tag"
						}
					}
				},
				{
					"name": "Functions List Tags",
					"value": "Functions List Tags",
					"action": "List Tags",
					"description": "Get a list of all the project's code tags. You can use the query params to filter your results.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/functions/{{$parameter[\"functionId\"]}}/tags"
						}
					}
				},
				{
					"name": "Functions Create Tag",
					"value": "Functions Create Tag",
					"action": "Create Tag",
					"description": "Create a new function code tag. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's tag to use your new tag UID.\n\nThis endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](/docs/functions).\n\nUse the \"command\" param to set the entry point used to execute your code.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/functions/{{$parameter[\"functionId\"]}}/tags"
						}
					}
				},
				{
					"name": "Functions Delete Tag",
					"value": "Functions Delete Tag",
					"action": "Delete Tag",
					"description": "Delete a code tag by its unique ID.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/functions/{{$parameter[\"functionId\"]}}/tags/{{$parameter[\"tagId\"]}}"
						}
					}
				},
				{
					"name": "Functions Get Tag",
					"value": "Functions Get Tag",
					"action": "Get Tag",
					"description": "Get a code tag by its unique ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/functions/{{$parameter[\"functionId\"]}}/tags/{{$parameter[\"tagId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /functions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions List"
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
						"Functions"
					],
					"operation": [
						"Functions List"
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
						"Functions"
					],
					"operation": [
						"Functions List"
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
						"Functions"
					],
					"operation": [
						"Functions List"
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
						"Functions"
					],
					"operation": [
						"Functions List"
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
						"Functions"
					],
					"operation": [
						"Functions List"
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
						"Functions"
					],
					"operation": [
						"Functions List"
					]
				}
			}
		},
		{
			"displayName": "POST /functions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Create"
					]
				}
			}
		},
		{
			"displayName": "Events",
			"name": "events",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Events list.",
			"routing": {
				"send": {
					"property": "events",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Execute",
			"name": "execute",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of strings with execution permissions. By default no user is granted with any execute permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.",
			"routing": {
				"send": {
					"property": "execute",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Create"
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
			"description": "Function name. Max length: 128 chars.",
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
						"Functions"
					],
					"operation": [
						"Functions Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Runtime",
			"name": "runtime",
			"type": "string",
			"default": "",
			"description": "Execution runtime.",
			"routing": {
				"send": {
					"property": "runtime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Create"
					]
				}
			}
		},
		{
			"displayName": "Schedule",
			"name": "schedule",
			"type": "string",
			"default": "",
			"description": "Schedule CRON syntax.",
			"routing": {
				"send": {
					"property": "schedule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Create"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "timeout",
			"type": "number",
			"default": 0,
			"description": "Function maximum execution time in seconds.",
			"routing": {
				"send": {
					"property": "timeout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Create"
					]
				}
			}
		},
		{
			"displayName": "Vars",
			"name": "vars",
			"type": "json",
			"default": "{}",
			"description": "Key-value JSON object.",
			"routing": {
				"send": {
					"property": "vars",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Create"
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
						"Functions"
					],
					"operation": [
						"Functions Create"
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
						"Functions"
					],
					"operation": [
						"Functions Create"
					]
				}
			}
		},
		{
			"displayName": "DELETE /functions/{functionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Delete"
					]
				}
			}
		},
		{
			"displayName": "Function ID",
			"name": "functionId",
			"required": true,
			"description": "Function unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Delete"
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
						"Functions"
					],
					"operation": [
						"Functions Delete"
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
						"Functions"
					],
					"operation": [
						"Functions Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /functions/{functionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Get"
					]
				}
			}
		},
		{
			"displayName": "Function ID",
			"name": "functionId",
			"required": true,
			"description": "Function unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Get"
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
						"Functions"
					],
					"operation": [
						"Functions Get"
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
						"Functions"
					],
					"operation": [
						"Functions Get"
					]
				}
			}
		},
		{
			"displayName": "PUT /functions/{functionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Update"
					]
				}
			}
		},
		{
			"displayName": "Function ID",
			"name": "functionId",
			"required": true,
			"description": "Function unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Update"
					]
				}
			}
		},
		{
			"displayName": "Events",
			"name": "events",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Events list.",
			"routing": {
				"send": {
					"property": "events",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Execute",
			"name": "execute",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of strings with execution permissions. By default no user is granted with any execute permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.",
			"routing": {
				"send": {
					"property": "execute",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Update"
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
			"description": "Function name. Max length: 128 chars.",
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
						"Functions"
					],
					"operation": [
						"Functions Update"
					]
				}
			}
		},
		{
			"displayName": "Schedule",
			"name": "schedule",
			"type": "string",
			"default": "",
			"description": "Schedule CRON syntax.",
			"routing": {
				"send": {
					"property": "schedule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Update"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "timeout",
			"type": "number",
			"default": 0,
			"description": "Function maximum execution time in seconds.",
			"routing": {
				"send": {
					"property": "timeout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Update"
					]
				}
			}
		},
		{
			"displayName": "Vars",
			"name": "vars",
			"type": "json",
			"default": "{}",
			"description": "Key-value JSON object.",
			"routing": {
				"send": {
					"property": "vars",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Update"
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
						"Functions"
					],
					"operation": [
						"Functions Update"
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
						"Functions"
					],
					"operation": [
						"Functions Update"
					]
				}
			}
		},
		{
			"displayName": "GET /functions/{functionId}/executions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions List Executions"
					]
				}
			}
		},
		{
			"displayName": "Function ID",
			"name": "functionId",
			"required": true,
			"description": "Function unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions List Executions"
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
						"Functions"
					],
					"operation": [
						"Functions List Executions"
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
						"Functions"
					],
					"operation": [
						"Functions List Executions"
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
						"Functions"
					],
					"operation": [
						"Functions List Executions"
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
						"Functions"
					],
					"operation": [
						"Functions List Executions"
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
						"Functions"
					],
					"operation": [
						"Functions List Executions"
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
						"Functions"
					],
					"operation": [
						"Functions List Executions"
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
						"Functions"
					],
					"operation": [
						"Functions List Executions"
					]
				}
			}
		},
		{
			"displayName": "POST /functions/{functionId}/executions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Create Execution"
					]
				}
			}
		},
		{
			"displayName": "Function ID",
			"name": "functionId",
			"required": true,
			"description": "Function unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Create Execution"
					]
				}
			}
		},
		{
			"displayName": "Data",
			"name": "data",
			"type": "string",
			"default": "",
			"description": "String of custom data to send to function.",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Create Execution"
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
						"Functions"
					],
					"operation": [
						"Functions Create Execution"
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
						"Functions"
					],
					"operation": [
						"Functions Create Execution"
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
						"Functions"
					],
					"operation": [
						"Functions Create Execution"
					]
				}
			}
		},
		{
			"displayName": "GET /functions/{functionId}/executions/{executionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Get Execution"
					]
				}
			}
		},
		{
			"displayName": "Function ID",
			"name": "functionId",
			"required": true,
			"description": "Function unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Get Execution"
					]
				}
			}
		},
		{
			"displayName": "Execution ID",
			"name": "executionId",
			"required": true,
			"description": "Execution unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Get Execution"
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
						"Functions"
					],
					"operation": [
						"Functions Get Execution"
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
						"Functions"
					],
					"operation": [
						"Functions Get Execution"
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
						"Functions"
					],
					"operation": [
						"Functions Get Execution"
					]
				}
			}
		},
		{
			"displayName": "PATCH /functions/{functionId}/tag",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Update Tag"
					]
				}
			}
		},
		{
			"displayName": "Function ID",
			"name": "functionId",
			"required": true,
			"description": "Function unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Update Tag"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag",
			"name": "tag",
			"type": "string",
			"default": "",
			"description": "Tag unique ID.",
			"routing": {
				"send": {
					"property": "tag",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Update Tag"
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
						"Functions"
					],
					"operation": [
						"Functions Update Tag"
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
						"Functions"
					],
					"operation": [
						"Functions Update Tag"
					]
				}
			}
		},
		{
			"displayName": "GET /functions/{functionId}/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions List Tags"
					]
				}
			}
		},
		{
			"displayName": "Function ID",
			"name": "functionId",
			"required": true,
			"description": "Function unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions List Tags"
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
						"Functions"
					],
					"operation": [
						"Functions List Tags"
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
						"Functions"
					],
					"operation": [
						"Functions List Tags"
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
						"Functions"
					],
					"operation": [
						"Functions List Tags"
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
						"Functions"
					],
					"operation": [
						"Functions List Tags"
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
						"Functions"
					],
					"operation": [
						"Functions List Tags"
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
						"Functions"
					],
					"operation": [
						"Functions List Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /functions/{functionId}/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Create Tag"
					]
				}
			}
		},
		{
			"displayName": "Function ID",
			"name": "functionId",
			"required": true,
			"description": "Function unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Create Tag"
					]
				}
			}
		},
		{
			"displayName": "POST /functions/{functionId}/tags<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Create Tag"
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
						"Functions"
					],
					"operation": [
						"Functions Create Tag"
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
						"Functions"
					],
					"operation": [
						"Functions Create Tag"
					]
				}
			}
		},
		{
			"displayName": "DELETE /functions/{functionId}/tags/{tagId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Delete Tag"
					]
				}
			}
		},
		{
			"displayName": "Function ID",
			"name": "functionId",
			"required": true,
			"description": "Function unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Delete Tag"
					]
				}
			}
		},
		{
			"displayName": "Tag ID",
			"name": "tagId",
			"required": true,
			"description": "Tag unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Delete Tag"
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
						"Functions"
					],
					"operation": [
						"Functions Delete Tag"
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
						"Functions"
					],
					"operation": [
						"Functions Delete Tag"
					]
				}
			}
		},
		{
			"displayName": "GET /functions/{functionId}/tags/{tagId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Get Tag"
					]
				}
			}
		},
		{
			"displayName": "Function ID",
			"name": "functionId",
			"required": true,
			"description": "Function unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Get Tag"
					]
				}
			}
		},
		{
			"displayName": "Tag ID",
			"name": "tagId",
			"required": true,
			"description": "Tag unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Functions Get Tag"
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
						"Functions"
					],
					"operation": [
						"Functions Get Tag"
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
						"Functions"
					],
					"operation": [
						"Functions Get Tag"
					]
				}
			}
		},
];
