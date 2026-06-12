import type { INodeProperties } from 'n8n-workflow';

export const localeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Locale"
					]
				}
			},
			"options": [
				{
					"name": "Locale Get",
					"value": "Locale Get",
					"action": "Get User Locale",
					"description": "Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.\n\n([IP Geolocation by DB-IP](https://db-ip.com))",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/locale"
						}
					}
				},
				{
					"name": "Locale Get Continents",
					"value": "Locale Get Continents",
					"action": "List Continents",
					"description": "List of all continents. You can use the locale header to get the data in a supported language.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/locale/continents"
						}
					}
				},
				{
					"name": "Locale Get Countries",
					"value": "Locale Get Countries",
					"action": "List Countries",
					"description": "List of all countries. You can use the locale header to get the data in a supported language.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/locale/countries"
						}
					}
				},
				{
					"name": "Locale Get Countries EU",
					"value": "Locale Get Countries EU",
					"action": "List EU Countries",
					"description": "List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/locale/countries/eu"
						}
					}
				},
				{
					"name": "Locale Get Countries Phones",
					"value": "Locale Get Countries Phones",
					"action": "List Countries Phone Codes",
					"description": "List of all countries phone codes. You can use the locale header to get the data in a supported language.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/locale/countries/phones"
						}
					}
				},
				{
					"name": "Locale Get Currencies",
					"value": "Locale Get Currencies",
					"action": "List Currencies",
					"description": "List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/locale/currencies"
						}
					}
				},
				{
					"name": "Locale Get Languages",
					"value": "Locale Get Languages",
					"action": "List Languages",
					"description": "List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/locale/languages"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /locale",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Locale"
					],
					"operation": [
						"Locale Get"
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
						"Locale"
					],
					"operation": [
						"Locale Get"
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
						"Locale"
					],
					"operation": [
						"Locale Get"
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
						"Locale"
					],
					"operation": [
						"Locale Get"
					]
				}
			}
		},
		{
			"displayName": "GET /locale/continents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Locale"
					],
					"operation": [
						"Locale Get Continents"
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
						"Locale"
					],
					"operation": [
						"Locale Get Continents"
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
						"Locale"
					],
					"operation": [
						"Locale Get Continents"
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
						"Locale"
					],
					"operation": [
						"Locale Get Continents"
					]
				}
			}
		},
		{
			"displayName": "GET /locale/countries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Locale"
					],
					"operation": [
						"Locale Get Countries"
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
						"Locale"
					],
					"operation": [
						"Locale Get Countries"
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
						"Locale"
					],
					"operation": [
						"Locale Get Countries"
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
						"Locale"
					],
					"operation": [
						"Locale Get Countries"
					]
				}
			}
		},
		{
			"displayName": "GET /locale/countries/eu",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Locale"
					],
					"operation": [
						"Locale Get Countries EU"
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
						"Locale"
					],
					"operation": [
						"Locale Get Countries EU"
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
						"Locale"
					],
					"operation": [
						"Locale Get Countries EU"
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
						"Locale"
					],
					"operation": [
						"Locale Get Countries EU"
					]
				}
			}
		},
		{
			"displayName": "GET /locale/countries/phones",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Locale"
					],
					"operation": [
						"Locale Get Countries Phones"
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
						"Locale"
					],
					"operation": [
						"Locale Get Countries Phones"
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
						"Locale"
					],
					"operation": [
						"Locale Get Countries Phones"
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
						"Locale"
					],
					"operation": [
						"Locale Get Countries Phones"
					]
				}
			}
		},
		{
			"displayName": "GET /locale/currencies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Locale"
					],
					"operation": [
						"Locale Get Currencies"
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
						"Locale"
					],
					"operation": [
						"Locale Get Currencies"
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
						"Locale"
					],
					"operation": [
						"Locale Get Currencies"
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
						"Locale"
					],
					"operation": [
						"Locale Get Currencies"
					]
				}
			}
		},
		{
			"displayName": "GET /locale/languages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Locale"
					],
					"operation": [
						"Locale Get Languages"
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
						"Locale"
					],
					"operation": [
						"Locale Get Languages"
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
						"Locale"
					],
					"operation": [
						"Locale Get Languages"
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
						"Locale"
					],
					"operation": [
						"Locale Get Languages"
					]
				}
			}
		},
];
