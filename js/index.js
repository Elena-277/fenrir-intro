const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `&copy Elena Baklanova ${thisYear}`;
footer.appendChild(copyright);

const skills = ['JavaScript', 'HTML', 'CSS'];
const skillsSection = document.getElementById('skills');
skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerHTML = `${skills[i]}`;
    skillsList.appendChild(skill);
};

messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;
   
    console.log(name, email, message);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
        
    newMessage.innerHTML = `<a href = mailto:${email}>${name}</a>
    <span>${message}</span> `;
    
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", () => {
            const entry = removeButton.parentNode;
            entry.remove();
        });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    
    messageForm.reset();
});  


fetch('https://api.github.com/users/Elena-277/repos')
.then(response =>response.json())
.then(data => insertLinks(data))

function insertLinks(repositories) {
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");
    for (let i = 0; i < repositories.length; i++){
        const project = document.createElement("li"); 
        project.setAttribute('id','repoList');
        project.innerHTML = `<a href = ${repositories[i].html_url}>${repositories[i].name}</a><br>
        updated: ${repositories[i].updated_at}`;
        projectList.appendChild(project);
    }
}

    