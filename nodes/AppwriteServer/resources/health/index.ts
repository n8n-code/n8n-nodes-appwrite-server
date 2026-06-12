import type { INodeProperties } from 'n8n-workflow';

export const healthDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					]
				}
			},
			"options": [
				{
					"name": "Health Get",
					"value": "Health Get",
					"action": "Get HTTP",
					"description": "Check the Appwrite HTTP server is up and responsive.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health"
						}
					}
				},
				{
					"name": "Health Get Anti Virus",
					"value": "Health Get Anti Virus",
					"action": "Get Anti virus",
					"description": "Check the Appwrite Anti Virus server is up and connection is successful.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health/anti-virus"
						}
					}
				},
				{
					"name": "Health Get Cache",
					"value": "Health Get Cache",
					"action": "Get Cache",
					"description": "Check the Appwrite in-memory cache server is up and connection is successful.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health/cache"
						}
					}
				},
				{
					"name": "Health Get DB",
					"value": "Health Get DB",
					"action": "Get DB",
					"description": "Check the Appwrite database server is up and connection is successful.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health/db"
						}
					}
				},
				{
					"name": "Health Get Queue Certificates",
					"value": "Health Get Queue Certificates",
					"action": "Get Certificate Queue",
					"description": "Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health/queue/certificates"
						}
					}
				},
				{
					"name": "Health Get Queue Functions",
					"value": "Health Get Queue Functions",
					"action": "Get Functions Queue",
					"description": "Get Functions Queue",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health/queue/functions"
						}
					}
				},
				{
					"name": "Health Get Queue Logs",
					"value": "Health Get Queue Logs",
					"action": "Get Logs Queue",
					"description": "Get the number of logs that are waiting to be processed in the Appwrite internal queue server.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health/queue/logs"
						}
					}
				},
				{
					"name": "Health Get Queue Tasks",
					"value": "Health Get Queue Tasks",
					"action": "Get Tasks Queue",
					"description": "Get the number of tasks that are waiting to be processed in the Appwrite internal queue server.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health/queue/tasks"
						}
					}
				},
				{
					"name": "Health Get Queue Usage",
					"value": "Health Get Queue Usage",
					"action": "Get Usage Queue",
					"description": "Get the number of usage stats that are waiting to be processed in the Appwrite internal queue server.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health/queue/usage"
						}
					}
				},
				{
					"name": "Health Get Queue Webhooks",
					"value": "Health Get Queue Webhooks",
					"action": "Get Webhooks Queue",
					"description": "Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health/queue/webhooks"
						}
					}
				},
				{
					"name": "Health Get Storage Local",
					"value": "Health Get Storage Local",
					"action": "Get Local Storage",
					"description": "Check the Appwrite local storage device is up and connection is successful.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health/storage/local"
						}
					}
				},
				{
					"name": "Health Get Time",
					"value": "Health Get Time",
					"action": "Get Time",
					"description": "Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health/time"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /health",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"Health Get"
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
						"Health"
					],
					"operation": [
						"Health Get"
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
						"Health"
					],
					"operation": [
						"Health Get"
					]
				}
			}
		},
		{
			"displayName": "GET /health/anti-virus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"Health Get Anti Virus"
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
						"Health"
					],
					"operation": [
						"Health Get Anti Virus"
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
						"Health"
					],
					"operation": [
						"Health Get Anti Virus"
					]
				}
			}
		},
		{
			"displayName": "GET /health/cache",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"Health Get Cache"
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
						"Health"
					],
					"operation": [
						"Health Get Cache"
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
						"Health"
					],
					"operation": [
						"Health Get Cache"
					]
				}
			}
		},
		{
			"displayName": "GET /health/db",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"Health Get DB"
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
						"Health"
					],
					"operation": [
						"Health Get DB"
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
						"Health"
					],
					"operation": [
						"Health Get DB"
					]
				}
			}
		},
		{
			"displayName": "GET /health/queue/certificates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"Health Get Queue Certificates"
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
						"Health"
					],
					"operation": [
						"Health Get Queue Certificates"
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
						"Health"
					],
					"operation": [
						"Health Get Queue Certificates"
					]
				}
			}
		},
		{
			"displayName": "GET /health/queue/functions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"Health Get Queue Functions"
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
						"Health"
					],
					"operation": [
						"Health Get Queue Functions"
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
						"Health"
					],
					"operation": [
						"Health Get Queue Functions"
					]
				}
			}
		},
		{
			"displayName": "GET /health/queue/logs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"Health Get Queue Logs"
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
						"Health"
					],
					"operation": [
						"Health Get Queue Logs"
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
						"Health"
					],
					"operation": [
						"Health Get Queue Logs"
					]
				}
			}
		},
		{
			"displayName": "GET /health/queue/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"Health Get Queue Tasks"
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
						"Health"
					],
					"operation": [
						"Health Get Queue Tasks"
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
						"Health"
					],
					"operation": [
						"Health Get Queue Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /health/queue/usage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"Health Get Queue Usage"
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
						"Health"
					],
					"operation": [
						"Health Get Queue Usage"
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
						"Health"
					],
					"operation": [
						"Health Get Queue Usage"
					]
				}
			}
		},
		{
			"displayName": "GET /health/queue/webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"Health Get Queue Webhooks"
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
						"Health"
					],
					"operation": [
						"Health Get Queue Webhooks"
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
						"Health"
					],
					"operation": [
						"Health Get Queue Webhooks"
					]
				}
			}
		},
		{
			"displayName": "GET /health/storage/local",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"Health Get Storage Local"
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
						"Health"
					],
					"operation": [
						"Health Get Storage Local"
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
						"Health"
					],
					"operation": [
						"Health Get Storage Local"
					]
				}
			}
		},
		{
			"displayName": "GET /health/time",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"Health Get Time"
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
						"Health"
					],
					"operation": [
						"Health Get Time"
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
						"Health"
					],
					"operation": [
						"Health Get Time"
					]
				}
			}
		},
];
