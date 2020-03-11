<template>
  <div>
    <div class="music-bar">
      <div class="card-holder">
        <div class="card-wrapper">
          <div class="card">
            <!-- <iframe
              frameborder="no"
              border="0"
              marginwidth="0"
              marginheight="0"
              width="298"
              height="52"
              src="//music.163.com/outchain/player?type=2&id=690465&auto=1&height=32"
            ></iframe>-->
            <div class="music-bar-player">
              <audio controls style="background-color: #f2f3f4;" :src="src" autoplay>
                <p>您的浏览器不支持 audio</p>
              </audio>
            </div>
            <div class="music-bar-icon">
              <i class="fas fa-music" style="color: #fff;"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicBar",
  data() {
    return {
      src: ""
    };
  },
  mounted: function() {
    this.audioInit();
  },
  methods: {
    audioInit: function() {
      fetch(
        "https://api.imjad.cn/cloudmusic/?type=playlist&id=" +
          MUSICBAR_OPTIONS.options.PlayListId.toString()
      )
        .then(response => response.json())
        .then(data => {
          fetch(
            "https://api.imjad.cn/cloudmusic/?type=song&id=" +
              data.playlist.trackIds[
                parseInt(data.playlist.trackIds.length * Math.random())
              ].id.toString()
          )
            .then(response => response.json())
            .then(data => {
              this.src = data.data[0].url;
            });
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.music-bar {
  position: fixed;
  left: 0.5em;
  bottom: 0.5em;
  z-index: 1000;
}

.card-holder {
  width: 0px;
  overflow: visible;
  float: left;
}

.card-wrapper {
  display: inline-block;
  float: right;
  clear: both;
}

.card {
  position: relative;
  left: 50px;
  padding: 16px 0px 16px 64px;
  margin: 8px;
  background: #fff;
  transition: all 0.4s ease-in-out 0.1s;
  background: #55ae9c;
  display: flex;
  justify-content: flex-end;
}

.card:hover {
  position: relative;
  left: 100%;
  margin-left: -50px;
  transition: all 0.4s ease-in-out;
}

.music-bar-icon {
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
