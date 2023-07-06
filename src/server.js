import http from 'node:http'

const server = http.createServer((req,res)=>{
  const { method, url } = req
  console.log(method, url)

  if(method === 'GET' && url === '/users'){
    //Early return
      return res.end('Listagem de usuários')
  }

  if(method === 'POST' && url === '/users'){
    return res.end('Criação de usuário')
  }
  
  return res.end('Hello Clara')
})


server.listen(3333)