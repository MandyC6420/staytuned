const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/playlists/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/playlists`).then(result => result.json())
  }
}