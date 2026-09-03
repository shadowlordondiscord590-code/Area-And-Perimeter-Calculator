const area_btn = document.getElementById("area_btn");
const perimeter_btn = document.getElementById("perimeter_btn");
const display = document.getElementById("result");
const shape_select = document.getElementById("shape");

function calculate_area(){
    const shape = document.getElementById("shape").value;
    const first_parameter = Number(document.getElementById("first_parameter").value);
    const second_parameter = Number(document.getElementById("second_parameter").value);
    const third_parameter = Number(document.getElementById("third_parameter").value);
    const fourth_parameter = Number(document.getElementById("fourth_parameter").value);

    if (first_parameter <= 0) return "Invalid input";

    if (shape === "Quadrilateral"){
        if (second_parameter <= 0) return "Invalid input";
        return (first_parameter * second_parameter).toFixed(2);
    }

    else if (shape === "Circle"){
        return (Math.PI * (first_parameter ** 2)).toFixed(2);
    }

    else if (shape === "Triangle"){
        if (second_parameter <= 0 || third_parameter <= 0 || first_parameter <= 0) return "Invalid input";
        const semiPerimeter = (first_parameter + second_parameter + third_parameter) / 2;
        const area = Math.sqrt(semiPerimeter * (semiPerimeter - first_parameter) * (semiPerimeter - second_parameter) * (semiPerimeter - third_parameter));
        return area.toFixed(2);
    }

    else if (shape === "Regular_polygon"){
        if (second_parameter <= 0 || first_parameter < 3) return "Invalid input";
        return ((1/4) * first_parameter * (second_parameter ** 2) * (1 / Math.tan(Math.PI / first_parameter))).toFixed(2);
    }
    
    else if (shape === "Rhombus"){
        if (second_parameter <= 0) return "Invalid input";
        return (0.5 * first_parameter * second_parameter).toFixed(2);
    }

    else if (shape === "Paralelogram"){
        if (second_parameter <= 0 || third_parameter <= 0 || third_parameter >= 180) return "Invalid input";
        const angle_radians = third_parameter * (Math.PI / 180);
        return (first_parameter * second_parameter * Math.sin(angle_radians)).toFixed(2);
    }

    else if (shape === "Trapezoid"){
        if (second_parameter <= 0 || third_parameter <= 0 || fourth_parameter <= 0) return "Invalid input";
        const diff = Math.abs(second_parameter - first_parameter);
        if (diff === 0) return "Invalid input";
        
        const step1 = ((diff ** 2) + (third_parameter ** 2) - (fourth_parameter ** 2)) / (2 * diff);
        const height_squared = (third_parameter ** 2) - (step1 ** 2);
        if (height_squared <= 0) return "Invalid input";
        
        const height = Math.sqrt(height_squared);
        return (((first_parameter + second_parameter) / 2) * height).toFixed(2);
    }
}

function calculate_perimeter(){
    const shape = document.getElementById("shape").value;
    const first_parameter = Number(document.getElementById("first_parameter").value);
    const second_parameter = Number(document.getElementById("second_parameter").value);
    const third_parameter = Number(document.getElementById("third_parameter").value);
    const fourth_parameter = Number(document.getElementById("fourth_parameter").value);

    if (first_parameter <= 0) return "Invalid input";

    if (shape === "Quadrilateral"){
        if (second_parameter <= 0) return "Invalid input";
        return (2 * (first_parameter + second_parameter)).toFixed(2);
    }

    else if (shape === "Circle"){
        return (2 * Math.PI * first_parameter).toFixed(2);
    }

    else if (shape === "Triangle"){
        if (second_parameter <= 0 || third_parameter <= 0) return "Invalid input";
        if (first_parameter + second_parameter <= third_parameter || first_parameter + third_parameter <= second_parameter || second_parameter + third_parameter <= first_parameter) {
            return "Invalid triangle sides";
        }
        return (first_parameter + second_parameter + third_parameter).toFixed(2);
    }

    else if (shape === "Regular_polygon"){
        if (second_parameter <= 0 || first_parameter < 3) return "Invalid input";
        return (first_parameter * second_parameter).toFixed(2);
    }
    
    else if (shape === "Rhombus"){
        if (second_parameter <= 0) return "Invalid input";
        return (2 * Math.sqrt((first_parameter ** 2) + (second_parameter ** 2))).toFixed(2);
    }

    else if (shape === "Paralelogram"){
        if (second_parameter <= 0) return "Invalid input";
        return (2 * (first_parameter + second_parameter)).toFixed(2);
    }

    else if (shape === "Trapezoid"){
        if (second_parameter <= 0 || third_parameter <= 0 || fourth_parameter <= 0) return "Invalid input";
        return (first_parameter + second_parameter + third_parameter + fourth_parameter).toFixed(2);
    }
}

