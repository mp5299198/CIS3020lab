function calculateItem() {
    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;

    let score = {};

    // Tally choices
    score[q1] = (score[q1] || 0) + 1;
    score[q2] = (score[q2] || 0) + 1;

    // Determine result
    let result = "";
    let highest = 0;

    for (let item in score) {
        if (score[item] > highest) {
            highest = score[item];
            result = item;
        }
    }

    // Map result to Zelda item
    let itemName = "";
    if (result === "power") itemName = "Master Sword";
    if (result === "defense") itemName = "Hylian Shield";
    if (result === "utility") itemName = "Hookshot";
    if (result === "music") itemName = "Ocarina of Time";

    document.getElementById("result").textContent =
        "Your Zelda item is: " + itemName + "!";
}