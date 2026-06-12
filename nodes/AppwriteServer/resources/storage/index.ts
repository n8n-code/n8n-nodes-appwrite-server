import type { INodeProperties } from 'n8n-workflow';

export const storageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					]
				}
			},
			"options": [
				{
					"name": "Storage List Files",
					"value": "Storage List Files",
					"action": "List Files",
					"description": "Get a list of all the user files. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's files. [Learn more about different API modes](/docs/admin).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage/files"
						}
					}
				},
				{
					"name": "Storage Create File",
					"value": "Storage Create File",
					"action": "Create File",
					"description": "Create a new file. The user who creates the file will automatically be assigned to read and write access unless he has passed custom values for read and write arguments.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage/files"
						}
					}
				},
				{
					"name": "Storage Delete File",
					"value": "Storage Delete File",
					"action": "Delete File",
					"description": "Delete a file by its unique ID. Only users with write permissions have access to delete this resource.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/storage/files/{{$parameter[\"fileId\"]}}"
						}
					}
				},
				{
					"name": "Storage Get File",
					"value": "Storage Get File",
					"action": "Get File",
					"description": "Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage/files/{{$parameter[\"fileId\"]}}"
						}
					}
				},
				{
					"name": "Storage Update File",
					"value": "Storage Update File",
					"action": "Update File",
					"description": "Update a file by its unique ID. Only users with write permissions have access to update this resource.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/storage/files/{{$parameter[\"fileId\"]}}"
						}
					}
				},
				{
					"name": "Storage Get File Download",
					"value": "Storage Get File Download",
					"action": "Get File for Download",
					"description": "Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage/files/{{$parameter[\"fileId\"]}}/download"
						}
					}
				},
				{
					"name": "Storage Get File Preview",
					"value": "Storage Get File Preview",
					"action": "Get File Preview",
					"description": "Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage/files/{{$parameter[\"fileId\"]}}/preview"
						}
					}
				},
				{
					"name": "Storage Get File View",
					"value": "Storage Get File View",
					"action": "Get File for View",
					"description": "Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage/files/{{$parameter[\"fileId\"]}}/view"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /storage/files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage List Files"
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
						"Storage"
					],
					"operation": [
						"Storage List Files"
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
						"Storage"
					],
					"operation": [
						"Storage List Files"
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
						"Storage"
					],
					"operation": [
						"Storage List Files"
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
						"Storage"
					],
					"operation": [
						"Storage List Files"
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
						"Storage"
					],
					"operation": [
						"Storage List Files"
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
						"Storage"
					],
					"operation": [
						"Storage List Files"
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
						"Storage"
					],
					"operation": [
						"Storage List Files"
					]
				}
			}
		},
		{
			"displayName": "POST /storage/files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Create File"
					]
				}
			}
		},
		{
			"displayName": "POST /storage/files<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Create File"
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
						"Storage"
					],
					"operation": [
						"Storage Create File"
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
						"Storage"
					],
					"operation": [
						"Storage Create File"
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
						"Storage"
					],
					"operation": [
						"Storage Create File"
					]
				}
			}
		},
		{
			"displayName": "DELETE /storage/files/{fileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Delete File"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "fileId",
			"required": true,
			"description": "File unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Delete File"
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
						"Storage"
					],
					"operation": [
						"Storage Delete File"
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
						"Storage"
					],
					"operation": [
						"Storage Delete File"
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
						"Storage"
					],
					"operation": [
						"Storage Delete File"
					]
				}
			}
		},
		{
			"displayName": "GET /storage/files/{fileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "fileId",
			"required": true,
			"description": "File unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File"
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
						"Storage"
					],
					"operation": [
						"Storage Get File"
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
						"Storage"
					],
					"operation": [
						"Storage Get File"
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
						"Storage"
					],
					"operation": [
						"Storage Get File"
					]
				}
			}
		},
		{
			"displayName": "PUT /storage/files/{fileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Update File"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "fileId",
			"required": true,
			"description": "File unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Update File"
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
						"Storage"
					],
					"operation": [
						"Storage Update File"
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
						"Storage"
					],
					"operation": [
						"Storage Update File"
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
						"Storage"
					],
					"operation": [
						"Storage Update File"
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
						"Storage"
					],
					"operation": [
						"Storage Update File"
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
						"Storage"
					],
					"operation": [
						"Storage Update File"
					]
				}
			}
		},
		{
			"displayName": "GET /storage/files/{fileId}/download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Download"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "fileId",
			"required": true,
			"description": "File unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Download"
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
						"Storage"
					],
					"operation": [
						"Storage Get File Download"
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
						"Storage"
					],
					"operation": [
						"Storage Get File Download"
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
						"Storage"
					],
					"operation": [
						"Storage Get File Download"
					]
				}
			}
		},
		{
			"displayName": "GET /storage/files/{fileId}/preview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "fileId",
			"required": true,
			"description": "File unique ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"description": "Resize preview image width, Pass an integer between 0 to 4000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "width",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"description": "Resize preview image height, Pass an integer between 0 to 4000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "height",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
					]
				}
			}
		},
		{
			"displayName": "Gravity",
			"name": "gravity",
			"description": "Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right",
			"default": "center",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "gravity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"description": "Preview image quality. Pass an integer between 0 to 100. Defaults to 100.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quality",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
					]
				}
			}
		},
		{
			"displayName": "Border Width",
			"name": "borderWidth",
			"description": "Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "borderWidth",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
					]
				}
			}
		},
		{
			"displayName": "Border Color",
			"name": "borderColor",
			"description": "Preview image border color. Use a valid HEX color, no # is needed for prefix.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "borderColor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
					]
				}
			}
		},
		{
			"displayName": "Border Radius",
			"name": "borderRadius",
			"description": "Preview image border radius in pixels. Pass an integer between 0 to 4000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "borderRadius",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
					]
				}
			}
		},
		{
			"displayName": "Opacity",
			"name": "opacity",
			"description": "Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "opacity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
					]
				}
			}
		},
		{
			"displayName": "Rotation",
			"name": "rotation",
			"description": "Preview image rotation in degrees. Pass an integer between 0 and 360.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rotation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
					]
				}
			}
		},
		{
			"displayName": "Background",
			"name": "background",
			"description": "Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "background",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
					]
				}
			}
		},
		{
			"displayName": "Output",
			"name": "output",
			"description": "Output format type (jpeg, jpg, png, gif and webp).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "output",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
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
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
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
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
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
						"Storage"
					],
					"operation": [
						"Storage Get File Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /storage/files/{fileId}/view",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File View"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "fileId",
			"required": true,
			"description": "File unique ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Storage Get File View"
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
						"Storage"
					],
					"operation": [
						"Storage Get File View"
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
						"Storage"
					],
					"operation": [
						"Storage Get File View"
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
						"Storage"
					],
					"operation": [
						"Storage Get File View"
					]
				}
			}
		},
];
