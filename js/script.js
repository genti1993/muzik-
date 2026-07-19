document.addEventListener("DOMContentLoaded", () => {
    // 1. Krijojmë një Audio Player të thjeshtë në fund të faqes
    const playerContainer = document.createElement("div");
    playerContainer.style.position = "fixed";
    playerContainer.style.bottom = "0";
    playerContainer.style.left = "0";
    playerContainer.style.width = "100%";
    playerContainer.style.background = "#1a1a1e";
    playerContainer.style.padding = "15px";
    playerContainer.style.borderTop = "1px solid #29292e";
    playerContainer.style.display = "none";
    playerContainer.style.zIndex = "9999";
    playerContainer.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; color: white;">
            <div id="player-info" style="font-size: 14px; font-weight: bold;"></div>
            <audio id="main-audio" controls style="width: 50%;"></audio>
        </div>
    `;
    document.body.appendChild(playerContainer);

    const audioPlayer = document.getElementById("main-audio");
    const playerInfo = document.getElementById("player-info");

    // 2. Kapim të gjitha klikimet mbi këngët (klasa init-track)
    const tracks = document.querySelectorAll(".init-track");
    
    tracks.forEach(track => {
        track.addEventListener("click", (e) => {
            e.preventDefault(); // Ndalon hapjen e linkut origjinal

            // Lexojmë atributet data- të këngës që klikuam
            const title = track.getAttribute("title");
            const streamBase64 = track.getAttribute("data-stream");

            // Shfaqim emrin e këngës në player
            playerInfo.innerText = "Po luhet: " + title;
            playerContainer.style.display = "block";

            // Shënim: Skedarët e vërtetë MP3 në sajt kërkojnë serverin origjinal.
            // Për projektin tuaj lokal, mund të vendosni një skedar testues mp3 këtu:
            audioPlayer.src = "https://soundhelix.com"; 
            audioPlayer.play();
        });
    });

    // 3. Menaxhimi i menusë anësore (Navigimi)
    const navLinks = document.querySelectorAll(".nav li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            navLinks.forEach(l => l.classList.remove("on"));
            link.classList.add("on");
        });
    });
});

