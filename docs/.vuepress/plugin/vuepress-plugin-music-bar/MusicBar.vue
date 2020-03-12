<template>
  <div>
    <div class="music-bar">
      <div class="card-holder">
        <div class="card-wrapper">
          <div class="card" @click.once="FirstClick()">
            <div class="music-bar-player" :style="{background:background}">
              <div class="progress" :style="{width:progress}"></div>
              <div class="control"></div>
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
const { Howl, Howler } = require("./node_modules/howler");
var src = "";
export default {
  name: "MusicBar",
  data() {
    return {
      src: [],
      play_list_length: Number,
      sound: {},
      song_index: 0,
      song_duration: 0,
      progress: "0%"
    };
  },
  computed: {
    background: function() {
      return MUSICBAR_OPTIONS.background ? MUSICBAR_OPTIONS.background : "";
    }
  },
  mounted: function() {
    //init
    if (MUSICBAR_OPTIONS.platform == "music.163.com") {
      //网易云音乐
      this.audioInit_163();
    }
  },
  methods: {
    audioInit_163: function() {
      //获取歌单
      fetch(
        "https://api.imjad.cn/cloudmusic/?type=playlist&id=" +
          MUSICBAR_OPTIONS.options.PlayListId.toString()
      )
        .then(response => response.json())
        .then(data => {
          //获取歌曲id
          this.play_list_length = data.playlist.trackIds.length;
          data.playlist.trackIds.forEach((e, i) => {
            fetch(
              "https://api.imjad.cn/cloudmusic/?type=song&id=" + e.id.toString()
            )
              .then(response => response.json())
              .then(data => {
                console.log(data.data[0].url);
                this.src.push(data.data[0].url);
                if (this.src.length >= this.play_list_length) {
                  this.HowlInit();
                }
              });
          });
        });
    },
    HowlInit: function() {
      console.log(this.src.length);
      this.sound = new Howl({
        src: this.src,
        html5: true
      });
      setInterval(this.Progress, 100);
    },
    FirstClick: function() {
      if (MUSICBAR_OPTIONS.FirstClickPlay) {
        this.Play();
      }
    },
    Play: function() {
      //随机播放this.sound.play(Math.floor(Math.random() * this.play_list_length));
      console.log(this.sound.play());
      this.song_duration = this.sound.duration();
    },
    Progress: function() {
      this.progress =
        ((this.sound.seek() / this.song_duration) * 100).toString() + "%";
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
  padding: 0px 0px 0px 64px;
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

.music-bar-player {
  height: 50px;
  width: 300px;
  background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
  overflow: hidden;
  position: relative;
}

.progress {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 0%;
  background-color: rgba(0, 0, 0, 0.07);
}

.control {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
}

.music-bar-icon {
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
