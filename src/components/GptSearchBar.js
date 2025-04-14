import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";

import model from "../utils/genAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //OpenAI to search

    const gptQuery =
      "Act as a movies recomendation system and suggest some movies for the  :" +
      searchText.current.value +
      " only give me 5 series, separated by commas like the example given ahead. Example result : Don, sholay, John wick, gadar, koi mil geya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(gptResults.choices);

    // const response = await model.generateContent({
    //   messages: [{ role: "user", content: gptQuery }],
    //   maxLength: 2048, // Optional
    // });
    // console.log(response.text);

    const prompt = gptQuery;
    const result = await model.generateContent([prompt]);
    console.log(result.response?.candidates[0]?.content?.parts[0]?.text);

    const gptMovies =
      result.response?.candidates[0]?.content?.parts[0]?.text.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    // console.log("tmdb results");
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full bg-black md:w-1/2 grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 rounded-sm col-span-9
          "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-600 text-white rounded-md col-span-3 hover:bg-red-500"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
