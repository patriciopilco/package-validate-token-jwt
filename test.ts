import { JwtValidator } from './index';

const validator = new JwtValidator();

// Token de ejemplo (no válido, solo para pruebas de formato)
const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ3OTk2ODgwMDB9.signature';

console.log('Token válido:', validator.isTokenValid(fakeToken));
console.log('Token nulo:', validator.isTokenValid(null));
console.log('Token mal formado:', validator.isTokenValid('abc.def'));
