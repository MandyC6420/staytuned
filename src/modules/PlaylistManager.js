const remoteURL = "http://localhost:5002";

export default {
  getByEmail(email) {
    return fetch(`${remoteURL}/users?email=${email}`).then((result) =>
      result.json()
    );
  },
  getAll() {
    return fetch(`${remoteURL}/playlists?userId=${localStorage.getItem(
      "userId"
    )},/status/1?_embed=status
            `).then((result) => result.json());
  },

  getuser(id) {
    return fetch(`${remoteURL}/users/${id}`).then((result) => result.json());
  },
  get(id) {
    return fetch(`${remoteURL}/playlists/${id}?_embed=songs`).then((result) =>
      result.json()
    );
  },
  getAll() {
    return fetch(`${remoteURL}/playlists/`).then((result) => result.json());
  },
  getSong() {
    return fetch(`${remoteURL}/songs`).then((result) => result.json());
  },
  delete(id) {
    return fetch(`http://localhost:5002/songs/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newSong) {
    return fetch(`${remoteURL}/songs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    }).then((data) => data.json());
  },
  update(editedPlaylist) {
    return fetch(`${remoteURL}/playlists/${editedPlaylist.playlistTitle}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPlaylist),
    }).then((data) => data.json());
  },
};
