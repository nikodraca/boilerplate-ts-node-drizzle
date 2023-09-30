import axios, { AxiosInstance } from 'axios';

export class SpotifyGateway {
  private gateway: AxiosInstance;

  constructor() {
    this.gateway = axios.create({
      baseURL: 'https://api.spotify.com',
      timeout: 3 * 1000
    });
  }
}
