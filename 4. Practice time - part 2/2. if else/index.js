let age = 28

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if(age < 6){
    console.log("Wohoo! The ticket is free for you.")
} else if(age<18){
    console.log("Child discount is available for you!")
} else if(age<26){
    console.log("Student discount is available for you!")
} else if(age<66){
    console.log("You need to pay full price")
} else if(age > 66){
    console.log("Senior citizen discount is available for you!")
}
