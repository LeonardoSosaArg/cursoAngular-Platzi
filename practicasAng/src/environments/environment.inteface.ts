//COMANDOS PARA CAMBIAR DE ENVIROMENT
//ng build --prod (produccion)
//ng build --testing (testing)
//ng build (por defecto = development)
//ng serve --configuration=development
//ng serve --configuration=testing
//ng serve --configuration=production
export interface Environment {
  production: boolean
  name: string;
  apiUrl: string;
  apiKey?: string;
  authUrl?: string;
  version: string;
}
