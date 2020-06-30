const remoteURL = "http://localhost:5002";

// /posts?id=1&id=2
// email=${email}

// getByEmail is fetching the users email
export default {
  getByEmail(email) {
    return fetch(`${remoteURL}/users?email=${email}`).then((result) =>
      result.json()
    );
  },
  // getAllplaylists fetches the playlist and the user id with it in local storage
  getAllplaylists() {
    return fetch(
      `${remoteURL}/playlists?userId=${localStorage.getItem("id")}`
    ).then((result) => result.json());
  },
  // getuser with id fetches user id
  getuser(id) {
    return fetch(`${remoteURL}/users?id=${id}`).then((result) => result.json());
  },
  // getid fetches playlists with their id to only show that users songs
  get(id) {
    return fetch(`${remoteURL}/playlists/${id}?_embed=songs`).then((result) =>
      result.json()
    );
  },
  // gets all playlists
  getAll() {
    return fetch(
      `${remoteURL}/playlists?userId=${localStorage.getItem("userId")}`
    ).then((result) => result.json());
  },
  // fetches songs
  getSong() {
    return fetch(`${remoteURL}/songs`).then((result) => result.json());
  },
  // deletes individual songs
  delete(id) {
    return fetch(`http://localhost:5002/songs/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  // posts new song after song is deleted?
  post(newSong) {
    return fetch(`${remoteURL}/songs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    }).then((data) => data.json());
  },
  launch(newPlaylist) {
    newPlaylist.userId = localStorage.getItem("userId")
    return fetch(`${remoteURL}/playlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlaylist),
    }).then((data) => data.json());
  },
  // should bring back edited playlist after a delete?
  update(editedPlaylist) {
    return fetch(`${remoteURL}/playlists/${editedPlaylist.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPlaylist),
    }).then((data) => data.json());
  },
  add(User) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(User),
    }).then((data) => data.json());
  },
};
