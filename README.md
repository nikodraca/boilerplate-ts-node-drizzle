## Events

| Event          |                      Params                       | Description                                  |
| -------------- | :-----------------------------------------------: | -------------------------------------------- |
| `room:join`    |               `{"roomId" : string}`               | Join room based on roomId                    |
| `room:list`    |                        N/A                        | List all public rooms                        |
| `room:get`     |               `{"roomId" : string}`               | Get information about room                   |
| `song:submit`  |             `{"spotifyUri" : string}`             | Submit song to play for all members of room  |
| `song:request` |             `{"spotifyUri" : string}`             | Trigger request for all clients to play song |
| `song:play`    | `{"spotifyUri" : string, "accessToken" : string}` | Send request to Spotify to play song t       |
