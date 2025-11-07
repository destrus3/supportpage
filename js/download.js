// Fetch the webpage
fetch('https://example.com')
  .then(response => response.text())
  .then(html => {
    // Parse the HTML to find the first download link
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const downloadLink = doc.querySelector('a[href$=".pdf"], a[href$=".zip"], a[href$=".exe"]'); // Adjust selector as needed

    if (downloadLink) {
      const url = downloadLink.href;
      const fileName = 'renamed_file.zip'; // Your desired filename

      // Create a temporary anchor to trigger download
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      console.log('No download link found.');
    }
  })
  .catch(error => console.error('Error:', error));
