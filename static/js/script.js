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

Vue.component('my-google-slides-inline', {
  props: ['src'],
  template: `
  <div>
    <a @click="onToggle($event)" href="#">google slides</a>
    <i class="fas fa-caret-down" @click="onToggle($event)" :style="[styles.caret, caretRotationStyle]"></i>

    <div v-if="isOpen" :style="styles.responsiveIframeContainer">
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
  `,
  methods: {
    onToggle(event) {
      event.preventDefault();
      this.isOpen = !this.isOpen; // to start loading modal contents
    },
  },
  computed: {
    caretRotationStyle: function() {
      return { transform: this.isOpen ? 'rotate(-180deg)' : 'rotate(0deg)' };
    },
  },
  data: function() {
    return {
      isOpen: false,
      styles: {
        caret: {
          transition: 'transform 0.2s',
          verticalAlign: 'middle',
          cursor: 'pointer',
          fontSize: '1.2rem',
        },
        responsiveIframeContainer: {
          background: '#f0f0f0',
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

var app = new Vue({
  el: '#publications',
});
