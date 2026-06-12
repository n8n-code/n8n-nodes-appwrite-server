import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AppwriteServerApi implements ICredentialType {
        name = 'N8nDevAppwriteServerApi';

        displayName = 'Appwrite Server API';

        icon: Icon = { light: 'file:../nodes/AppwriteServer/appwrite-server.svg', dark: 'file:../nodes/AppwriteServer/appwrite-server.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://appwrite.io/v1',
                        required: true,
                        placeholder: 'https://appwrite.io/v1',
                        description: 'The base URL of your Appwrite Server API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-Appwrite-JWT': '={{$credentials.apiKey}}',
                        },
                },
        };


}
