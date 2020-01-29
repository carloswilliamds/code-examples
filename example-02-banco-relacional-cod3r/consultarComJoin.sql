SELECT e.nome as Estado,
       c.nome as Cidade,
       regiao
from `estados` e, cidades c
WHERE  e.id = c.estado_id

SELECT e.nome as Estado,
       c.nome as Cidade,
       regiao as Região
from `estados` e
INNER JOIN cidades c on e.id = c.estado_id

