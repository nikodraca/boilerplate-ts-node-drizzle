export class SpotifyGateway {
  private baseURL = 'https://api.spotify.com';
  private timeout = 3 * 1000;

  private async request(endpoint: string, options: RequestInit = {}): Promise<Response> {
    const controller = new AbortController();

    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }
}
