// Validador de JWT para Node.js en TypeScript
export class JwtValidator {
  /**
   * Valida si un token JWT es válido y no ha expirado.
   * @param token Token JWT a validar
   * @returns true si el token es válido y no ha expirado, false en caso contrario
   */
  public isTokenValid(token: string | null): boolean {
    if (!token) return false;
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    try {
      // Decodifica el payload (segunda parte del token)
      const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString('utf8'));
      if (!payload || typeof payload.exp !== 'number') return false;
      const now = Math.floor(Date.now() / 1000);
      return payload.exp > now;
    } catch {
      return false;
    }
  }
}
