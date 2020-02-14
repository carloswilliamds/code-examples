SELECT * FROM `estados`

INSERT INTO cidades (nome, area, estado_id)
VALUES ("Campinas", 795, 2)

INSERT INTO cidades (nome, area, estado_id)
VALUES ("Niterói", 133.9, 99)

SELECT * FROM cidades

INSERT INTO cidades
    (nome, area, estado_id)
VALUES (
    "Caruaru",
     920.6,
     (select id from `estados` WHERE sigla = "PE"))


INSERT INTO cidades (nome, area, estado_id)
VALUES ("Juazeiro do Norte", 248.2, (select id from estados WHERE sigla = "CE"))