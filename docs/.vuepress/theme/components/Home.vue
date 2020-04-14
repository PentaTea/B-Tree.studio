<template>
  <transition name="fade">
    <main v-if="!loading" class="home" aria-labelledby="main-title">
      <header class="hero">
        <SP v-if="data.heroImage" :file="data.heroImage" height="300px" start="autostart" />
        <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || "Hello" }}</h1>
        <p v-if="data.tagline !== null" class="description">
          <span
            v-if="typeof data.ityped == 'string'"
          >{{ data.tagline || $description || "Welcome to your VuePress site" }}</span>
          <span id="ityped-description"></span>
        </p>
        <p v-if="data.actionText && data.actionLink" class="action">
          <NavLink class="action-button" :item="actionLink" />
        </p>
      </header>
      <div v-if="data.features && data.features.length" class="features">
        <div v-for="(feature, index) in data.features" :key="index" class="feature">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>
      <Content class="theme-default-content custom" />
      <div class="footer">
        MPL-2.0 Licensed | Copyright © {{ new Date().getFullYear()}}
        <a
          href="https://github.com/moecopilot"
          target="_blank"
        >moecopilot</a> |
        <RouterLink to="py-list/">友人帐</RouterLink>
      </div>
    </main>
  </transition>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";
const Vivus = require("vivus");

export default {
  name: "Home",
  components: { NavLink },
  data() {
    return {
      loading: 1
    };
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  },
  mounted: function() {
    this.loading = 0;
    //setTimeout(this.ityped, 100);
    this.$nextTick().then(this.ityped);
  },
  methods: {
    d() {
      return new Date().getFullYear();
    },
    ityped() {
      if (typeof this.data.tagline == "object") {
        var ityped = require("ityped");
        ityped.init(document.querySelector("#ityped-description"), {
          showCursor: true,
          typeSpeed: 80,
          backSpeed: 40,
          startDelay: 3000,
          backDelay: 1000,
          loop: false,
          cursorChar: "_",
          strings: this.data.tagline
        });
      }
    }
  }
};
</script>

<style lang="stylus">
.home {
  padding: $navbarHeight 2rem 0;
  max-width: $homePageWidth;
  margin: 0px auto;
  display: block;

  .hero {
    text-align: center;

    img, svg {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .footer {
    padding: 2.5rem;
    font-size: 20px;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}

.ityped-cursor {
  font-size: 2.2rem;
  opacity: 1;
  -webkit-animation: blink 0.5s infinite;
  -moz-animation: blink 0.5s infinite;
  animation: blink 0.5s infinite;
  animation-direction: alternate;
}

@keyframes blink {
  100% {
    opacity: 0;
  }
}

@keyframes blink {
  100% {
    opacity: 0;
  }
}

@keyframes blink {
  100% {
    opacity: 0;
  }
}
</style>
