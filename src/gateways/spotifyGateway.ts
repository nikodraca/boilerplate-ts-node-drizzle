import axios, { AxiosInstance } from 'axios';

export class SpotifyGateway {
  private gateway: AxiosInstance;

  constructor() {
    this.gateway = axios.create({
      baseURL: 'https://api.spotify.com',
      timeout: 3 * 1000,
    });
  }

  async startUserPlayback(spotifyUri: string, accessToken: string, deviceId: string) {
    try {
      const response = await this.gateway.put(
        `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
        {
          uris: [spotifyUri],
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);

      return response;
    } catch (err) {
      console.error(err);
    }
  }
}
