import { Environment } from "./environment.inteface"

export const environment: Environment = {
  production: false,
  version: '1.0.0',
  name: 'development',
  apiUrl: 'https://localhost:7279',
  authUrl: 'https://identitytoolkit.googleapis.com/v1',
  apiKey: 'AIzaSyCoqLaxOVARrcIYUZAi68gwUjFFX9SqSkU',
}

console.log(`${environment.name} environment`)
