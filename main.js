import './style.css'
import { searchTenCountries } from './calculate'

document.querySelector('#app').innerHTML = `
  <div class="pt-6" id="containerButton">
    <button class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" id="calculatePopulation" type="button">Population</button>
    <button class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" id="calculateLanguages" type="button">Languages</button>
  </div>
  <div id="container">
      <p class="text-center pb-8" id="info-text"></p>
      <ul id="list"></ul>
      <div id="population-chart-container" class="chart-container">
        <canvas id="population-chart"></canvas>
      </div>
      <div id="languages-chart-container" class="chart-container">
        <canvas id="languages-chart"></canvas>
      </div>
      <div class="count-container">
        <p>Total: <span id="count">0</span></p>
      </div>
  </div>
`

searchTenCountries(document.querySelector('#calculatePopulation'), document.querySelector('#calculateLanguages'))

