var song_index = 0;
var winter_sources = ["https://upload.wikimedia.org/wikipedia/commons/6/68/10_-_Vivaldi_Winter_mvt_1_Allegro_non_molto_-_John_Harrison_violin.ogg", "https://upload.wikimedia.org/wikipedia/commons/b/b1/11_-_Vivaldi_Winter_mvt_2_Largo_-_John_Harrison_violin.ogg", "https://upload.wikimedia.org/wikipedia/commons/2/21/12_-_Vivaldi_Winter_mvt_3_Allegro_-_John_Harrison_violin.ogg"];
var spring_sources = ["https://upload.wikimedia.org/wikipedia/commons/3/3c/01_-_Vivaldi_Spring_mvt_1_Allegro_-_John_Harrison_violin.ogg", "https://upload.wikimedia.org/wikipedia/commons/4/4e/02_-_Vivaldi_Spring_mvt_2_Largo_-_John_Harrison_violin.ogg", "https://upload.wikimedia.org/wikipedia/commons/f/fa/03_-_Vivaldi_Spring_mvt_3_Allegro_-_John_Harrison_violin.ogg"];
var summer_sources = ["https://upload.wikimedia.org/wikipedia/commons/1/19/04_-_Vivaldi_Summer_mvt_1_Allegro_non_molto_-_John_Harrison_violin.ogg", "https://upload.wikimedia.org/wikipedia/commons/5/5d/05_-_Vivaldi_Summer_mvt_2_Adagio_-_John_Harrison_violin.ogg", "https://upload.wikimedia.org/wikipedia/commons/1/11/06_-_Vivaldi_Summer_mvt_3_Presto_-_John_Harrison_violin.ogg"];
var fall_sources   = ["https://upload.wikimedia.org/wikipedia/commons/4/4f/07_-_Vivaldi_Autumn_mvt_1_Allegro_-_John_Harrison_violin.ogg", "https://upload.wikimedia.org/wikipedia/commons/5/5f/08_-_Vivaldi_Autumn_mvt_2_Adagio_molto_-_John_Harrison_violin.ogg", "https://upload.wikimedia.org/wikipedia/commons/b/b1/09_-_Vivaldi_Autumn_mvt_3_Allegro_-_John_Harrison_violin.ogg"];

var winter_movements = ["I. Allegro non molto", "II. Largo", "III. Allegro"];
var spring_movements = ["I. Allegro", "II. Largo", "III. Allegro"];
var summer_movements = ["I. Allegro non molto", "II. Adagio - Presto - Adagio", "III. Presto"];
var fall_movements   = ["I. Allegro", "II. Adagio molto", "III. Allegro Pastorale"];

function changesong(n, type){
	'use strict';

	var sound = document.getElementById('music');
	var name = document.getElementById('movement_name');
	var source = "";
	switch (type)
	{
		case "winter":
		song_index = (song_index + n) > winter_sources.length - 1 ? 0 : (song_index + n) < 0 ? winter_sources.length - 1 : song_index + n; 
		source = winter_sources[song_index];
		name.innerHTML = winter_movements[song_index];
		break;

		case "spring":
		song_index = (song_index + n) > spring_sources.length - 1 ? 0 : (song_index + n) < 0 ? spring_sources.length - 1 : song_index + n; 
		source = spring_sources[song_index];
		name.innerHTML = spring_movements[song_index];
		break;

		case "summer":
		song_index = (song_index + n) > summer_sources.length - 1 ? 0 : (song_index + n) < 0 ? summer_sources.length - 1 : song_index + n; 
		source = summer_sources[song_index];
		name.innerHTML = summer_movements[song_index];
		break;

		case "fall":
		song_index = (song_index + n) > fall_sources.length - 1 ? 0 : (song_index + n) < 0 ? fall_sources.length - 1 : song_index + n; 
		source = fall_sources[song_index];
		name.innerHTML = fall_movements[song_index];
		break;
	}

	sound.src = source;
	sound.oncanplaythrough = function () 
	{
		this.play();
	}
	  
}