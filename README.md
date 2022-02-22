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

## Frontend

- Hecho con `React` con `Vite`, por lo cual necesita Node.js para poder correr, si no lo tienes instalado haz clic [aquí](https://nodejs.org/en/). 
- También se necesita el manejador de paquetes `Yarn`, si no lo tienes instalado haz clic [aquí](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).


