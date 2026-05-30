function getUserInfo() {
    alert("Fetching profile data");

    return {
        name: "Amina Ahmed ",
        nationality: "Somalia",
        age: 25,
        
    };
}

console.log("Starting profile loading process");

const user = getUserInfo();

console.log("Profile loaded successfully:", user);

console.log("This message waits until the profile is ready");





console.log("Part 2");

function getUserInformation(callback) {
    setTimeout(() => {
        const user = {
            name: "Mohamed Abdullahi",
            nationality: "Somalia",
            age: 29
        };

        callback(user);
    }, 2000);
}

console.log("Requesting profile data");

getUserInformation(function(user) {
    console.log("Profile received:", user);
});

console.log("This runs while we wait for the server response");