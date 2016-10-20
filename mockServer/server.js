/**
 * @file: mockServer
 * @author: wangming@lianjia.com
 */
var http = require('http')
var content = 'get data success~'

var srv = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/text'})
  res.end(content)
})

srv.listen(8888, function () {
  console.log('listening on localhost:8888')
})
