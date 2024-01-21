async function fetchUserInfo() {
  const username = document.getElementById("username").value;
  const userInfoContainer = document.getElementById("userInfo");

  if (username.trim() === "") {
    alert("Please enter a GitHub username.");
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();

    userInfoContainer.innerHTML = `
            <p><strong>Public Repositories:</strong> ${userData.public_repos}</p>
            <p><strong>Followers:</strong> ${userData.followers}</p>
            <p><strong>Following:</strong> ${userData.following}</p>
            <p><strong>User Profile URL:</strong> <a href="${userData.html_url}" target="_blank">${userData.html_url}</a></p>
        `;

    userInfoContainer.classList.remove("hidden");
  } catch (error) {
    alert("Error fetching GitHub info. Check the username and try again.");
    console.error(error);
  }
}
