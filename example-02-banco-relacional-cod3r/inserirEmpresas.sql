ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ("Bradesco", 40715666000140),
    ("Nubank", 40715666000141),
    ("Itau", 40715666000142),
    ("Caixa", 40715666000143)


SELECT * FROM empresas
SELECT * FROM cidades
DESC empresas

INSERT INTO empresas_unidades
    (empresa_id, cidade_id,  sede)
VALUES
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,4,1)

SELECT * FROM empresas_unidades