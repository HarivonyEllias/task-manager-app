function showLoader() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = '<div id="loader-container"><div id="loading-text">Harivony Ellias</div><br/><div class="spinner"></div></div>';
    document.body.appendChild(loader);
    
    // Simuler un délai de chargement
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000); // Temps en millisecondes
}


// Fonction pour faire apparaître le formulaire avec une animation
function showForm() {
    const formContainer = document.getElementById('taskFormContainer');
    formContainer.classList.remove('hidden');
    formContainer.style.display = "block";
    formContainer.classList.add('fadeIn');
}

// Ajouter un événement de chargement de page pour afficher le loader
window.addEventListener('load', showLoader);

// Appeler showForm() lorsqu'on clique sur le bouton pour ajouter une tâche
document.getElementById('addTaskBtn').addEventListener('click', showForm);
