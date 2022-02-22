## Base de datos
Ejecutar el script `FrancisTerrero-Prueba.sql` en tu manejador de base de datos SQLSever.

## Backend
Tomar en cuenta la versión utilizada `.NET 5`
Cambiar el connection string a la base de datos en `appsettings.json`
```code
  "ConnectionStrings": {
    "WebApiDatabase": "Server=localhost\\SQLEXPRESS; Database=PruebaTecnica; Trusted_Connection=True;"
  },
```
