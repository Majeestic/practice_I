let numberOfFilms;
let howMuchFilmsRememver;

function start() {

    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms  == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }

    howMuchFilmsRememver = prompt('Сколько фильмов Вы можете назвать?', '');
    while (howMuchFilmsRememver == '' || howMuchFilmsRememver == null || isNaN(howMuchFilmsRememver)) {
      howMuchFilmsRememver = prompt('Сколько фильмов Вы можете назвать?', '');
    }
}
// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

function rememberMyFilms () {
  for (let i = 0; i < howMuchFilmsRememver; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}
// rememberMyFilms();



function detectPersonalLevel () {
  if (personalMovieDB.count < 10) {
    console.log('мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('произошла ошибка');
  }
}
// detectPersonalLevel();

function showMyDB(privat) {
  if (privat == false) {
    // console.log('Ok')
    console.log(personalMovieDB);
  }
}

// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();
console.log(personalMovieDB);