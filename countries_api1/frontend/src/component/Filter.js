import React from 'react'

function Filter() {
  window.addEventListener('DOMContentLoaded', () => {
    const search = document.getElementById('search')

    search.addEventListener('click', (e) => {
      const { value } = e.target
      console.log(value)

      const countryName = document.querySelectorAll('.country-name')

      countryName.forEach((name) => {
        if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
          name.parentElement.parentElement.style.display = 'block'
        } else {
          name.parentElement.parentElement.style.display = 'none'
        }
      })
    })
  })

  return (
    <section className='filter'>
      <form className='form-control'>
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search for a country'
        />
      </form>

      <div className='region-filter'>
        <select name='select' id='select' className='select'>
          <option value='Filter by region'>Filter by region</option>
          <option value='Africa'>Africa</option>
          <option value='America'>America</option>
          <option value='America'>Europe</option>
          <option value='America'>Eceania</option>
        </select>
      </div>
    </section>
  )
}

export default Filter
