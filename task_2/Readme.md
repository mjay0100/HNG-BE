## user UML design that represents the structure and relationships of my user api

package "User" {
[User]
}

package "Routes" {
[POST /api/]
[GET /api/]
[PUT /api//:id]
[DELETE /api//:id]
}

[User] -- [POST /api/]
[User] -- [GET /api/]
[User] -- [PUT /api/:id]
[User] -- [DELETE /api/:id]
