# package-validate-token-jwt

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
