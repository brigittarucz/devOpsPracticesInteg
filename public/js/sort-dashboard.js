var relevanceAscending = 1;

// eslint-disable-next-line no-unused-vars
function sortByRelevance() {
  var aEvents = document.querySelector('.main__home-events_container');

  if (relevanceAscending) {
    // Ascending
    var newOrder = Array.from(aEvents.children).sort(function (a, b) {
      return getRelevance(b) - getRelevance(a);
    });
    event.target.textContent = 'Relevance: Lowest to Highest';
  } else {
    // Descending
    newOrder = Array.from(aEvents.children).sort(function (a, b) {
      return getRelevance(a) - getRelevance(b);
    });
    event.target.textContent = 'Relevance: Highest to Lowest';
  }

  newOrder.forEach(childNode => {
    aEvents.appendChild(childNode);
  });

  relevanceAscending = !relevanceAscending;
}

function getRelevance(queryElement) {
  return queryElement.getAttribute('data-relevance') ? parseInt(queryElement.getAttribute('data-relevance')) : 0;
}

var dateAscending = 1;

// eslint-disable-next-line no-unused-vars
function sortByDate() {
  var aEvents = document.querySelector('.main__home-events_container');

  if (dateAscending) {
    // Ascending
    var newOrder = Array.from(aEvents.children).sort(function (a, b) {
      return getRelevance(b) - getRelevance(a);
    });
    event.target.textContent = 'Date: Latest to Closest';
  } else {
    // Descending
    newOrder = Array.from(aEvents.children).sort(function (a, b) {
      return getRelevance(a) - getRelevance(b);
    });
    event.target.textContent = 'Date: Closest to Latest';
  }

  newOrder.forEach(childNode => {
    aEvents.appendChild(childNode);
  });

  dateAscending = !dateAscending;
}

// function getRelevance(queryElement) {
//     return queryElement.getAttribute("data-timestamp");
// }
