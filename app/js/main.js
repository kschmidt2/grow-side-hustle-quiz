// setTimeout(function(){
  var calculator = new Vue({
    el: '#calculator',
    data: {
      currentAge: '',
      retirementAge: '67',
      income: '',
      incomeIncrease: '',
      savingsYesNo: '',
      currentSavings: '',
      annualGrowth: 'average',
      retirementIncome: '',
      socialSecurity: '',
      totalNeeded: '75',
      saveAmount: '',
      seen: false
    },
    computed: {
      // calculator math goes here
      savingsGoal: function() {
        let totalNeeded = this.income * (90-this.retirementAge) * .75,
            annualAmount = (totalNeeded-this.currentSavings) / (this.retirementAge-this.currentAge),
            monthlyAmount = annualAmount/12;

        let results = '<p><b>Total needed:</b> $' + totalNeeded.toLocaleString(0) +  '</p><p><b>Annual amount:</b> $' + annualAmount.toLocaleString(0) + '</p><p><b>Monthly savings:</b> $' + monthlyAmount.toLocaleString(0) + '</p>';
        console.log(monthlyAmount)
        
        return '$' + Math.round(monthlyAmount).toLocaleString();
      }
    },
    methods: {
      // functions go here
    }
  })
// }, 1000)