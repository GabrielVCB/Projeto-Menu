CREATE DATABASE saboramezza;
USE saboramezza;

CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL UNIQUE,
    preco FLOAT NOT NULL,
);


INSERT INTO produtos (nome,preco) VALUES 
('coxinha','7'),
('coxinha frango com requeijao','8'),
('coxinha charque','10'),
('croissant','9'),
('empada de bacalhau','10'),
('empada de frango','9'),
('pao delicia','9'),
('esfirra','9'),
('hamburguer','8'),
('cachorro quente','8'),
('sanduiche','7'),
('sanduiche natural','14'),
('tapioca','10'),
('salada de fruta','9'),
('fatia de bolo','9');


INSERT INTO produtos (nome, preco) VALUES 
('Água', 2),
('Água Indaiá', 3),
('Água com Gás', 4),
('Café Pequeno', 2),
('Café Grande', 3),
('Café com Leite', 4),
('Suco', 6),
('Suco com Leite', 7),
('Refrigerante Mini', 4),
('Refrigerante Lata', 6),
('H2O Limoneto', 6),
('Sopa 250ml', 10),
('Sopa 500ml', 13),
('Cuscuz Recheado', 13);
