import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    changeCategory,
    changeRating,
    activeCategoryId,
    activeRatingId,
    onUpdateSearch,
    onClearFilter,
  } = props

  let searchValue = ''

  const onChangeSearchInput = event => {
    searchValue = event.target.value
  }

  const onSubmitSearch = event => {
    event.preventDefault()
    onUpdateSearch(searchValue)
  }

  const clearFilters = () => {
    onClearFilter()
  }

  return (
    <div className="filters-group-container">
      {/* Replace this element with your code */}
      <form className="search-card" onSubmit={onSubmitSearch}>
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          onChange={onChangeSearchInput}
        />
        <BsSearch className="search-icon" />
      </form>
      <h1 className="category-heading">Category</h1>
      <ul className="category-card">
        {categoryOptions.map(eachItem => {
          const activeCategory =
            eachItem.categoryId === activeCategoryId
              ? 'category-item category-item-selected'
              : 'category-item'

          const changeCategoryFunc = () => {
            changeCategory(eachItem.categoryId)
          }

          return (
            <li
              className={activeCategory}
              onClick={changeCategoryFunc}
              key={eachItem.categoryId}
            >
              <p className="">{eachItem.name}</p>
            </li>
          )
        })}
      </ul>

      <h1 className="category-heading">Rating</h1>
      <ul className="rating-card">
        {ratingsList.map(eachItem => {
          const activeRating = eachItem.ratingId === activeRatingId

          const changeRatingFunc = () => {
            changeRating(eachItem.ratingId)
          }

          return (
            <li
              className="rating-item"
              onClick={changeRatingFunc}
              key={eachItem.ratingId}
            >
              <img
                className="rating-img"
                src={eachItem.imageUrl}
                alt={`rating ${eachItem.ratingId}`}
              />
              <p className={`${activeRating && 'selected-styles'}`}>& up</p>
            </li>
          )
        })}
      </ul>

      <button className="clear-filter" type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
