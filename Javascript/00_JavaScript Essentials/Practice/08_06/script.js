/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
const backpack = {
    name: "New Backpack",
    color: "green",
    volume: 8,
    pocketNum: 5,
    status: "closed",
    openBackpack: function(){
        if (this.status == "closed") {
            this.status = "opened";
        } else {
            this.status = "closed";
        }
    }
}

const addBackpack = function(currentBP){
    const newDiv = document.createElement("div");
    newDiv.innerHTML =`
        <h1>${currentBP.name}</h1>
        <ul>
            <li>${currentBP.color}</li>
            <li>${currentBP.status}</li>
            <li>${currentBP.pocketNum}</li>
        </ul>
        `;
    return newDiv;
};

//Get Element
const main = document.querySelector("main");
main.append(addBackpack(backpack));
