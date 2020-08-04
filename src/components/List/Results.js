import React from 'react'

import Item from './Item'
import LoadingAnimation from '../shared/LoadingAnimation'
import HttpError from '../shared/HttpError'

function filterOpenNow (openNow, isClosed) {
  return (openNow && !isClosed) || !openNow
}

function filterPrice (price, itemPrice) {
  return !price || (typeof itemPrice === 'string' && price === itemPrice.length)
}

function Results ({
  items,
  error,
  fetchState,
  clientFilters,
  moreAvailable,
  categoryTitle
}) {
  const { openNow, price } = clientFilters

  const filteredItems = Array.isArray(items)
    ? items.filter(item => {
        if (
          filterOpenNow(openNow, item.is_closed) &&
          filterPrice(price, item.price)
        ) {
          return true
        }
        return false
      })
    : null

  const hiddenCount = Array.isArray(items)
    ? items.length - filteredItems.length
    : 0

  return (
    <div className='list-results row' data-testid='list-results'>
      <div className='list-results-header'>
        <h2>{categoryTitle || 'All'} Restaurants</h2>

        {hiddenCount > 0 && (
          <div className='list-results-message'>
            <span className='icon'>&#9432;</span>

            <span className='label'>
              Check your filters! {hiddenCount} resturant
              {hiddenCount > 1 ? 's were' : ' was'} filtered out.
            </span>
          </div>
        )}
      </div>

      {filteredItems && filteredItems.length ? (
        <div className='list-results-grid' data-testid='results-grid'>
          {filteredItems.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      ) : fetchState === 'LOADING' ? null : (
        <div className='list-results-nothing' data-testid='nothing-found'>
          No restaurants matching your search criteria were found.{' '}
          {/* {hiddenCount
            ? `${hiddenCount} ${hiddenCount > 1 ? 'were' : 'was'} filtered out.`
            : ''} */}
        </div>
      )}

      {fetchState === 'LOADING' && <LoadingAnimation show withContainer />}

      {fetchState === 'ERROR' && (
        <HttpError inline status={error.status} message={error.statusText} />
      )}
    </div>
  )
}

export default Results
