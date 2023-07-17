const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    return this.database.query(
      `insert into ${this.table} (title, time, description, publication_date, is_favorite, is_accessible, videoData ) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        video.title,
        video.time,
        video.description,
        video.publication_date,
        video.is_favorite,
        video.is_accessible,
        video.videoData,
      ]
    );
  }

  update(video) {
    return this.database.query(
      `update ${this.table} set title = ?, time = ?, description = ?, publication_date = ?, is_favorite = ?, is_accessible = ?, videoData = ? where id=?`,
      [
        video.title,
        video.time,
        video.description,
        video.publication_date,
        video.is_favorite,
        video.is_accessible,
        video.videoData,
        video.id,
      ]
    );
  }
}

module.exports = VideoManager;
