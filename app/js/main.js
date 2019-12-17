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
      questions: [
        {"name": "steadyIncome", "text": "I am only looking for steady income."},
        {"name": "peoplePerson", "text": "I consider myself a people person."},
        {"name": "drive", "text": "I can drive for long stretches and keep my focus."},
        {"name": "physicalWork", "text": "I can lift heavy boxes, assemble things, or clean a house."},
        {"name": "skilled", "text": "I'm skilled in music, sports, math, or another topic, and would love to share my knowledge."},
        {"name": "fixingThings", "text": "When someone needs something fixed around the house, they call me."},
        {"name": "kids", "text": "I like working with kids."},
        {"name": "organized", "text": "I'm highly organized."},
        {"name": "comfortHome", "text": "I prefer to work from the comfort of my own home."},
        {"name": "lovesDogs", "text": "I am comfortable handling multiple dogs at one time."},
        {"name": "regularClients", "text": "I prefer regular clients I can develop relationships with rather than one-shot deals."},
        {"name": "menialTasks", "text": "I don't mind doing menial tasks."},
        {"name": "socialMedia", "text": "I am good at, and enjoy using, social media."},
        {"name": "groceryShopper", "text": "I can stay calm in a busy grocery store."},
      ],
      
      selected: [],

      result: '',
      runnerUp: '',
      runnerUp2: '',

      showRideShareQuestion: false,
      carYesNo: '',
      showAssistantQuestion: false,
      computerYesNo: '',

      showError: '',

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

        let questions = this.questions;

        if (questions[0].checked) {
          sideHustles.rideShare++;
          sideHustles.tutor+=2;
          sideHustles.groceryShopper++;
          sideHustles.dogWalker+=2;
          sideHustles.virtualAssistant+=2;
        }

        if (questions[1].checked) {
          sideHustles.rideShare++;
          sideHustles.tutor+=2;
          sideHustles.virtualAssistant++;
        }

        if (questions[2].checked) {
          sideHustles.rideShare+=2;
        }

        if (questions[3].checked) {
          sideHustles.taskHandler+=2;
        }

        if (questions[4].checked) {
          sideHustles.tutor+=2;
        } else {
          sideHustles.tutor-=20;
        }

        if (questions[5].checked) {
          sideHustles.taskHandler+=2;
        }

        if (questions[6].checked) {
          sideHustles.tutor+=2;
        }

        if (questions[7].checked) {
          sideHustles.tutor++;
          sideHustles.groceryShopper++;
          sideHustles.virtualAssistant+=2;
        }

        if (questions[8].checked) {
          sideHustles.tutor++;
          sideHustles.virtualAssistant+=2;
        }

        if (questions[9].checked) {
          sideHustles.dogWalker+=2;
        }

        if (questions[10].checked) {
          sideHustles.tutor+=2;
          sideHustles.dogWalker+=2;
          sideHustles.taskHandler++;
          sideHustles.virtualAssistant+=2;
        }

        if (questions[11].checked) {
          sideHustles.rideShare+=2;
          sideHustles.groceryShopper+=2;
          sideHustles.dogWalker++;
          sideHustles.taskHandler+=2;
          sideHustles.virtualAssistant+=2;
        }

        if (questions[12].checked) {
          sideHustles.virtualAssistant+=2;
        }

        if (questions[13].checked) {
          sideHustles.groceryShopper+=2;
        }

        let quizResults = "Ride-share: " + sideHustles.rideShare +  "; Tutor: " + sideHustles.tutor + "; Grocery shopper: " + sideHustles.groceryShopper + "; Dog Walker: " + sideHustles.dogWalker + "; Task handler: " + sideHustles.taskHandler + "; Virtual assistant: " + sideHustles.virtualAssistant;

        let sorted; 

        console.log(quizResults)

        let valueArray = Object.values(sideHustles);
        let sum = valueArray.reduce((a, b) => a + b, 0)

        if (sum == -20) {
          this.showError = !this.showError;
        } else {
          sorted = Object.keys(sideHustles)
                      .sort(function(a,b){
                        return sideHustles[b] - sideHustles[a] || 0.5 - Math.random();
                      });
          console.log(sorted)
          this.result = sorted[0],
          this.runnerUp = sorted[1];
          this.runnerUp2 = sorted[2];
          this.showError = false;
        }

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
      findFallback: function (result, runnerUp, runnerUp2) {

          if (runnerUp == "rideShare" || runnerUp == "virtualAssistant") {
            this.showRideShareQuestion = !this.showRideShareQuestion;
            this.showAssistantQuestion = !this.showAssistantQuestion;
            if (this.carYesNo == "no" && this.computerYesNo == "no") {
              result=runnerUp2;
              this.hideQuestion();
            }
            
          } else {
            result = runnerUp;
            this.hideQuestion();
          }

          if (result == "tutor") {
            this.showTutor = !this.showTutor;
          } else if (result == "groceryShopper") {
            this.showShopper = !this.showShopper;
          } else if (result == "dogWalker") {
            this.showWalker = !this.showWalker;
          } else if (result == "taskHandler") {
            this.showHandler = !this.showHandler
          } 

      },
      reset: function() {
        this.showRideShare = false;
        this.showTutor = false;
        this.showShopper = false;
        this.showWalker = false;
        this.showHandler = false;
        this.showAssistant = false;
        this.computerYesNo = '';
        this.carYesNo = '';

        this.hideQuestion();
      },
      hideQuestion: function() {
        this.showRideShareQuestion = false;
        this.showAssistantQuestion = false;
        
      },
      resetAll: function() {

        this.reset();

        this.showRideShareQuestion = false;
        this.showAssistantQuestion = false;

        for (var i=0;i<this.questions.length;i++) {
          if (this.questions[i].checked) {
            this.questions[i].checked = false;
          }
            
            
        }


      }
    }
  })
// }, 1000)