db.newestados.insert({
    "_id" : ObjectId("5e3d8cb3bc1807a50a001808"),
    "nome" : "Acre",
    "sigla" : "AC",
    "regiao" : "Norte"
},
{
    "_id" : ObjectId("5e3d8d34bc1807a50a001809"),
    "nome" : "Alagos",
    "sigla" : "AL",
    "regiao" : "Nordeste",
    "populacao" : 100
},
{
    "_id" : ObjectId("5e3d8ee3bc1807a50a00180a"),
    "name" : "Rio de Janeiro",
    "sigla" : "RJ",
    "regiao" : "Suldeste",
    "cidades" : [
            {
                    "nome" : "Botafogo",
                    "area" : 130,
                    "populacao" : 32323
            }
    ]
},
{
    "_id" : ObjectId("5e3d8f9ebc1807a50a00180b"),
    "name" : "Rio de Janeiro",
    "sigla" : "RJ",
    "regiao" : "Suldeste",
    "cidades" : [
            {
                    "nome" : "Botafogo",
                    "area" : 130,
                    "populacao" : 32323
            }
    ]
},
{
    "_id" : ObjectId("5e3d9487bc1807a50a00180f"),
    "nome" : "Sao Paulo",
    "sigla" : "SP",
    "regiao" : "Sudeste",
    "cidades" : [
            {
                    "_id" : ObjectId("5e3d9487bc1807a50a00180c"),
                    "nome" : "Campinas",
                    "area" : 795.7,
                    "prefeito" : "Jonas Donizette",
                    "populacao" : 1081000
            },
            {
                    "_id" : ObjectId("5e3d9487bc1807a50a00180d"),
                    "name" : "guarulhos",
                    "populacao" : 132584
            },
            {
                    "_id" : ObjectId("5e3d9487bc1807a50a00180e"),
                    "name" : "Sorocaba",
                    "distanciaCapital" : 87,
                    "populacao" : 64441
            }
    ]
});

db.estados.aggregate([
    { $project : {nome: 1, name: 1, "cidades.nome": 1, "cidades.name": 1, _id: 0}}
])

db.estados.aggregate([
    {$project: {populacao: {$sum: "$cidades.populacao"}, sigla: 1, _id: 0}},
    {$group: {_id: null, populacaoTotal: {$sum: "$populacao"}}},
    {$project: {populacaoTotal: 1, _id: 0}}
])

db.estados.aggregate([
    {$match: {"cidades.name": "Sorocaba"}},
    {$unwind: "$cidades"},
    {$match: {"cidades.name": "Sorocaba"}},
    {$project: {_id: 1}}

]).pretty()

db.estados.update({sigla: "SP"}, {$set: {nome: "São Paulo"}})

db.estados.update({sigla: "AL"}, {$set: {cidades: [{nome: "Sergipe"}]}})

db.estados.update({sigla: "SP"}, {$push: {cidades: {nome: "São Paulo", populacao: 100, _id: ObjectId()}}})

db.estados.find({populacao: {$exists: true}}, {nome: 1})

db.estados.update({sigla: "RJ"}, {$set: {populacao: 555000}})

ObjectId("5e3d8ee3bc1807a50a00180a")


// remove 

db.estados.remove({_id: ObjectId("5e3d8ee3bc1807a50a00180a")})
db.estados.remove({populacao: {$exists: true}}, 1) // filtra por populacao e limitado a uma exlusao 

db.estados.remove({populacao: {$lt: 955000}})

// Ainda nao tenho habilidade para isso mas preciso excluir os  objetos do array de cidades.



{
    "_id" : ObjectId("5e3d8cb3bc1807a50a001808"),
    "nome" : "Acre",
    "sigla" : "AC",
    "regiao" : "Norte"
}
{
    "_id" : ObjectId("5e3d9487bc1807a50a00180f"),
    "nome" : "São Paulo",
    "sigla" : "SP",
    "regiao" : "Sudeste",
    "cidades" : [
            {
                    "_id" : ObjectId("5e3d9487bc1807a50a00180c"),
                    "nome" : "Campinas",
                    "area" : 795.7,
                    "prefeito" : "Jonas Donizette",
                    "populacao" : 1081000
            },
            {
                    "_id" : ObjectId("5e3d9487bc1807a50a00180d"),
                    "name" : "guarulhos",
                    "populacao" : 132584
            },
            {
                    "_id" : ObjectId("5e3d9487bc1807a50a00180e"),
                    "name" : "Sorocaba",
                    "distanciaCapital" : 87,
                    "populacao" : 64441
            },
            [
                    {
                            "nome" : "São Paulo",
                            "populacao" : 100
                    }
            ],
            {
                    "nome" : "São Paulo",
                    "populacao" : 100
            },
            {
                    "nome" : "São Paulo",
                    "populacao" : 100,
                    "_id" : ObjectId("5e3dcc5eb2780f9efed87aa8")
            }
    ],
    "populacao" : 40555000
}

db.empresas.aggregate([
    {$match: {name: "Nubank"}},
    {$lookup:{
        from: "estados",
        localField: "estadoId",
        foreignField: "_id",
        as: "estado"
    }},
    {$unwind: "$estado"}

]).pretty()

db.empresas.aggregate([
    {$match: {name: "Imperio"}},
    {$lookup:{
        from: "estados",
        localField: "cidadeId",
        foreignField: "cidades._id",
        as: "estado"
    }},
    {$unwind: "$estado"},
    {$unwind: "$estado.cidades"},
    {$addFields: {mesmaCidade: {$cmp: ["$estado.cidades._id", "$cidadeId"]}}},
    {$match: {mesmaCidade: 0}}

]).pretty()

//    {$project: {"estado.cidades": 1}}