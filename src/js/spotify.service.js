export default class Spotify {
  static searchSpotify(keyword) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer BQBnp23h0K44CcPerK_hKXgyJhdjxp7IolB92RCtZpyLjM0FSE-yv1YXUI_rgket4TbR_fOS_joHQjAYpbw3O-JLC8Gcs6tyvJ4oVigcflAtwJI-FlyQH4T98vXqsEdCEVboZlsRkK0cer9gG5ve-IiQd169_KBE");
    myHeaders.append("Cookie", "_ga=GA1.2.456045822.1606765238; _gid=GA1.2.637614845.1606765238; sp_dc=AQB5RMpfdYpkmkJlRHPeYxSSfyTRPpkKySEvxhbkmixFgyFT0ZOlFeh5KY4xSVAXFpCp276qTTx4nbxD11fqn-6DnKhR9PuJ6yLMzkXUPg; sp_key=66b31764-29a3-4c2f-92c8-38ed42c7b352; _gat=1");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    let type = "album,track";
    let limit = 50;
    return fetch(`https://api.spotify.com/v1/search?q=${keyword}&type=${type}&limit=${limit}`, requestOptions)
      .then ((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}