function updateDOM (){
    // get all the parameters in 1 constant for styling

    const parameters = document.getElementById("parameters");
    /* get the parameter field(s) via getElementById 
    and constant variables*/

    const first_parameter_feild = document.getElementById("first_parameter_feild");
    const second_parameter_feild = document.getElementById("second_parameter_feild");

    // extra parameter feilds

    const third_parameter_feild = document.getElementById("third_parameter_feild");
    const fourth_parameter_feild = document.getElementById("fourth_parameter_feild");
    const extra_parameters = document.getElementById("extra_parameters");
    
    // get the input boxes specicly (for styling purposes) 

    const first_input_feild = document.getElementById("first_parameter");
    const second_input_feild = document.getElementById("second_parameter");
    const third_input_feild = document.getElementById("third_parameter");
    const fourth_input_feild = document.getElementById("fourth_parameter");

    // get the labels specifcly (also for styling purposes)

    const first_label = document.getElementById("first_parameter_label");
    const second_label = document.getElementById("second_parameter_label");
    const third_label = document.getElementById("third_parameter_label");
    const fourth_label = document.getElementById("fourth_parameter_label");

    // ✨ ADD THESE 4 LINES HERE TO RESET THE VALUES
    first_input_feild.value = "";
    second_input_feild.value = "";
    third_input_feild.value = "";
    fourth_input_feild.value = "";

    // reset the visibility before updating DOM

    parameters.style.display = "block";
    first_parameter_feild.style.display = "block";
    second_parameter_feild.style.display = "block";
    third_parameter_feild.style.display = "block";
    fourth_parameter_feild.style.display = "block";
    extra_parameters.style.display = "block";

    // reset the display

    display.textContent = "";

    // actually update the DOM using a switch statement
    switch(shape_select.value){ // used your top variable here instead of repeating getElementById
        case "Quadrilateral":
            extra_parameters.style.display = "none";
            first_label.textContent = "length";
            second_label.textContent = "width";
            break;

        case "Circle":
            second_parameter_feild.style.display = "none";
            extra_parameters.style.display = "none";
            first_label.textContent = "radius";
            break;

        case "Triangle":
            fourth_parameter_feild.style.display = "none";
            first_label.textContent = "side 1:";
            second_label.textContent = "side 2:";
            third_label.textContent = "side 3:";
            break;

        case "Regular_polygon":
            extra_parameters.style.display = "none";
            first_label.textContent = "No. of sides:";
            second_label.textContent = "side length:";
            break;
                
        case "Rhombus":
            extra_parameters.style.display = "none";
            first_label.textContent = "diagonal 1:";
            second_label.textContent = "diagonal 2:";
            break;

        case "Paralelogram":
            fourth_parameter_feild.style.display = "none";
            first_label.textContent  = "side 1 length:";
            second_label.textContent = "side 2 length:";
            third_label.textContent = "interior angle:";
            break;

        case "Trapezoid":
            first_label.textContent = "side 1:";
            second_label.textContent = "side 2:";
            third_label.textContent = "side 3:";
            fourth_label.textContent = "side 4:";
            break;
    }
}

shape_select.addEventListener("change", updateDOM);

area_btn.onclick = () => {
    const res = calculate_area();
    display.textContent = isNaN(res) ? res : `the area is ${res}`;
};

perimeter_btn.onclick = () => {
    const res = calculate_perimeter();
    display.textContent = isNaN(res) ? res : `the perimeter is ${res}`;
};

updateDOM();