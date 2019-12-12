Vue.component('result', {
  props: ['title', 'image', 'content'],
  template: `
    <div>
      <h2>You got: <span class="highlight">{{ title }}</span></h2>
      <img v-bind:src="image" class="result-image">
      <p class="body-text" v-html="content"></p>
    </div>
  `
})

// setTimeout(function(){
  var quiz = new Vue({
    el: '#quiz',
    data: {
      steadyIncome: '',
      peoplePerson: '',
      drive: '',
      physicalWork: '',
      skilled: '',
      fixingThings: '',
      kids: '',
      organized: '',
      comfortHome: '',
      lovesDogs: '',
      regularClients: '',
      menialTasks: '',
      socialMedia: '',
      groceryShopper: '',

      result: '',
      runnerUp: '',

      showRideShareQuestion: false,
      carYesNo: '',
      showAssistantQuestion: false,
      computerYesNo: '',

      showRideShare: '',
      showTutor: '',
      showShopper: '',
      showWalker: '',
      showHandler: '',
      showAssistant: ''
    },
    computed: {
      // results go here

    },
    methods: {
      // functions go here
      calculateResults: function() {

        this.reset();

        let sideHustles = {
          rideShare: 0,
          tutor: 0,
          groceryShopper: 0,
          dogWalker: 0,
          taskHandler: 0,
          virtualAssistant: 0
        };

        if (this.steadyIncome) {
          sideHustles.rideShare++;
          sideHustles.tutor+=2;
          sideHustles.groceryShopper++;
          sideHustles.dogWalker++;
          sideHustles.virtualAssistant+=2;
        }

        if (this.peoplePerson) {
          sideHustles.rideShare++;
          sideHustles.tutor++;
          sideHustles.virtualAssistant++;
        }

        if (this.drive) {
          sideHustles.rideShare+=2;
        }

        if (this.physicalWork) {
          sideHustles.taskHandler+=2;
        }

        if (this.skilled) {
          sideHustles.tutor+=2;
        }

        if (this.fixingThings) {
          sideHustles.taskHandler+=2;
        }

        if (this.kids) {
          sideHustles.tutor+=2;
        }

        if (this.organized) {
          sideHustles.tutor++;
          sideHustles.groceryShopper++;
          sideHustles.virtualAssistant+=2;
        }

        if (this.comfortHome) {
          sideHustles.tutor++;
          sideHustles.virtualAssistant+=2;
        }

        if (this.lovesDogs) {
          sideHustles.dogWalker+=2;
        }

        if (this.regularClients) {
          sideHustles.tutor+=2;
          sideHustles.dogWalker+=2;
          sideHustles.taskHandler++;
          sideHustles.virtualAssistant+=2;
        }

        if (this.menialTasks) {
          sideHustles.rideShare+=2;
          sideHustles.groceryShopper+=2;
          sideHustles.dogWalker++;
          sideHustles.taskHandler+=2;
          sideHustles.virtualAssistant+=2;
        }

        if (this.socialMedia) {
          sideHustles.virtualAssistant+=2;
        }

        if (this.groceryShopper) {
          sideHustles.groceryShopper+=2;
        }

        let quizResults = "Ride-share: " + sideHustles.rideShare +  "; Tutor: " + sideHustles.tutor + "; Grocery shopper: " + sideHustles.groceryShopper + "; Dog Walker: " + sideHustles.dogWalker + "; Task handler: " + sideHustles.taskHandler + "; Virtual assistant: " + sideHustles.virtualAssistant;

        let sorted = Object.keys(sideHustles)
                      .sort(function(a,b){
                        return sideHustles[b] - sideHustles[a] || 0.5 - Math.random();
                      });

        console.log(quizResults)
        console.log(sorted)

        this.result = sorted[0],
        this.runnerUp = sorted[1];

        if (this.result == "rideShare") {
          this.showRideShareQuestion = !this.showRideShareQuestion;
        } else if (this.result == "virtualAssistant") {
          this.showAssistantQuestion = !this.showAssistantQuestion;
        } else if (this.result == "tutor") {
          this.showTutor = !this.showTutor;
        } else if (this.result == "groceryShopper") {
          this.showShopper = !this.showShopper;
        } else if (this.result == "dogWalker") {
          this.showWalker = !this.showWalker;
        } else if (this.result == "taskHandler") {
          this.showHandler = !this.showHandler
        }

      },
      findFallback: function (result, runnerUp) {
        if (this.carYesNo === 'no' || this.computerYesNo === 'no') {
          result = runnerUp;
          if (result == "tutor") {
            this.showTutor = !this.showTutor;
          } else if (result == "groceryShopper") {
            this.showShopper = !this.showShopper;
          } else if (result == "dogWalker") {
            this.showWalker = !this.showWalker;
          } else if (result == "taskHandler") {
            this.showHandler = !this.showHandler
          }
        }

        this.hideQuestion();
      },
      reset: function() {
        this.showRideShare = false;
        this.showTutor = false;
        this.showShopper = false;
        this.showWalker = false;
        this.showHandler = false;
        this.showAssistant = false;
        this.computerYesNo = false;
        this.carYesNo = false;
      },
      hideQuestion: function() {
        this.showRideShareQuestion = false;
        this.showAssistantQuestion = false;
      }
    }
  })
// }, 1000)