function bmi(weight, height) {
    let bmiValue = weight / (height ** 2)
   
    if(bmiValue <= 18.5){
      return "Underweight"
    }else if(bmiValue <= 25){
      return "Normal"
    }else if(bmiValue <= 30){
      return "Overweight"
    }else if(bmiValue > 30){
      return "Obese"
    }
  }  