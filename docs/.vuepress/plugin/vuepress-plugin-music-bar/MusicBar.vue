<template>
  <div>
    <div class="music-bar">
      <div class="card-holder">
        <div class="card-wrapper">
          <div class="card bg-01">
            <iframe
              frameborder="no"
              border="0"
              marginwidth="0"
              marginheight="0"
              width="298"
              height="52"
              src="//music.163.com/outchain/player?type=2&id=690465&auto=1&height=32"
            ></iframe>
            <p class="music-bar-icon"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicBar"
};
</script>

<style lang="stylus" scoped>
.music-bar
  position: fixed
  left: 0.5em
  bottom: 0.5em
  z-index 1000

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
  padding: 16px 50px 16px 64px;
  margin: 8px;
  background: #fff;
  transition: all 0.4s ease-in-out 0.1s;
  background: #55ae9c;
}

.card:hover {
  position: relative;
  left: 100%;
  margin-left: -50px;
  transition: all 0.4s ease-in-out;
}
.music-bar-icon
  width 50px
  height 100%
  float right
</style>
