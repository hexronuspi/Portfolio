// Step 1: Select all H2 elements
const h2Elements = document.querySelectorAll('.docs-content h2');

// Step 2: Create a new navigation element
const navList = document.querySelector('#docs-nav');

// Step 3: Loop through all H2 elements
h2Elements.forEach((h2, h2Index) => {
  // Step 4: Assign an id to each H2 if it doesn't already have one
  const h2Id = h2.id || `section-${h2Index + 1}`;
  h2.id = h2Id;

  // Create a list item for the navigation
  const h2ListItem = document.createElement('li');
  const h2Anchor = document.createElement('a');
  h2Anchor.href = `#${h2Id}`;
  h2Anchor.textContent = h2.textContent;
  h2ListItem.appendChild(h2Anchor);

  h2.innerHTML += '<a href="#top">#back to top</a>';
  // Find all H3 elements that are siblings of this H2 until the next H2
  let nextElement = h2.nextElementSibling;
  const h3List = document.createElement('ul');

  while (nextElement && nextElement.tagName !== 'H2') {
    if (nextElement.tagName === 'H3') {
      const h3Id = nextElement.id || `section-${h2Index + 1}-h3-${Array.from(nextElement.parentNode.children).indexOf(nextElement)}`;
      nextElement.id = h3Id;

      const h3ListItem = document.createElement('li');
      const h3Anchor = document.createElement('a');
      h3Anchor.href = `#${h3Id}`;
      h3Anchor.textContent = nextElement.textContent;
      h3ListItem.appendChild(h3Anchor);

      h3List.appendChild(h3ListItem);
    }
    nextElement = nextElement.nextElementSibling;
  }

  if (h3List.children.length > 0) {
    h2ListItem.appendChild(h3List);
  }

  // Append the list item to the navigation list
  navList.appendChild(h2ListItem);
});