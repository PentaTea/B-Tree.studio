<template>
  <div>
    <div class="music-bar">
      <div class="card-holder">
        <div class="card-wrapper">
          <div class="card" :style="{background:frameColor}">
            <div class="music-bar-top" ref="top" @click.once="FirstClick()"></div>
            <div class="music-bar-player" :style="{background:background}">
              <div class="progress" :style="{width:progress}"></div>
              <div
                class="control"
                ref="control"
                @mousedown.self="mousedownHandler"
                @mousemove="mousemoveHandler"
                @mouseup="mouseupHandler"
                @touchstart.self="mousedownHandler"
                @touchmove="mousemoveHandler"
                @touchend="mouseupHandler"
              >
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
              </div>
            </div>
            <div class="music-bar-icon">
              <div style="position: absolute; left:60px">
                <img src="./tail-spin.svg" id="music-bar-loading" :style="{opacity:opacity}" />
              </div>
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
const {
  playList = [],
  platform = [],
  firstClickPlay = true,
  background = "",
  timeOut = 2000,
  frameColor,
  ...others
} = MUSICBAR_OPTIONS;
export default {
  name: "MusicBar",
  data() {
    return {
      src: [],
      playList: [],
      progress: "0%",
      index: 0,
      playing: false,
      ready: 0,
      isMouseDown: 0,
      from: ""
    };
  },
  computed: {
    frameColor: function() {
      return frameColor ? frameColor : "";
    },
    background: function() {
      return background;
    },
    opacity: function() {
      return Number(!this.loaded);
    },
    loaded: function() {
      return this.ready
        ? this.playList[this.index].howl.state() === "loaded"
        : 0;
    },
    duration: function() {
      return this.playList[this.index].howl.duration();
    }
  },

  mounted: function() {
    //init
    this.MusicBarInit();
  },
  methods: {
    MusicBarInit: function() {
      //手动列表
      playList.forEach(e => {
        this.AudioInit_ByUrl(e);
      });
      //平台自动添加歌曲
      platform.forEach(e => {
        //多平台支持
        if (e.name === "music.163.com") {
          //网易云音乐
          this.AudioInit_163(e);
        }
        //TODO:其他平台

        MusicBar.object(this.playList, "playList:\n");
      });
    },
    AudioInit_ByUrl: function(e) {
      MusicBar.log("load:" + e);
      this.HowlInit(e);
    },
    AudioInit_163: function(e) {
      //获取歌曲
      if (e.songIDs) {
        e.songIDs.forEach(id => {
          fetch(
            "https://api.imjad.cn/cloudmusic/?type=song&id=" + id.toString()
          )
            .then(response => response.json())
            .then(data => {
              //获取歌曲id
              let url = data.data[0].url;
              MusicBar.log("load:" + url);
              fetch(
                "https://api.imjad.cn/cloudmusic/?type=detail&id=" +
                  id.toString()
              )
                .then(response => response.json())
                .then(data => {
                  this.HowlInit(
                    data.songs[0].name + " - " + data.songs[0].ar[0].name,
                    url
                  );
                })
                .catch(error => MusicBar.error(error));
            })
            .catch(error => MusicBar.error(error));
        });
      }
      //获取歌单
      if (e.playListIDs) {
        e.playListIDs.forEach(id => {
          fetch(
            "https://api.imjad.cn/cloudmusic/?type=playlist&id=" + id.toString()
          )
            .then(response => response.json())
            .then(data => {
              //获取歌曲id
              data.playlist.trackIds.forEach((e, i) => {
                fetch(
                  "https://api.imjad.cn/cloudmusic/?type=song&id=" +
                    e.id.toString()
                )
                  .then(response => response.json())
                  .then(data => {
                    let url = data.data[0].url;
                    MusicBar.log("load:" + url);
                    fetch(
                      "https://api.imjad.cn/cloudmusic/?type=detail&id=" +
                        e.id.toString()
                    )
                      .then(response => response.json())
                      .then(data => {
                        this.HowlInit(
                          data.songs[0].name + " - " + data.songs[0].ar[0].name,
                          url
                        );
                      })
                      .catch(error => MusicBar.error(error));
                  })
                  .catch(error => MusicBar.error(error));
              });
            })
            .catch(error => MusicBar.error(error));
        });
      }
    },
    HowlInit: function(name, url) {
      this.playList.push({
        name: name,
        url: url,
        howl: new Howl({
          src: url,
          //html5: true,
          onend: () => {
            this.Skip(1);
          },
          onplay: () => {
            this.playing = true;
            MusicBar.log(
              "play " +
                " [" +
                this.index +
                "] " +
                this.playList[this.index].name
            );
          },
          onpause: () => {
            this.playing = false;
            MusicBar.log(
              "pause" +
                " [" +
                this.index +
                "] " +
                this.playList[this.index].name
            );
          },
          onseek: () => {
            MusicBar.log(
              "seek " +
                " [" +
                this.index +
                "] " +
                this.playList[this.index].name +
                "\nfrom " +
                this.from +
                " to " +
                ((this.playList[this.index].howl.seek() / this.duration) * 100)
                  .toFixed(2)
                  .toString() +
                "%"
            );
          }
        })
      });
      this.ready++;
    },
    FirstClick: function() {
      let top = this.$refs.top;
      top.style.height = 0;
      top.style.width = 0;
      if (firstClickPlay) {
        this.Play();
      }
      setInterval(this.TimeOut, timeOut); //检测歌曲是否成功加载,超时换下一首
      setInterval(this.Progress, 10);
    },
    Play: function() {
      this.playList[this.index].howl.play();
    },
    Progress: function() {
      if (!this.isMouseDown && this.loaded)
        this.progress =
          ((this.playList[this.index].howl.seek() / this.duration) * 100)
            .toFixed(2)
            .toString() + "%";
    },
    Skip(num) {
      //this.playList[this.index].howl.pause();
      this.playList[this.index].howl.stop();
      this.index += num;
      if (this.index >= this.playList.length) {
        this.index = 0;
      }
      if (this.index < 0) {
        this.index = this.playList.length - 1;
      }
      if (num === 1) {
        MusicBar.log("next");
      } else if (num === -1) {
        MusicBar.log("previous");
      }
      this.Play();
    },
    Pause() {
      this.playing = this.playList[this.index].howl.playing();
      this.playing
        ? this.playList[this.index].howl.pause()
        : this.playList[this.index].howl.play();
    },

    TimeOut() {
      if (this.ready && this.playList[this.index].howl.state() != "loaded") {
        MusicBar.warn("Loading timed out, trying to replace the next song");
        this.Skip(1);
      }
    },
    mousedownHandler(e) {
      if (this.loaded) {
        //判断加载完成
        if (e.touches) e = e.touches[0]; //判断移动端
        if (e.which === 1 || e.which == undefined) {
          this.isMouseDown = true;
        }
      }
    },
    mousemoveHandler(e) {
      if (e.touches) e = e.touches[0];
      if (this.isMouseDown === true) {
        // 修改进度条
        this.progress =
          (((e.clientX - 20) / this.$refs.control.clientWidth) * 100)
            .toFixed(2)
            .toString() + "%";
      }
    },
    mouseupHandler(e) {
      if (e.changedTouches) e = e.changedTouches[0];
      if (this.isMouseDown) {
        // 修改seek
        this.from =
          ((this.playList[this.index].howl.seek() / this.duration) * 100)
            .toFixed(2)
            .toString() + "%";
        this.playList[this.index].howl.seek(
          ((e.clientX - 20) / this.$refs.control.clientWidth) * this.duration
        );

        this.isMouseDown = false;
      }
    }
  }
};
var MusicBar = {
  log: function(msg) {
    if (MUSICBAR_ENABLE_DEBUG)
      console.log("\n\n%c[music-bar]" + msg, "color: green;");
  },
  warn: function(msg) {
    if (MUSICBAR_ENABLE_DEBUG) console.warn("\n\n[music-bar]" + msg);
  },
  error: function(msg) {
    if (MUSICBAR_ENABLE_DEBUG) console.error("\n\n[music-bar]" + msg);
  },
  object: function(e, msg) {
    if (MUSICBAR_ENABLE_DEBUG) {
      console.log("\n\n%c[music-bar] %s \n%o", "color: green;", msg, e);
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
  background: $accentColor;
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
  min-width: 200px;
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
  position: relative;
}

.music-bar-icon {
  position: relative;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
