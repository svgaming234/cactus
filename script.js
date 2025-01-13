// light/dark mode button toggle function
function lightdarktoggle() {
   toggleallelements("div.maindiv, div.subdiv, input", "darkmodediv")
   toggleallelements("html", "darkmodehtml")
   toggleallelements("a", "darkmodelink")
}

function toggleallelements(divs, toggle) {
   let query = document.querySelectorAll(divs)
   for (let i = 0; i < query.length; i++) {
      query[i].classList.toggle(toggle)
   }
}

// get live updating village stats
fetch("http://api.retromc.org/api/v1/village/getVillage?uuid=981b218f-706f-48c0-9ce0-bd877e63bbcb")
 .then(response => {return response.json()})
 .then(data => {
    const markup = `
    <h2>Stats</h2>
    Owner: SvGaming234<br>
    Assistants: ${data.assistants.length}<br>
    Members: ${data.members.length}<br>
    Spawn location: X:${data.spawn.x}, Y:${data.spawn.y}, Z:${data.spawn.z}<br>
    Claim count: ${data.claims}<br>
    Balance: $${data.balance}<br>
    `
    document.querySelector(".subdiv").innerHTML = markup
 })
 .catch(error => console.log(error))