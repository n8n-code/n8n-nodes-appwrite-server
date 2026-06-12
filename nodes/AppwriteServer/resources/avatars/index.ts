import type { INodeProperties } from 'n8n-workflow';

export const avatarsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					]
				}
			},
			"options": [
				{
					"name": "Avatars Get Browser",
					"value": "Avatars Get Browser",
					"action": "Get Browser Icon",
					"description": "You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user /account/sessions endpoint. Use width, height and quality arguments to change the output settings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/avatars/browsers/{{$parameter[\"code\"]}}"
						}
					}
				},
				{
					"name": "Avatars Get Credit Card",
					"value": "Avatars Get Credit Card",
					"action": "Get Credit Card Icon",
					"description": "The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/avatars/credit-cards/{{$parameter[\"code\"]}}"
						}
					}
				},
				{
					"name": "Avatars Get Favicon",
					"value": "Avatars Get Favicon",
					"action": "Get Favicon",
					"description": "Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/avatars/favicon"
						}
					}
				},
				{
					"name": "Avatars Get Flag",
					"value": "Avatars Get Flag",
					"action": "Get Country Flag",
					"description": "You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/avatars/flags/{{$parameter[\"code\"]}}"
						}
					}
				},
				{
					"name": "Avatars Get Image",
					"value": "Avatars Get Image",
					"action": "Get Image from URL",
					"description": "Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/avatars/image"
						}
					}
				},
				{
					"name": "Avatars Get Initials",
					"value": "Avatars Get Initials",
					"action": "Get User Initials",
					"description": "Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.\n\nYou can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/avatars/initials"
						}
					}
				},
				{
					"name": "Avatars Get QR",
					"value": "Avatars Get QR",
					"action": "Get QR Code",
					"description": "Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/avatars/qr"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /avatars/browsers/{code}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get Browser"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"required": true,
			"description": "Browser Code.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get Browser"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"description": "Image width. Pass an integer between 0 to 2000. Defaults to 100.",
			"default": 100,
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Browser"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"description": "Image height. Pass an integer between 0 to 2000. Defaults to 100.",
			"default": 100,
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Browser"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"description": "Image quality. Pass an integer between 0 to 100. Defaults to 100.",
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Browser"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Browser"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Browser"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Browser"
					]
				}
			}
		},
		{
			"displayName": "GET /avatars/credit-cards/{code}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get Credit Card"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"required": true,
			"description": "Credit Card Code. Possible values: amex, argencard, cabal, censosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, union-china-pay, visa, mir, maestro.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get Credit Card"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"description": "Image width. Pass an integer between 0 to 2000. Defaults to 100.",
			"default": 100,
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Credit Card"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"description": "Image height. Pass an integer between 0 to 2000. Defaults to 100.",
			"default": 100,
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Credit Card"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"description": "Image quality. Pass an integer between 0 to 100. Defaults to 100.",
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Credit Card"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Credit Card"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Credit Card"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Credit Card"
					]
				}
			}
		},
		{
			"displayName": "GET /avatars/favicon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get Favicon"
					]
				}
			}
		},
		{
			"displayName": "URL",
			"name": "url",
			"required": true,
			"description": "Website URL which you want to fetch the favicon from.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "url",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get Favicon"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Favicon"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Favicon"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Favicon"
					]
				}
			}
		},
		{
			"displayName": "GET /avatars/flags/{code}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get Flag"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"required": true,
			"description": "Country Code. ISO Alpha-2 country code format.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get Flag"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"description": "Image width. Pass an integer between 0 to 2000. Defaults to 100.",
			"default": 100,
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Flag"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"description": "Image height. Pass an integer between 0 to 2000. Defaults to 100.",
			"default": 100,
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Flag"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"description": "Image quality. Pass an integer between 0 to 100. Defaults to 100.",
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Flag"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Flag"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Flag"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Flag"
					]
				}
			}
		},
		{
			"displayName": "GET /avatars/image",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get Image"
					]
				}
			}
		},
		{
			"displayName": "URL",
			"name": "url",
			"required": true,
			"description": "Image URL which you want to crop.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "url",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get Image"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"description": "Resize preview image width, Pass an integer between 0 to 2000.",
			"default": 400,
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Image"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"description": "Resize preview image height, Pass an integer between 0 to 2000.",
			"default": 400,
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Image"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Image"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Image"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Image"
					]
				}
			}
		},
		{
			"displayName": "GET /avatars/initials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get Initials"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Full Name. When empty, current user name or email will be used. Max length: 128 chars.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get Initials"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"description": "Image width. Pass an integer between 0 to 2000. Defaults to 100.",
			"default": 500,
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Initials"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"description": "Image height. Pass an integer between 0 to 2000. Defaults to 100.",
			"default": 500,
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Initials"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"description": "Changes text color. By default a random color will be picked and stay will persistent to the given name.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "color",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get Initials"
					]
				}
			}
		},
		{
			"displayName": "Background",
			"name": "background",
			"description": "Changes background color. By default a random color will be picked and stay will persistent to the given name.",
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Initials"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Initials"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Initials"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get Initials"
					]
				}
			}
		},
		{
			"displayName": "GET /avatars/qr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get QR"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"required": true,
			"description": "Plain text to be converted to QR code image.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "text",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get QR"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "QR code size. Pass an integer between 0 to 1000. Defaults to 400.",
			"default": 400,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get QR"
					]
				}
			}
		},
		{
			"displayName": "Margin",
			"name": "margin",
			"description": "Margin from edge. Pass an integer between 0 to 10. Defaults to 1.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "margin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get QR"
					]
				}
			}
		},
		{
			"displayName": "Download",
			"name": "download",
			"description": "Return resulting image with 'Content-Disposition: attachment ' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "download",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Avatars"
					],
					"operation": [
						"Avatars Get QR"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get QR"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get QR"
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
						"Avatars"
					],
					"operation": [
						"Avatars Get QR"
					]
				}
			}
		},
];
