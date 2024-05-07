document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const list = document.getElementById('Jokes');
    const items = list.getElementsByTagName('li');

    searchInput.addEventListener('input', function(event) {
        const searchTerm = event.target.value.toLowerCase();

        Array.from(items).forEach(function(item) {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});