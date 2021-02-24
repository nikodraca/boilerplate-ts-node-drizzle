export class SpotifyGateway {
  constructor() {}

  async startUserPlayback(spotifyUri: string, accessToken: string) {
    const response = await fetch('https://api.spotify.com/v1/me/player/play', {
      method: 'PUT',
      body: JSON.stringify({
        uris: [spotifyUri],
      }),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    return response;
  }
}
