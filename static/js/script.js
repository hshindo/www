// for the humberger menu icon
$('.button-collapse').sideNav();

// for google slides links inside publications section
Vue.component('my-google-slides', {
  props: ['src'],
  template: `
  <div>
    <a @click="onOpen" href="#">google slides</a>

    <div :id="modalId" class="modal">
      <!--
        downloading following contents starts only when a modal opens
      -->
      <div v-if="isOpen">
        <div :style="styles.responsiveIframeContainer">
          <iframe
            :src="src"
            :style="styles.iframe"
            frameborder="0"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  `,
  beforeCreate() {
    // create a random string and set as ID of each modal
    this.modalId = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(2, 10);
  },
  mounted() {
    // initialize modal
    // see: http://archives.materializecss.com/0.100.2/modals.html
    $('.modal').modal();
  },
  methods: {
    onOpen() {
      this.isOpen = true; // to start loading modal contents
      $(`#${this.modalId}`).modal('open');
    },
  },
  data: function() {
    return {
      isOpen: false,
      styles: {
        responsiveIframeContainer: {
          height: 0,
          /*
           * - '75%' indicates the aspect rasio (3/4 = 75%).
           * - '29px' indicates a bottom bar of the google slides.
           * - note that percentage inside 'padding-(top|bottom)' is calculated based on
           *   its current width. this is a specification of 'calc' used inside
           *   the 'padding-(top|bottom)' property.
           *
           * see: https://nathan.gs/2018/01/07/responsive-slideshare-iframe/
           */
          paddingBottom: 'calc(75% + 29px)',
          position: 'relative',
          width: '100%',
        },
        iframe: {
          height: '100%',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%',
        },
      },
    };
  },
});

Vue.component('links-lister', {
  props: ['links'],
  template: `
  <div>
    <div :style="styles.lineContainer">

      <div :style="styles.lineItem" v-if="links.googleSlides">
        <a @click="onToggle('googleSlides', $event)" href="#">google slides</a>
        <i
          class="fas fa-caret-down"
          :style="[styles.caret, this.currentContent === 'googleSlides' && styles.caretActive]">
        </i>
      </div>

      <div :style="styles.lineItem" v-if="links.youtube">
        <a @click="onToggle('youtube', $event)" href="#">youtube</a>
        <i
          class="fas fa-caret-down"
          :style="[styles.caret, this.currentContent === 'youtube' && styles.caretActive]">
        </i>
      </div>

      <div :style="styles.lineItem" v-if="links.bibtex"><a v-if="links.bibtex" :href="links.bibtex" target="_blank">bibtex</a></div>
      <div :style="styles.lineItem" v-if="links.github"><a v-if="links.github" :href="links.github" target="_blank">github</a></div>
      <div :style="styles.lineItem" v-if="links.pdf"><a v-if="links.pdf" :href="links.pdf" target="_blank">pdf</a></div>
      <div :style="styles.lineItem" v-if="links.slides"><a v-if="links.slides" :href="links.slides" target="_blank">slides</a></div>
    </div>

    <div v-if="currentContent === 'googleSlides'" :style="styles.responsiveIframeContainer">
      <iframe
        :src="links.googleSlides"
        :style="styles.iframe"
        frameborder="0"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>

    <div v-if="currentContent === 'youtube'" :style="styles.responsiveIframeContainer">
      <iframe
        :src="links.youtube"
        :style="styles.iframe"
        frameborder="0"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>

  </div>
  `,
  methods: {
    /**
     * @param  {'googleSlides'|'youtube'|'bibtex'|'github'|'pdf'|'slides'} content clicked content name
     * @return {void}
     */
    onToggle(content, event) {
      event.preventDefault();

      if (this.currentContent === null) return (this.currentContent = content);
      if (this.currentContent === content) return (this.currentContent = null);
      if (this.currentContent !== content)
        return (this.currentContent = content);
    },
  },
  data: function() {
    return {
      currentContent: null,
      styles: {
        lineContainer: {
          display: 'flex',
        },
        lineItem: {
          marginRight: '12px',
        },
        caret: {
          transition: 'transform 0.2s',
          verticalAlign: 'middle',
          cursor: 'pointer',
          fontSize: '1.2rem',
          transform: 'rotate(0deg)',
        },
        caretActive: {
          color: '#5a76d6',
          transform: 'rotate(-180deg)',
        },
        responsiveIframeContainer: {
          background: '#f0f0f0',
          height: 0,
          margin: '8px 0',
          /*
           * - '75%' indicates the aspect rasio (3/4 = 75%).
           * - '29px' indicates a bottom bar of the google slides.
           * - note that percentage inside 'padding-(top|bottom)' is calculated based on
           *   its current width. this is a specification of 'calc' used inside
           *   the 'padding-(top|bottom)' property.
           *
           * see: https://nathan.gs/2018/01/07/responsive-slideshare-iframe/
           */
          paddingBottom: 'calc(75% + 29px)',
          position: 'relative',
          width: '100%',
        },
        iframe: {
          height: '100%',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%',
        },
      },
    };
  },
});

var app = new Vue({
  el: '#publications',
});
