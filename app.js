var movies = [
    {
        watched: "",   // Boolean("")=false
        name: "The Prestige",
        year: 2006,
        country: "USA", 
        note: "science fiction mystery thriller film",
        actors: ["Hugh Jackman", "Christian Bale", "Scarlett Johansson"]
    },
    {
        watched: "",
        name: "Agora",
        year: 2009,
        country: "Spain",
        note: "historical drama film",
        actors: ["Rachel Weisz", "Max Minghella", "Oscar Isaac"]
    },
    {
        watched: "",
        name: "Shutter Island",
        year: 2010,
        country: "USA",
        note: "neo-noir psychological thriller film",
        actors: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"]
    }
];

function displayMoviesAsTable(moviesToShow = null){

    if(moviesToShow == null) moviesToShow = movies;

    let tableContents = "";
    moviesToShow.forEach( (movie) => {
        
        tableContents += `<tr class="row_color">
                            <td><input class="form-check-input" type="checkbox" value="" id="movie" name="cb"></td>
                            <td>${movie.name}</td>
                            <td>${movie.year}</td>
                            <td>${movie.country}</td>
                            <td>${movie.note}</td>
                            <td>${movie.actors}</td>
                        </tr>`;

    });

    document.getElementById("movie_table_body").innerHTML = tableContents;

}



function validateName(){
    let x = document.getElementById("name_input").value;
    if (x == ""){
        alert("Niste unijeli naziv filma!");
        return false;
    }
}
function validateYear(){
    let y = document.getElementById("year_input").value;
    if (y<1930 || y>2021){
        alert("Unijeli se neadekvatnu godinu!");
        return false;
    }
}
function validateActors(){
    let z = document.getElementById("actor_input").value;
    if (z.length < 1){
        alert("Niste unijeli nijednog glumca/icu!");
        return false;
    }
}

function getUserInputs() {

    let watched = document.getElementById("movie").value;
    let name = document.getElementById("name_input").value; 
    let country = document.getElementById("country_input").value; 
    let year = document.getElementById("year_input").value; 
    let note = document.getElementById("note_input").value; 
    let actors = document.getElementById("actor_input").value; 
        let actors_array = actors.split(",");
        for (let i in actors_array){
            i.trim();
        } 


    return {
        watched: watched,
        name: name,
        year: year,
        country: country,
        note: note,
        actors: actors_array
    }
}

function clearInputs(){
    document.getElementById("new_movie_form").reset(); 
}

function addNewMovie() {
    let newMovie = getUserInputs();
    let v = validateName();
    let g = validateYear();
    let a = validateActors();
    if (v != false && g != false && a != false){
    movies.push(newMovie);
    displayMoviesAsTable();
    clearInputs();
    }
}

document.getElementById("new_movie_form").addEventListener('submit', (e) => {
    e.preventDefault();
    addNewMovie();

});




displayMoviesAsTable();


// radi samo dok imam prva tri predefinisana elementa :( 
$('input[name="cb"]').on('change', function() {
    $(this).closest('tr').toggleClass('green', $(this).is(':checked'));
  });


  