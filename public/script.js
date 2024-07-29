document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('fetch-data');
    button.addEventListener('click', async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        displayData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
  });
  
  function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = '';
    
    const dl = document.createElement('dl'); // Create the <dl> element
  
    data.forEach(item => {
      // Create <dt> for the name with ID
      const dt = document.createElement('dt');
      dt.textContent = `${item.id}. ${item.name}`;
      
      // Create <dd> for the description
      const ddDescription = document.createElement('dd');
      ddDescription.textContent = item.description;
  
      // Create <dd> for the link
      const ddLink = document.createElement('dd');
      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = 'Learn more';
      link.target = '_blank'; // Open link in a new tab
      ddLink.appendChild(link);
  
      // Append <dt> and <dd> elements to the <dl> element
      dl.appendChild(dt);
      dl.appendChild(ddDescription);
      dl.appendChild(ddLink);
    });
  
    container.appendChild(dl); // Append the <dl> element to the container
  }
  