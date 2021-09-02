const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs))
}

const displaySearchResult = docs => {
  const searchCount = document.getElementById('count-search');

  // Search count area
  searchCount.innerHTML= `<h3>Total results: ${docs.length} </h3> </br>`;
  const searchResult = document.getElementById('search-result');
  // Cleaning previous results
  searchResult.innerHTML='';
    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
            <div class="col">
              <div class="card">
                <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top img-size" alt="...">
                <div class="card-body">
                  <h4 class="card-title">${doc.title}</h4>
                  <h6 class="card-title">Author: ${doc.author_name}</h6>
                  <p class="card-title">Publish Year: ${doc.first_publish_year}
                </div>
              </div>
            </div>
        `
        searchResult.appendChild(div);
        // console.log(doc);

    })
}