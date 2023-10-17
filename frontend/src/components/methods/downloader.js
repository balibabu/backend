const downloader = (file) => {
    fetch(file.file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.blob();
        })
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = file.filename; // Set the desired file name
            link.click();
        })
        .catch(error => {
            console.log('Fetch error:', error);
        });
};

const downloader1 = (url,title) => {
    var filename = url.substring(url.lastIndexOf("/") + 1);

    var anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";  // Open the link in a new tab
    anchor.download = filename;  // Set the suggested file name

    // Trigger a click event on the anchor element
    var clickEvent = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: false
    });
    anchor.dispatchEvent(clickEvent);
}


export default downloader;