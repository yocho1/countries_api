import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const url = 'https://restcountries.eu/rest/v2/all'

const Countries = () => {
  const [countries, setCountries] = useState([])

  const fetchCountries = async () => {
    const response = await fetch(url)
    const countrie = await response.json()
    setCountries(countrie)
    console.log(countries)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <>
      <section className='grid'>
        {countries.map((country) => {
          const {
            numericCode,
            name,
            flag,
            population,
            region,
            capital,
          } = country

          return (
            <article key={numericCode}>
              <div className='flag'>
                <img src={flag} alt={name} />
              </div>
              <div className='details'>
                <h4 className='country-name'>
                  Name: <span>{name}</span>
                </h4>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
                <Link to={`/countries/${name}`} className='btn'>
                  Learn more
                </Link>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Countries
