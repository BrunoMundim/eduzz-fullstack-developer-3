CREATE TABLE pessoa (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(80) NOT NULL,
    nascimento DATE
)

INSERT INTO pessoa (nome, nascimento) VALUES ('Marco Antonio', '2001-02-01');
INSERT INTO pessoa (nome, nascimento) VALUES ('Marcus Vinicius', '2001-02-01');
INSERT INTO pessoa (nome, nascimento) VALUES ('Victor Elias', '2001-02-01');

UPDATE pessoa SET nascimento = '2001-09-22' WHERE id = 2;
UPDATE pessoa SET nascimento = '2001-07-31' WHERE id = 3;
UPDATE pessoa SET nascimento = '2000-07-21' WHERE id = 4;

INSERT INTO pessoa (nome, nascimento) VALUES ('Zezinho', '2001-02-01');
DELETE FROM pessoa WHERE id=5;

SELECT * FROM pessoa ORDER BY nome;

ALTER TABLE pessoa ADD genero VARCHAR(1) NOT NULL AFTER nascimento;
UPDATE pessoa SET genero = 'M' WHERE id = 1

INSERT INTO pessoa (nome, nascimento, genero) VALUES ('Anna Julia', '2001-08-27', 'F');
UPDATE pessoa SET genero = ('M') WHERE id = 2;
UPDATE pessoa SET genero = ('M') WHERE id = 3;
UPDATE pessoa SET genero = ('M') WHERE id = 4;

SELECT COUNT(id), genero FROM pessoa GROUP BY genero