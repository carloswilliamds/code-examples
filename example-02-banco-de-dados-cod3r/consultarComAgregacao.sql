SELECT regiao as "Região",
       sum(populacao) as Total
from `estados`
GROUP BY regiao
ORDER by Total DESC