const http = require('http');

const testEndpoints = [
  { path: '/api/auth/login', method: 'POST' },
  { path: '/api/auth/registration', method: 'POST' },
  { path: '/api/product/list', method: 'GET' },
  { path: '/api/user/getcurrentuser', method: 'GET' }
];

console.log('Testing server endpoints...\n');

testEndpoints.forEach(endpoint => {
  const options = {
    hostname: 'localhost',
    port: 5000,
    path: endpoint.path,
    method: endpoint.method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const req = http.request(options, (res) => {
    console.log(`${endpoint.method} ${endpoint.path} - Status: ${res.statusCode}`);
  });

  req.on('error', (err) => {
    console.log(`${endpoint.method} ${endpoint.path} - Error: ${err.message}`);
  });

  if (endpoint.method === 'POST') {
    req.write(JSON.stringify({ test: 'data' }));
  }

  req.end();
});
