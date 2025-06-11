# package-validate-token-jwt

## Requisitos
- Node.js >= 16
- TypeScript >= 5 (si usas el paquete en un proyecto TypeScript)

## Instalación

Para instalar este paquete desde GitHub Packages necesitas configurar autenticación con un token personal (PAT), especialmente si el paquete es privado.

Agrega el repositorio de GitHub Packages en tu `.npmrc` (si no lo tienes):

Ejemplo de `.npmrc` en la raíz de tu proyecto:

```
@patriciopilco:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TU_TOKEN_PERSONAL
```

- Reemplaza `TU_TOKEN_PERSONAL` por un [Personal Access Token de GitHub](https://github.com/settings/tokens) con el scope `read:packages`.
- **No subas tu token al repositorio.**

Instala el paquete:

```
npm install @patriciopilco/package-validate-token-jwt
```

## Uso

### En TypeScript
```ts
import { JwtValidator } from '@patriciopilco/package-validate-token-jwt';

const validator = new JwtValidator();
const token = 'tu.jwt.token.aqui';

if (validator.isTokenValid(token)) {
  console.log('Token válido');
} else {
  console.log('Token inválido o expirado');
}
```

### En JavaScript
```js
const { JwtValidator } = require('@patriciopilco/package-validate-token-jwt');

const validator = new JwtValidator();
const token = 'tu.jwt.token.aqui';

if (validator.isTokenValid(token)) {
  console.log('Token válido');
} else {
  console.log('Token inválido o expirado');
}
```

## Pasos para realizar modificaciones y publicar el paquete

1. **Clona el repositorio y crea una rama nueva:**
   ```sh
   git clone https://github.com/patriciopilco/package-validate-token-jwt.git
   cd package-validate-token-jwt
   git checkout -b nombre-de-tu-rama
   ```

2. **Instala las dependencias:**
   ```sh
   npm ci
   ```

3. **Realiza tus modificaciones en los archivos TypeScript (`.ts`).**

4. **Compila el proyecto:**
   ```sh
   npm run build
   ```
   Esto generará los archivos en la carpeta `dist`.

5. **Ejecuta las pruebas (opcional):**
   ```sh
   npm test
   ```

6. **Haz commit y push de tus cambios:**
   ```sh
   git add .
   git commit -m "Descripción de los cambios"
   git push origin nombre-de-tu-rama
   ```

7. **Crea un Pull Request en GitHub.**

8. **Publicación automática:**
   - Cuando los cambios se fusionen a la rama `main`, el paquete se publicará automáticamente en GitHub Packages mediante GitHub Actions.

---

**Notas:**
- Asegúrate de que el archivo `package.json` tenga el scope correcto (`@patriciopilco`).
- El workflow requiere un token personal con permisos para publicar en GitHub Packages configurado como secreto (`GH_PACKAGES_VALIDATE_TOKEN`).
