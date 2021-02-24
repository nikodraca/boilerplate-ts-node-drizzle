import { SpotifyGateway } from '../gateways';

export class SpotifyService {
  private spotifyGateway: SpotifyGateway;

  constructor(spotifyGateway: SpotifyGateway) {
    this.spotifyGateway = spotifyGateway;
  }

  async startUserPlayback(spotifyUri: string, accessToken: string) {
    this.spotifyGateway.startUserPlayback(spotifyUri, accessToken);
  }
}
