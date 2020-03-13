<template>
  <div>
    <div class="music-bar">
      <div class="card-holder">
        <div class="card-wrapper">
          <div class="card">
            <div class="music-bar-top" id="music-bar-top" @click.once="FirstClick()"></div>
            <div class="music-bar-player" :style="{background:background}">
              <div class="progress" :style="{width:progress}"></div>
              <div class="control">
                <div @click="Skip(-1)">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    stroke-width="1.5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <polygon points="19 20 9 12 19 4 19 20" />
                    <line x1="5" y1="19" x2="5" y2="5" />
                  </svg>
                </div>
                <div @click="Pause()">
                  <svg
                    v-if="!playing"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    stroke-width="1.5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <svg
                    v-if="playing"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    stroke-width="1.5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                </div>
                <div @click="Skip(1)">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    stroke-width="1.5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <polygon points="5 4 15 12 5 20 5 4" />
                    <line x1="19" y1="5" x2="19" y2="19" />
                  </svg>
                </div>
                <div>
                  <img src="./tail-spin.svg" id="music-bar-loading" :style="{opacity:opacity}" />
                </div>
              </div>
            </div>
            <div class="music-bar-icon">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { Howl, Howler } = require("howler");
export default {
  name: "MusicBar",
  data() {
    return {
      src: [],
      play_list: [],
      song_duration: 0,
      progress: "0%",
      index: 0,
      playing: false,
      ready: 0,
      loaded: 0
    };
  },
  computed: {
    background: function() {
      return MUSICBAR_OPTIONS.background ? MUSICBAR_OPTIONS.background : "";
    },
    opacity: function() {
      return Number(!this.loaded);
    }
  },
  mounted: function() {
    //init
    if (MUSICBAR_OPTIONS.platform == "music.163.com") {
      //网易云音乐
      this.audioInit_163();
    }
    setInterval(this.State, 100);
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
          data.playlist.trackIds.forEach((e, i) => {
            fetch(
              "https://api.imjad.cn/cloudmusic/?type=song&id=" + e.id.toString()
            )
              .then(response => response.json())
              .then(data => {
                this.HowlInit(data.data[0].url);
              });
          });
        });
    },
    HowlInit: function(url) {
      this.play_list.push(
        new Howl({
          src: url,
          html5: true,
          onend: () => {
            this.Skip(1);
          },
          onplay: () => {
            this.playing = true;
            //console.log("play");
          },
          onpause: () => {
            this.playing = false;
            //console.log("pause");
          },
          onload: () => {
            //console.log("load");
          }
        })
      );
      this.ready = 1;
    },
    FirstClick: function() {
      let top = document.getElementById("music-bar-top");
      top.style.height = 0;
      top.style.width = 0;
      if (MUSICBAR_OPTIONS.FirstClickPlay) {
        this.Play();
      }
    },
    Play: function() {
      this.play_list[this.index].play();
      this.song_duration = this.play_list[this.index].duration();
      setInterval(this.Progress, 100);
    },
    Progress: function() {
      this.progress =
        (
          (this.play_list[this.index].seek() / this.song_duration) *
          100
        ).toString() + "%";
    },
    Skip(num) {
      this.play_list[this.index].stop();
      this.index += num;
      if (this.index >= this.play_list.length) {
        this.index = 0;
      }
      if (this.index < 0) {
        this.index = this.play_list.length - 1;
      }
      this.play_list[this.index].play();
    },
    Pause() {
      this.playing
        ? this.play_list[this.index].pause()
        : this.play_list[this.index].play();
    },
    State() {
      if (this.ready) {
        this.loaded = this.play_list[this.index].state() === "loaded";
        //console.log(this.loaded);
      }
    }
  }
};
</script>


<style lang="stylus" scoped>
.music-bar {
  position: fixed;
  left: 0.5em;
  bottom: 0.5em;
  z-index: 800;
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
  color: #fff;
}

.card:hover {
  position: relative;
  left: 100%;
  margin-left: -50px;
  transition: all 0.4s ease-in-out;
}

.music-bar-top {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  z-index: 900;
}

.music-bar-player {
  height: 50px;
  width: 30vw;
  min-width: 250px;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#music-bar-loading {
  transition: all 0.5s ease;
}

.music-bar-icon {
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
