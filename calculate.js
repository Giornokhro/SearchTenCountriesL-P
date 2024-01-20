import { countries_data } from './countries'
import { showBarChart } from './chart'

let populationChart, languagesChart

export function searchTenCountries(populationButton, languagesButton) {
    populationButton.addEventListener('click', showPopulation)
    languagesButton.addEventListener('click', showLanguages)
}

function showPopulation() {
    const infoText = document.getElementById('info-text')
    const list = document.getElementById('list')
    const count = document.getElementById('count')
    const populationChartContainer = document.getElementById('population-chart-container')
    const languagesChartContainer = document.getElementById('languages-chart-container')

    // Limpiar contenido previo
    list.innerHTML = ''

    // Ordenar países por población de mayor a menor
    const sortedCountries = countries_data.sort((a, b) => b.population - a.population)

    // Mostrar el párrafo de texto
    infoText.textContent = '10 paises mas poblados'

    // Mostrar los 10 países más poblados
    for (let i = 0; i < 10; i++) {
        const country = sortedCountries[i]
        const listItem = document.createElement('li')
        listItem.innerHTML = `<div>${country.name}</div><div>${country.population.toLocaleString()}</div>`
        list.appendChild(listItem)
    }

    // Mostrar el gráfico de barras para la población
    if (!populationChart) {
        populationChart = showBarChart('population-chart', sortedCountries.slice(0, 10).map(country => country.name), sortedCountries.slice(0, 10).map(country => country.population))
    } else {
        populationChart.destroy()
        populationChart = showBarChart('population-chart', sortedCountries.slice(0, 10).map(country => country.name), sortedCountries.slice(0, 10).map(country => country.population))
    }

    populationChartContainer.style.display = 'block'

    // Actualizar la cantidad total
    const totalPopulation = countries_data.reduce((acc, country) => acc + country.population, 0)
    count.textContent = totalPopulation.toLocaleString()

    // Ocultar el gráfico de idiomas
    languagesChartContainer.style.display = 'none'
}

function showLanguages() {
    const list = document.getElementById('list')
    const infoText = document.getElementById('info-text')
    const count = document.getElementById('count')
    const populationChartContainer = document.getElementById('population-chart-container')
    const languagesChartContainer = document.getElementById('languages-chart-container')

    // Limpiar contenido previo
    list.innerHTML = ''

    // Contar la frecuencia de cada idioma
    const languageCount = {}
    countries_data.forEach(country => {
        country.languages.forEach(language => {
            languageCount[language] = (languageCount[language] || 0) + 1
        })
    })

    // Ordenar idiomas por frecuencia de mayor a menor
    const sortedLanguages = Object.keys(languageCount).sort((a, b) => languageCount[b] - languageCount[a])

    // Mostrar el párrafo de texto
    infoText.textContent = '10 idiomas mas hablados'

    // Mostrar los 10 idiomas más hablados
    for (let i = 0; i < 10; i++) {
        const language = sortedLanguages[i]
        const listItem = document.createElement('li')
        listItem.innerHTML = `<div>${language}</div><div>${languageCount[language]}</div>`
        list.appendChild(listItem)
    }

    // Mostrar el gráfico de barras para los idiomas
    if (!languagesChart) {
        languagesChart = showBarChart('languages-chart', sortedLanguages.slice(0, 10), sortedLanguages.slice(0, 10).map(language => languageCount[language]))
    } else {
        languagesChart.destroy()
        languagesChart = showBarChart('languages-chart', sortedLanguages.slice(0, 10), sortedLanguages.slice(0, 10).map(language => languageCount[language]))
    }

    languagesChartContainer.style.display = 'block'

    // Actualizar la cantidad total
    const totalLanguages = Object.values(languageCount).reduce((total, count) => total + count, 0)
    count.textContent = totalLanguages

    // Ocultar el gráfico de población
    populationChartContainer.style.display = 'none'
}
