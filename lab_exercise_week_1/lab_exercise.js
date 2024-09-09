// Jacob Solano
// 101348583

// Finding angle type javascript program
function find_angle_type(angle) {
    if (angle === 0) {
        return "No angle";
    }
    else if (angle < 90) {
        return "Acute angle";
    }
    else if (angle === 90) {
        return "Right angle";
    }
    else if (angle < 180){
        return "Obtuse angle";
    }
    else if (angle === 180) {
        return "Straight angle";
    }
    // When user inputs a string or a number less than 0 or greater than 180
    else {
        return "Please input a valid angle. Must be between 0 and 180 degrees";
    }
}

console.log(find_angle_type(181));
console.log(find_angle_type(0));
console.log(find_angle_type(90));
console.log(find_angle_type(180));
console.log(find_angle_type(45));
console.log(find_angle_type(131));
console.log(find_angle_type("string test"))
