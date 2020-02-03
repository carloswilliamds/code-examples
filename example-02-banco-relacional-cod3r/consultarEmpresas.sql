SELECT e.nome, c.nome, eu.sede
FROM empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.empresa_id 
AND c.id = eu.cidade_id
