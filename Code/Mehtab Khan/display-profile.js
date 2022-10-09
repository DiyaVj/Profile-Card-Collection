let data_profile;
fetch("https://codemehtab.github.io/my-profile-card/profile-card.json")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        data_profile = data
        for(let entry in data_profile) {
            a = document.getElementById("#"+entry);
            if(a) {
                if (["H2", "H6", "P"].includes(a.tagName)) {
                    a.textContent =  data_profile[entry];
                }
                if(["IMG"].includes(a.tagName)){
                    a.setAttribute("src", data_profile[entry]);
                }
                if(["A"].includes(a.tagName)){
                    if(entry=="email") {
                        a.setAttribute("href", "mailto:"+data_profile[entry]);
                    }
                    else {
                        a.setAttribute("href", data_profile[entry]);
                    }
                }
            }
        }
    })
    .catch((error) => console.error("FETCH ERROR:", error));