//script.js
const students = [
"vaishnavi Bhamburkar","Radha Chaudhari","Renuka Pohukar","Sarika Kale","Priya Sadar"," Dipti Thakra","Gayatri Mankar","Ashwani Khadse","Shital Mohare","Shital Khadse","Papiya Mohod","Rani Deshmukh","Dipa Rout","Sakshi Patil","Rohini Thakre","Viahakha AWare","Samrudhi Mahalle","Tanvi Bais","Ankita Mohod"," Sonu Khadkar","Punak Kalpande","Swati Kale","Sandhya Patil","Dhanashri Rout","Krutika Tatte","Megha Sarve"," Vaishnavi Chouvhan","Sweeti Kadu","Chakuli Pote","Prachi Agdhate","Janvhi Kale","Bhavna Kaval","Twjashei Aware"
];

const shuffleArray = (array) => 
{
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
};

const generateGroups = (students, roomNumbers) => 
{
const groupsContainer = document.getElementById("groupsContainer");
groupsContainer.innerHTML = "";
shuffleArray(students);

for (let i = 0; i < students.length; i += 3) 
{const group = document.createElement("div");
group.className = "group";

for (let j = 0; j < 3 && i + j < students.length; j++) {
const studentName = students[i + j];
const studentElement = document.createElement("p");
studentElement.textContent = `${studentName}`;
group.appendChild(studentElement);
}

groupsContainer.appendChild(group);
}
};

const shuffleButton = document.getElementById("shuffleBtn");
shuffleButton.addEventListener("click", () => {
generateGroups(students);
});

// Initial group generation
generateGroups(students);




 