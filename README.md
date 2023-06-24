# social-media-poc-BWA-124

Executar a aplicação
```sh
npm run start
```

## Paths - Users

| Função | Caminho |
| ------ | ------ |
| PUT | /api/users/:id |
| GET | /api/users/:id |

### Atualização de um usuário por id
> PUT /api/users/id
```sh
{
  "fullname" : "string",
  "username" : "string",
  "email" : "string",
  "password" : "string"
}
```

### Busca de um usuário por id
> GET /api/users/id

## Paths - Auth

| Função | Caminho |
| ------ | ------ |
| POST | /api/auth/register |
| POST | /api/auth/login |

### Criação de um usuário
> POST /api/auth/register
```sh
{
  "fullname" : "string",
  "username" : "string",
  "email" : "string",
  "password" : "string"
}
```

### Login de um usuário
> POST /api/auth/login
```sh
{
  "email" : "string",
  "password" : "string"
}
```


## Paths - Post

| Função | Caminho |
| ------ | ------ |
| POST | /api/posts/create |
| PUT | /api/posts/update/:id |
| GET | /api/posts/timeline |

### Criação de uma publicação
> POST /api/posts/create
```sh
{
  "userId": "string",
  "description": "string"
}
```

### Atualização de uma publicação
> POST /api/posts/update/:id
```sh
{
  "userId": "string",
  "description": "string"
}
```

### Busca todas as publicações
> POST /api/posts/timeline









