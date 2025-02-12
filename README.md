# Shrinkwrap App: Flaggle - A Flag Guessing Game

This project is a web application called Flaggle, a flag guessing game inspired by JetPunk quizzes. It was developed as part of a course assignment requiring the use of HTML, CSS, JavaScript, and SVG, with a strong emphasis on SVG functionality.

## Motivation

My primary motivation for creating Flaggle stemmed from the fact that JetPunk, a website I frequently use for quizzes about flags, geography, and history, is blocked on my school's computers. To overcome this limitation and continue enjoying flag-related quizzes, I decided to build my own flag guessing game.

## Functionality

Flaggle presents users with an SVG image of a flag and prompts them to guess the country it represents. The game tracks the user's progress, displaying the current question number and the total number of flags. It provides feedback on whether the user's guess is correct and advances to the next flag upon a correct answer. The game covers a comprehensive set of flags from around the world.  It also incorporates a synonym system, so that if a country has multiple names (like "Turkey" and "Türkiye", "United States" and "US"), the user can guess either and it will be counted as correct.

## Technologies Used

* **HTML:** Provides the structure and content of the web page.
* **CSS:** Styles the visual presentation of the game, including layout, colors, and fonts.
* **JavaScript:** Implements the game logic, handles user input, updates the display, and manages the game flow.  This includes shuffling the order of flags, checking answers (including against synonyms), and managing the game state.
* **SVG (Scalable Vector Graphics):** A core component of the project, SVGs are used to display the flags. SVGs were taken from https://github.com/lipis/flag-icons.

## Project Structure (Example - Adapt as needed)
