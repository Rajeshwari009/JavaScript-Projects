
let totalNotesCount = 0;
let showingNotesCount = 0;

function handleFormSubmit(event) {
  event.preventDefault();
  const notebook = {
    title: event.target.title.value,
    description: event.target.description.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/40a870c4f8dd4982a1673ce7138cd5b2/notebook",
      notebook
    )
    .then((response) => {
      displayUserOnScreen(response.data);
      updateNotesCount();
    })
    .catch((error) => console.log(error));

  // Clearing the input fields
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}

function updateNotesCount() {
  totalNotesCount++;
  showingNotesCount++;
  updateNotesCountDisplay();
}

function deleteNotebookItem(notebook) {
  const userList = document.querySelector("ul");
  userList.removeChild(notebook.parentElement);
  totalNotesCount--;
  showingNotesCount--;
  updateNotesCountDisplay();
}

function updateNotesCountDisplay() {
  const totalNotesElement = document.getElementById("totalNotes");
  const showingNotesElement = document.getElementById("showingNotes");

  totalNotesElement.textContent = `Total Notes: ${totalNotesCount}`;
  showingNotesElement.textContent = `Showing: ${showingNotesCount}`;
}

function displayUserOnScreen(notebook) {
  const userItem = document.createElement("li");
  userItem.appendChild(
    document.createTextNode(`${notebook.title} - ${notebook.description} `)
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);

  const userList = document.querySelector("ul");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    deleteNotebookItem(event.target);
    axios
      .delete(
        `https://crudcrud.com/api/40a870c4f8dd4982a1673ce7138cd5b2/${notebook._id}`
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  editBtn.addEventListener("click", function (event) {
    deleteNotebookItem(event.target);
    localStorage.removeItem(notebook.title);
    document.getElementById("title").value = notebook.title;
    document.getElementById("description").value = notebook.description;
  });

  updateNotesCount();
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("book").addEventListener("input", searchNotebook);
  
  axios
    .get("https://crudcrud.com/api/40a870c4f8dd4982a1673ce7138cd5b2/notebook")
    .then((result) => {
      console.log(result);
      for (let i = 0; i < result.data.length; i++) {
        displayUserOnScreen(result.data[i]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

function searchNotebook() {
    const searchInput = document.getElementById("book").value.toLowerCase();
    const userList = document.querySelector("ul");
  
    Array.from(userList.children).forEach((notebookItem) => {
      const notebookTitle = notebookItem.textContent.toLowerCase();
      if (notebookTitle.includes(searchInput)) {
        notebookItem.style.display = "block"; // Show the matching item
      } else {
        notebookItem.style.display = "none"; // Hide non-matching items
      }
    });


  
    updateShowingNotesCount();
  }
  
  function updateShowingNotesCount() {
    const userList = document.querySelector("ul");
    const visibleNotebooks = Array.from(userList.children).filter(
      (notebookItem) => notebookItem.style.display !== "none"
    );
  
    showingNotesCount = visibleNotebooks.length;
    updateNotesCountDisplay();
  }
  
 
  











  