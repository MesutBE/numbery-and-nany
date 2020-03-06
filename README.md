# Numbery & NaNy

# Project Numbery & NaNy

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Development Strategy](#development-strategy)
- [Screen Capture of Project](#screen-capture-of-project)
- [Project Status](#project-status)
- [Contact](#contact)
- [Live Project](https://mesutbe.github.io/calculator-refactor/)

## General info

This is a website that sorts user-provided strings into two categories, _NaNy_ and _Numbery_.

- Further specifications:
  - If a user inputs the same value twice, it will not saved in app. The lists will never have repeated values
  - After a user has removed a value from the state, it is possible add it again.

## Technologies

Project is created with:

- JScript
- HTML5 /CSS3

## Setup

Clone this repository and start using it with your editor.

## Development Strategy

### 0. Setup, Data & Log

| file name   | role                                                  |
| ----------- | ----------------------------------------------------- |
| index.html  | Basic html page' includes js file srcs.               |
| init.js     | empty file                                            |
| log.js      | empty file                                            |
| handler.js  | to handle user input and make necessary calculations. |
| listener.js | to listen user events                                 |

### 1. User Story: DOM

| tag name    | attributes                                                                                   | role                                                                           |
| ----------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `<section>` | `id="user-interface"`                                                                        | the section that contains all user interface elements                          |
| `<form>`    | `id="user-form" class="centered margin-top-bottom`                                           | the section that contains all user interface elements                          |
| `<input>`   | `class="margin-top-bottom" type="text" name="textInput" placeholder="write something here!"` | the value for user to input                                                    |
| `<button>`  | `id="saveButton" class="margin-top-bottom"`                                                  | button to save current state and verify if the input value _NaNy_ or _Numbery_ |
| `<button>`  | `id="removeButton" class="margin-top-bottom"`                                                | button to remove value from the list                                           |
| `<div>`     | `style="display: flex; flex-direction: row;"`                                                | block with 2 output column values                                              |
| `<div>`     | `id="results-Numbers" style="width: 50vw; border: solid 1px grey;"`                          | list to show _Numbery_ values                                                  |
| `<div>`     | `id="results-NaNs" style="width: 50vw; border: solid 1px grey;"`                             | list to show _Nany_ values                                                     |
| `<button>`  | `id="resetButton" class="margin-top-bottom"`                                                 | button to reset the current value                                              |

### 2. User Story: Styling

| class name           | description                    | role                                     |
| -------------------- | ------------------------------ | ---------------------------------------- |
| `.centered`          | sets position for all elements | make block of buttons more user-friendly |
| `.margin-top-bottom` | sets margin values to style    |                                          |

### 3. User Story: Listeners

| type      | attached to    | callback        |
| --------- | -------------- | --------------- |
| `'click'` | `saveButton`   | `saveHandler`   |
| `'click'` | `removeButton` | `removeHandler` |
| `'click'` | `resetButton`  | `resetHandler`  |

### 4. User Story: Handlers

| syntax            | parameters | return value                                    | behavior                                                                                                                                                       |
| ----------------- | ---------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `saveHandler()`   | event      | Boolean: should the browser continue as normal? | reads user input save current state and verify if this input value is _NaNy_ or _Numbery_, then provide the result to the user and alerts the browser 'OK'     |
| `removeHandler()` | event      | Boolean: should the browser continue as normal? | reads user input and verify it input value is already used, then provide the result to the user, logs old state and removed value then alerts the browser 'OK' |
| `resetHandler()`  | event      | Boolean: should the browser continue as normal? | reset the user input and current saved numbers to the default state, then provide the result to the user, logs old state and alerts the browser 'OK'           |

## Screen Capture of Project

![Screenshot from 2020-03-06 01-52-14](https://user-images.githubusercontent.com/59531743/76039595-2cfb2b00-5f4d-11ea-8090-4a569402eec1.png)

## Project Status

Project finished

## Contact

You can contact me using [my repository](https://mesutbe.github.io/) whenever you want.
