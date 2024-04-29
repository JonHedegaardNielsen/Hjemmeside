document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const list = document.getElementById('Jokes');

    // Add event listener for input changes
    searchInput.addEventListener('input', function(event) {
        const searchTerm = event.target.value.toLowerCase();
        filterList(searchTerm);
    });

    // Function to filter the list based on search term
    function filterList(searchTerm) {
        const items = list.getElementsByTagName('li');
        Array.from(items).forEach(function(item) {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});
