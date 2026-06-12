import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { accountDescription } from './resources/account';
import { avatarsDescription } from './resources/avatars';
import { databaseDescription } from './resources/database';
import { localeDescription } from './resources/locale';
import { healthDescription } from './resources/health';
import { storageDescription } from './resources/storage';
import { teamsDescription } from './resources/teams';
import { usersDescription } from './resources/users';
import { functionsDescription } from './resources/functions';

export class AppwriteServer implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Appwrite Server',
                name: 'N8nDevAppwriteServer',
                icon: { light: 'file:./appwrite-server.svg', dark: 'file:./appwrite-server.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Appwrite BaaS reduces development time and costs by 70% via REST APIs.',
                defaults: { name: 'Appwrite Server' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAppwriteServerApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Account",
					"value": "Account",
					"description": "The Account service allows you to authenticate and manage a user account."
				},
				{
					"name": "Avatars",
					"value": "Avatars",
					"description": "The Avatars service aims to help you complete everyday tasks related to your app image, icons, and avatars."
				},
				{
					"name": "Database",
					"value": "Database",
					"description": "The Database service allows you to create structured collections of documents, query and filter lists of documents"
				},
				{
					"name": "Locale",
					"value": "Locale",
					"description": "The Locale service allows you to customize your app based on your users' location."
				},
				{
					"name": "Health",
					"value": "Health",
					"description": "The Health service allows you to both validate and monitor your Appwrite server's health."
				},
				{
					"name": "Storage",
					"value": "Storage",
					"description": "The Storage service allows you to manage your project files."
				},
				{
					"name": "Teams",
					"value": "Teams",
					"description": "The Teams service allows you to group users of your project and to enable them to share read and write access to your project resources"
				},
				{
					"name": "Users",
					"value": "Users",
					"description": "The Users service allows you to manage your project users."
				},
				{
					"name": "Functions",
					"value": "Functions",
					"description": "The Functions Service allows you view, create and manage your Cloud Functions."
				}
			],
			"default": ""
		},
		...accountDescription,
		...avatarsDescription,
		...databaseDescription,
		...localeDescription,
		...healthDescription,
		...storageDescription,
		...teamsDescription,
		...usersDescription,
		...functionsDescription
                ],
        };
}
