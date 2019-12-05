// setTimeout(function(){
  var calculator = new Vue({
    el: '#calculator',
    data: {
      currentAge: '',
      retirementAge: '',
      baseSalary: '',
      savingsYesNo: '',
      currentSavings: '',
      annualGrowth: '',
      retirementIncome: '',
      socialSecurity: '',
      totalNeeded: '',
      saveAmount: '',
      seen: false
    },
    computed: {
      // calculator math goes here
      savingsGoal: function() {
        // let totalNeeded = this.income * (90-this.retirementAge) * .75,
        //     annualAmount = (totalNeeded-this.currentSavings) / (this.retirementAge-this.currentAge),
        //     monthlyAmount = annualAmount/12;

        // let results = '<p><b>Total needed:</b> $' + totalNeeded.toLocaleString(0) +  '</p><p><b>Annual amount:</b> $' + annualAmount.toLocaleString(0) + '</p><p><b>Monthly savings:</b> $' + monthlyAmount.toLocaleString(0) + '</p>';
        // console.log(monthlyAmount)
        
        // return '$' + Math.round(monthlyAmount).toLocaleString();
        console.log("hello")

        if (this.currentAge > this.retirementAge) {
          return "You can't retire in the past"
        };
      
        if (this.retirementAge > 90) {
          return "Congrats on discovering immortality! Why not just retire right now?"
        };
      
        let lifetimeEarnings = 0,
            salary = this.baseSalary,
            yearsToDeath = 90 - this.retirementAge,
            years = this.retirementAge - this.currentAge,
            incr = 1.02;
      
        for (let i = 0; i < years; i++) {
          salary = parseFloat((salary * incr).toFixed(2))
          lifetimeEarnings += salary
        };
      
        let goal = (salary * .75) * yearsToDeath;
      
        salary = this.baseSalary;
      
        let balance = this.currentSavings,
            leftover = true,
            basePct = .01;
      
        while(leftover === true && basePct <= 1) {
          for (let i = 0; i < years; i++) {
            balance += parseFloat((salary * basePct).toFixed(2))
            balance += parseFloat((balance * this.annualGrowth).toFixed(2))
            salary = parseFloat((salary * incr).toFixed(2))
          };
      
          console.log(`${Math.round(basePct * 100)}% of your salary: $${parseFloat(balance)} of $${parseFloat(goal.toFixed(2))}`);

          return `${Math.round(basePct * 100)}% of your salary: $${parseFloat(balance)} of $${parseFloat(goal.toFixed(2))}`
      
          if (goal > balance) {
            salary = this.baseSalary
            balance = this.currentSavings
            basePct += .01
          } else {
            salary = this.baseSalary
            balance = this.currentSavings
            basePct -= .001
            leftover = false
          }
        };
      
        if (basePct < 1){
          return Math.round(basePct * 100)
        } else {
          return `It is impossible for you to retire at ${this.retirementAge}`
        }
      }
    },
    methods: {
      // functions go here
    }
  })
// }, 1000)

// function savingsRate(baseSalary, annualGrowth, currentAge, retirementAge, currentSavings) {
//   if (currentAge > retirementAge) {
//     return "You can't retire in the past"
//   };

//   if (retirementAge > 90) {
//     return "Congrats on discovering immortality! Why not just retire right now?"
//   };

//   let lifetimeEarnings = 0,
//       salary = baseSalary,
//       yearsToDeath = 90 - retirementAge,
//       years = retirementAge - currentAge,
//       incr = 1.02;

//   for (let i = 0; i < years; i++) {
//     salary = parseFloat((salary * incr).toFixed(2))
//     lifetimeEarnings += salary
//   };

//   let goal = (salary * .75) * yearsToDeath;

//   salary = baseSalary;

//   let balance = currentSavings,
//       leftover = true,
//       basePct = .01;

//   while(leftover === true && basePct <= 1) {
//     for (let i = 0; i < years; i++) {
//       balance += parseFloat((salary * basePct).toFixed(2))
//       balance += parseFloat((balance * annualGrowth).toFixed(2))
//       salary = parseFloat((salary * incr).toFixed(2))
//     };

//     console.log(`${Math.round(basePct * 100)}% of your salary: $${parseFloat(balance.toFixed(2))} of $${parseFloat(goal.toFixed(2))}`);

//     if (goal > balance) {
//       salary = baseSalary
//       balance = currentSavings
//       basePct += .01
//     } else {
//       salary = baseSalary
//       balance = currentSavings
//       basePct -= .001
//       leftover = false
//     }
//   };

//   if (basePct < 1){
//     return Math.round(basePct * 100)
//   } else {
//     return `It is impossible for you to retire at ${retirementAge}`
//   }
// };

// savingsRate(50000,1.06,25,70,0)