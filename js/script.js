fetch('data/characters.json')
    .then(response => response.json())
    .then(data => {
        const characterList = document.getElementById('characterList');
        data.forEach(character => {
            const li = document.createElement('li');
            li.textContent = `${character.nombre} - ${character.casa}`;
            li.classList.add(character.casa.toLowerCase());
            characterList.appendChild(li);
        });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
