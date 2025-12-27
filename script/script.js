const data_project = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dHVLp6Jdx3sD8i0qIFgWeJM0Ic12XkAozA&s",
    title: "Meta Verse",
    desc: "This is about meta verse project and its uses. using VR and AR technology.",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dHVLp6Jdx3sD8i0qIFgWeJM0Ic12XkAozA&s",
    title: "Meta Verse",
    desc: "This is about meta verse project and its uses.",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dHVLp6Jdx3sD8i0qIFgWeJM0Ic12XkAozA&s",
    title: "Meta Verse",
    desc: "This is about meta verse project and its uses.",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dHVLp6Jdx3sD8i0qIFgWeJM0Ic12XkAozA&s",
    title: "Meta Verse",
    desc: "This is about meta verse project and its uses. ",
  },
];

const projectContainer = document.getElementsByClassName("container")[0];
data_project.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("card");
  projectElement.innerHTML = `
  <img src="${project.url}" alt="${project.title}" />
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
  `;
  projectContainer.appendChild(projectElement);
});
