function loveCalculator(event) {
    event.preventDefault(); // Prevents form from refreshing the page

    // Get the values from the input fields
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;

    // Generate a random love percentage between 1 and 100
    var percentage = Math.floor(Math.random() * 100) + 1;

    // Display the result
    document.getElementById("result").innerText = 
        `${name1} and ${name2} have a ${percentage}% love match! ❤️`;
}
