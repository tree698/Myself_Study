const http = require('http');

const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'Node' },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/courses') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/JSON' });
      res.end(JSON.stringify(courses));
    } else if (method === 'POST') {
      const data = [];
      req.on('data', (chunk) => {
        data.push(chunk);
      });
      req.on('end', () => {
        const course = JSON.parse(Buffer.concat(data).toString());
        courses.push(course);
        res.writeHead(201);
        res.end();
      });
    }
  }
});

server.listen(8080);
