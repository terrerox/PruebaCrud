CREATE DATABASE PruebaTecnica;

USE PruebaTecnica;

CREATE TABLE Persona (
    Id INT NOT NULL IDENTITY (1, 1),
    Nombre VARCHAR(255) NOT NULL,
    FechaDeNacimiento DATE NOT NULL,
    CONSTRAINT PK_PersonaID PRIMARY KEY (Id),
);
