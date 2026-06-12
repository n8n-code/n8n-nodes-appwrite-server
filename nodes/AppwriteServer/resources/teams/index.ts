import type { INodeProperties } from 'n8n-workflow';

export const teamsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					]
				}
			},
			"options": [
				{
					"name": "Teams List",
					"value": "Teams List",
					"action": "List Teams",
					"description": "Get a list of all the current user teams. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's teams. [Learn more about different API modes](/docs/admin).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams"
						}
					}
				},
				{
					"name": "Teams Create",
					"value": "Teams Create",
					"action": "Create Team",
					"description": "Create a new team. The user who creates the team will automatically be assigned as the owner of the team. The team owner can invite new members, who will be able add new owners and update or delete the team from your project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams"
						}
					}
				},
				{
					"name": "Teams Delete",
					"value": "Teams Delete",
					"action": "Delete Team",
					"description": "Delete a team by its unique ID. Only team owners have write access for this resource.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"teamId\"]}}"
						}
					}
				},
				{
					"name": "Teams Get",
					"value": "Teams Get",
					"action": "Get Team",
					"description": "Get a team by its unique ID. All team members have read access for this resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"teamId\"]}}"
						}
					}
				},
				{
					"name": "Teams Update",
					"value": "Teams Update",
					"action": "Update Team",
					"description": "Update a team by its unique ID. Only team owners have write access for this resource.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/teams/{{$parameter[\"teamId\"]}}"
						}
					}
				},
				{
					"name": "Teams Get Memberships",
					"value": "Teams Get Memberships",
					"action": "Get Team Memberships",
					"description": "Get a team members by the team unique ID. All team members have read access for this list of resources.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"teamId\"]}}/memberships"
						}
					}
				},
				{
					"name": "Teams Create Membership",
					"value": "Teams Create Membership",
					"action": "Create Team Membership",
					"description": "Use this endpoint to invite a new member to join your team. If initiated from Client SDK, an email with a link to join the team will be sent to the new member's email address if the member doesn't exist in the project it will be created automatically. If initiated from server side SDKs, new member will automatically be added to the team.\n\nUse the 'URL' parameter to redirect the user from the invitation email back to your app. When the user is redirected, use the [Update Team Membership Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow the user to accept the invitation to the team.  While calling from side SDKs the redirect url can be empty string.\n\nPlease note that in order to avoid a [Redirect Attacks](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URL's are the once from domains you have set when added your platforms in the console interface.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"teamId\"]}}/memberships"
						}
					}
				},
				{
					"name": "Teams Delete Membership",
					"value": "Teams Delete Membership",
					"action": "Delete Team Membership",
					"description": "This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"teamId\"]}}/memberships/{{$parameter[\"membershipId\"]}}"
						}
					}
				},
				{
					"name": "Teams Update Membership Roles",
					"value": "Teams Update Membership Roles",
					"action": "Update Membership Roles",
					"description": "Update Membership Roles",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"teamId\"]}}/memberships/{{$parameter[\"membershipId\"]}}"
						}
					}
				},
				{
					"name": "Teams Update Membership Status",
					"value": "Teams Update Membership Status",
					"action": "Update Team Membership Status",
					"description": "Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email recieved by the user.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"teamId\"]}}/memberships/{{$parameter[\"membershipId\"]}}/status"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /teams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams List"
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
						"Teams"
					],
					"operation": [
						"Teams List"
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
						"Teams"
					],
					"operation": [
						"Teams List"
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
						"Teams"
					],
					"operation": [
						"Teams List"
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
						"Teams"
					],
					"operation": [
						"Teams List"
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
						"Teams"
					],
					"operation": [
						"Teams List"
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
						"Teams"
					],
					"operation": [
						"Teams List"
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
						"Teams"
					],
					"operation": [
						"Teams List"
					]
				}
			}
		},
		{
			"displayName": "POST /teams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Create"
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
			"description": "Team name. Max length: 128 chars.",
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
						"Teams"
					],
					"operation": [
						"Teams Create"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Array of strings. Use this param to set the roles in the team for the user who created it. The default role is **owner**. A role can be any string. Learn more about [roles and permissions](/docs/permissions). Max length for each role is 32 chars.",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Create"
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
						"Teams"
					],
					"operation": [
						"Teams Create"
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
						"Teams"
					],
					"operation": [
						"Teams Create"
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
						"Teams"
					],
					"operation": [
						"Teams Create"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{teamId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Delete"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "teamId",
			"required": true,
			"description": "Team unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Delete"
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
						"Teams"
					],
					"operation": [
						"Teams Delete"
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
						"Teams"
					],
					"operation": [
						"Teams Delete"
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
						"Teams"
					],
					"operation": [
						"Teams Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{teamId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Get"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "teamId",
			"required": true,
			"description": "Team unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Get"
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
						"Teams"
					],
					"operation": [
						"Teams Get"
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
						"Teams"
					],
					"operation": [
						"Teams Get"
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
						"Teams"
					],
					"operation": [
						"Teams Get"
					]
				}
			}
		},
		{
			"displayName": "PUT /teams/{teamId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Update"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "teamId",
			"required": true,
			"description": "Team unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Update"
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
			"description": "Team name. Max length: 128 chars.",
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
						"Teams"
					],
					"operation": [
						"Teams Update"
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
						"Teams"
					],
					"operation": [
						"Teams Update"
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
						"Teams"
					],
					"operation": [
						"Teams Update"
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
						"Teams"
					],
					"operation": [
						"Teams Update"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{teamId}/memberships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Get Memberships"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "teamId",
			"required": true,
			"description": "Team unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Get Memberships"
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
						"Teams"
					],
					"operation": [
						"Teams Get Memberships"
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
						"Teams"
					],
					"operation": [
						"Teams Get Memberships"
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
						"Teams"
					],
					"operation": [
						"Teams Get Memberships"
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
						"Teams"
					],
					"operation": [
						"Teams Get Memberships"
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
						"Teams"
					],
					"operation": [
						"Teams Get Memberships"
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
						"Teams"
					],
					"operation": [
						"Teams Get Memberships"
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
						"Teams"
					],
					"operation": [
						"Teams Get Memberships"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{teamId}/memberships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Create Membership"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "teamId",
			"required": true,
			"description": "Team unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Create Membership"
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
			"description": "New team member email.",
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
						"Teams"
					],
					"operation": [
						"Teams Create Membership"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "New team member name. Max length: 128 chars.",
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
						"Teams"
					],
					"operation": [
						"Teams Create Membership"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](/docs/permissions). Max length for each role is 32 chars.",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Create Membership"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "",
			"description": "URL to redirect the user back to your app from the invitation email.  Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Create Membership"
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
						"Teams"
					],
					"operation": [
						"Teams Create Membership"
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
						"Teams"
					],
					"operation": [
						"Teams Create Membership"
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
						"Teams"
					],
					"operation": [
						"Teams Create Membership"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{teamId}/memberships/{membershipId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Delete Membership"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "teamId",
			"required": true,
			"description": "Team unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Delete Membership"
					]
				}
			}
		},
		{
			"displayName": "Membership ID",
			"name": "membershipId",
			"required": true,
			"description": "Membership ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Delete Membership"
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
						"Teams"
					],
					"operation": [
						"Teams Delete Membership"
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
						"Teams"
					],
					"operation": [
						"Teams Delete Membership"
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
						"Teams"
					],
					"operation": [
						"Teams Delete Membership"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{teamId}/memberships/{membershipId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Update Membership Roles"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "teamId",
			"required": true,
			"description": "Team unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Update Membership Roles"
					]
				}
			}
		},
		{
			"displayName": "Membership ID",
			"name": "membershipId",
			"required": true,
			"description": "Membership ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Update Membership Roles"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](/docs/permissions). Max length for each role is 32 chars.",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Update Membership Roles"
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
						"Teams"
					],
					"operation": [
						"Teams Update Membership Roles"
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
						"Teams"
					],
					"operation": [
						"Teams Update Membership Roles"
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
						"Teams"
					],
					"operation": [
						"Teams Update Membership Roles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{teamId}/memberships/{membershipId}/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Update Membership Status"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "teamId",
			"required": true,
			"description": "Team unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Update Membership Status"
					]
				}
			}
		},
		{
			"displayName": "Membership ID",
			"name": "membershipId",
			"required": true,
			"description": "Membership ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Update Membership Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Secret",
			"name": "secret",
			"type": "string",
			"default": "",
			"description": "Secret key.",
			"routing": {
				"send": {
					"property": "secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Update Membership Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User ID",
			"name": "userId",
			"type": "string",
			"default": "",
			"description": "User unique ID.",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Teams Update Membership Status"
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
						"Teams"
					],
					"operation": [
						"Teams Update Membership Status"
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
						"Teams"
					],
					"operation": [
						"Teams Update Membership Status"
					]
				}
			}
		},
];
