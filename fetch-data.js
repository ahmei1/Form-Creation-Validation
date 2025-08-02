// 1. Define async function
async function fetchUserData() {
    // 2. API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Get the container
    const dataContainer = document.getElementById('api-data');

    try {
        // 4. Fetch API data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // 5. Clear loading message
        dataContainer.innerHTML = '';

        // 6. Create a <ul> list
        const userList = document.createElement('ul');

        // 7. Loop through users
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // 8. Add the list to the page
        dataContainer.appendChild(userList);

    } catch (error) {
        // 9. Handle any errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// 10. Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
