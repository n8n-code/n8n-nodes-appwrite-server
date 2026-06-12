import type { INodeProperties } from 'n8n-workflow';

export const usersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					]
				}
			},
			"options": [
				{
					"name": "Users List",
					"value": "Users List",
					"action": "List Users",
					"description": "Get a list of all the project's users. You can use the query params to filter your results.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users"
						}
					}
				},
				{
					"name": "Users Create",
					"value": "Users Create",
					"action": "Create User",
					"description": "Create a new user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users"
						}
					}
				},
				{
					"name": "Users Delete",
					"value": "Users Delete",
					"action": "Delete User",
					"description": "Delete a user by its unique ID.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Users Get",
					"value": "Users Get",
					"action": "Get User",
					"description": "Get a user by its unique ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Users Get Logs",
					"value": "Users Get Logs",
					"action": "Get User Logs",
					"description": "Get a user activity logs list by its unique ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"userId\"]}}/logs"
						}
					}
				},
				{
					"name": "Users Get Prefs",
					"value": "Users Get Prefs",
					"action": "Get User Preferences",
					"description": "Get the user preferences by its unique ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"userId\"]}}/prefs"
						}
					}
				},
				{
					"name": "Users Update Prefs",
					"value": "Users Update Prefs",
					"action": "Update User Preferences",
					"description": "Update the user preferences by its unique ID. You can pass only the specific settings you wish to update.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"userId\"]}}/prefs"
						}
					}
				},
				{
					"name": "Users Delete Sessions",
					"value": "Users Delete Sessions",
					"action": "Delete User Sessions",
					"description": "Delete all user's sessions by using the user's unique ID.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"userId\"]}}/sessions"
						}
					}
				},
				{
					"name": "Users Get Sessions",
					"value": "Users Get Sessions",
					"action": "Get User Sessions",
					"description": "Get the user sessions list by its unique ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"userId\"]}}/sessions"
						}
					}
				},
				{
					"name": "Users Delete Session",
					"value": "Users Delete Session",
					"action": "Delete User Session",
					"description": "Delete a user sessions by its unique ID.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"userId\"]}}/sessions/{{$parameter[\"sessionId\"]}}"
						}
					}
				},
				{
					"name": "Users Update Status",
					"value": "Users Update Status",
					"action": "Update User Status",
					"description": "Update the user status by its unique ID.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"userId\"]}}/status"
						}
					}
				},
				{
					"name": "Users Update Verification",
					"value": "Users Update Verification",
					"action": "Update Email Verification",
					"description": "Update the user email verification status by its unique ID.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"userId\"]}}/verification"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users List"
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
						"Users"
					],
					"operation": [
						"Users List"
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
						"Users"
					],
					"operation": [
						"Users List"
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
						"Users"
					],
					"operation": [
						"Users List"
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
						"Users"
					],
					"operation": [
						"Users List"
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
						"Users"
					],
					"operation": [
						"Users List"
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
						"Users"
					],
					"operation": [
						"Users List"
					]
				}
			}
		},
		{
			"displayName": "POST /users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "User email.",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Create"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "User name. Max length: 128 chars.",
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
						"Users"
					],
					"operation": [
						"Users Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"description": "User password. Must be between 6 to 32 chars.",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Create"
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
						"Users"
					],
					"operation": [
						"Users Create"
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
						"Users"
					],
					"operation": [
						"Users Create"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Delete"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "User unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Delete"
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
						"Users"
					],
					"operation": [
						"Users Delete"
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
						"Users"
					],
					"operation": [
						"Users Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Get"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "User unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Get"
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
						"Users"
					],
					"operation": [
						"Users Get"
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
						"Users"
					],
					"operation": [
						"Users Get"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{userId}/logs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Get Logs"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "User unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Get Logs"
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
						"Users"
					],
					"operation": [
						"Users Get Logs"
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
						"Users"
					],
					"operation": [
						"Users Get Logs"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{userId}/prefs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Get Prefs"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "User unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Get Prefs"
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
						"Users"
					],
					"operation": [
						"Users Get Prefs"
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
						"Users"
					],
					"operation": [
						"Users Get Prefs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{userId}/prefs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Update Prefs"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "User unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Update Prefs"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Prefs",
			"name": "prefs",
			"type": "json",
			"default": "{}",
			"description": "Prefs key-value JSON object.",
			"routing": {
				"send": {
					"property": "prefs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Update Prefs"
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
						"Users"
					],
					"operation": [
						"Users Update Prefs"
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
						"Users"
					],
					"operation": [
						"Users Update Prefs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{userId}/sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Delete Sessions"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "User unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Delete Sessions"
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
						"Users"
					],
					"operation": [
						"Users Delete Sessions"
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
						"Users"
					],
					"operation": [
						"Users Delete Sessions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{userId}/sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Get Sessions"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "User unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Get Sessions"
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
						"Users"
					],
					"operation": [
						"Users Get Sessions"
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
						"Users"
					],
					"operation": [
						"Users Get Sessions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{userId}/sessions/{sessionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Delete Session"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "User unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Delete Session"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"required": true,
			"description": "User unique session ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Delete Session"
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
						"Users"
					],
					"operation": [
						"Users Delete Session"
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
						"Users"
					],
					"operation": [
						"Users Delete Session"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{userId}/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Update Status"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "User unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Update Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Status",
			"name": "status",
			"type": "number",
			"default": 0,
			"description": "User Status code. To activate the user pass 1, to block the user pass 2 and for disabling the user pass 0",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Update Status"
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
						"Users"
					],
					"operation": [
						"Users Update Status"
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
						"Users"
					],
					"operation": [
						"Users Update Status"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{userId}/verification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Update Verification"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "User unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Update Verification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email Verification",
			"name": "emailVerification",
			"type": "boolean",
			"default": true,
			"description": "User Email Verification Status.",
			"routing": {
				"send": {
					"property": "emailVerification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Update Verification"
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
						"Users"
					],
					"operation": [
						"Users Update Verification"
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
						"Users"
					],
					"operation": [
						"Users Update Verification"
					]
				}
			}
		},
];
