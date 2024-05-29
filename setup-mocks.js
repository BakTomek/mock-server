const mockserverClient = require('mockserver-client').mockServerClient;
const client = mockserverClient("localhost", 1080);

const staticUsers = [
    {
        id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
        address: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    {
        id: "2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        address: "456 Maple Ave",
        city: "Othertown",
        country: "Canada"
    }
];

client
    .mockAnyResponse({
        httpRequest: {
            method: 'GET',
            path: '/api/users',
        },
        httpResponse: {
            statusCode: 200,
            body: JSON.stringify(staticUsers),
        },
    })
    .then(() => {
        console.log('Mock for GET /api/users setup');
    });

client
    .mockAnyResponse({
        httpRequest: {
            method: 'POST',
            path: '/api/users',
            body: {
                type: "JSON",
                json: {
                    name: "New User",
                    email: "new.user@example.com",
                    address: "789 Elm St",
                    city: "Newcity",
                    country: "UK"
                }
            }
        },
        httpResponse: {
            statusCode: 201,
            body: JSON.stringify({
                id: "3",
                name: "New User",
                email: "new.user@example.com",
                address: "789 Elm St",
                city: "Newcity",
                country: "UK"
            }),
        },
    })
    .then(() => {
        console.log('Mock for POST /api/users setup');
    });

client
    .mockAnyResponse({
        httpRequest: {
            method: 'PUT',
            path: '/api/users/1',
            body: {
                type: "JSON",
                json: {
                    name: "John Doe Updated",
                    email: "john.doe.updated@example.com",
                    address: "123 Main St",
                    city: "Anytown",
                    country: "USA"
                }
            }
        },
        httpResponse: {
            statusCode: 200,
            body: JSON.stringify({
                id: "1",
                name: "John Doe Updated",
                email: "john.doe.updated@example.com",
                address: "123 Main St",
                city: "Anytown",
                country: "USA"
            }),
        },
    })
    .then(() => {
        console.log('Mock for PUT /api/users/1 setup');
    });
