## Base de datos
- Ejecutar el script `FrancisTerrero-Prueba.sql` en tu manejador de base de datos SQLSever.

## Backend
- Tomar en cuenta la versión utilizada `.NET 5`

- Tomar en cuenta el connection string a la base de datos en `appsettings.json` y verifique si concuerda con su equipo.
```code
  "ConnectionStrings": {
    "WebApiDatabase": "Server=localhost\\SQLEXPRESS; Database=PruebaTecnica; Trusted_Connection=True;"
  },
```
- Ejecutar los siguientes comandos
```bash
# instalar dependencias
$ dotnet restore

# ejecutar proyecto
$ dotnet run
```

