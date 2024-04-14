// import NavBar from '../NavBar/navbar';

function Header() {
  return (
    <header>
      {/* <NavBar /> */}
          {/* <div class="spacer"></div>
    <div alt="time" class="time">
      <img src="@/assets/speakers.png" class="icon-image" />
      <time>
        {{ time }}
      </time>
    </div>
  </nav> */}
  {/* </style> */}

{/* <script>
import moment from "moment";
export default {
  name: "Navbar",
  data: function () {
    return {
      activeWindows: this.$store.getters.getActiveWindows,

      // date time for moment.js
      time: "",
      date: "",
    };
  },
  beforeMount() {
    setInterval(() => {
      this.time = moment().format("hh:mm A");
    }, 1000);
    setInterval(() => {
      this.date = moment().format("ddd DD MMMM");
    }, 1000);
  },
  methods: {
    openWindow(windowId) {
      const payload = {
        windowState: "open",
        windowID: windowId,
      };
      this.$store.commit("setWindowState", payload);
    },
  },
};
</script> */}
    </header>
  );
}

export default Header;