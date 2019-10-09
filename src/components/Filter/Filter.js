import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import useGlobalHook from '../../hooks/globalHooks';

import Button from "../Button/Button";

import './Filter.scss';

const Filter = () => {
  const priceRef = useRef(null);
  const categoriesRef = useRef(null);
  const [globalState, setGlobalState] = useGlobalHook();
  const [isChecked, setIsChecked] = useState(false);
  const [isClickedPrice, setIsClickedPrice] = useState(false);
  const [isClickedCategories, setIsClickedCategories] = useState(false);

  const updatePrice = (e) => {
    setIsClickedPrice(!isClickedPrice);
    setGlobalState({price: e.target.value});
  }

  const updateCategories = (e) => {
    setIsClickedCategories(!isClickedCategories);
    setGlobalState({categories: e.target.value});
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (priceRef.current && !priceRef.current.contains(event.target)){
      setIsClickedPrice(false);
    }
    if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
      setIsClickedCategories(false); 
    }
  };
  return (
    <>
    <form className="filter-form-container">
      <label className="filter-form-label">Filter By:</label>

       {/*  is_open_now 

        When the "Open Now" filter is clicked, we update the local state to
        update the component (to show it's an active filter), and updated 
        the is_open_now filter variable to CardList can go fetch a new list. */}
      <label className="filter-form-input">
        <input
          onChange={
            (e) => { 
              setIsChecked(e.target.checked)
              setGlobalState({is_open_now: !isChecked})
            }
          }
          type="checkbox"
          checked={isChecked}
          className="filter-input-is_open"
        />
        <span className="radio"/>
        Open Now
      </label> 

        {/* PRICE LIST 
          A fixed number of elements, OK with hardcoding (in this instance), but
          would probably come back and refactor to a quick loop.
        */}
        <div className="filter-form-list-container">
          <label 
            ref={priceRef}
            className="filter-form-list-label price" 
            onClick={() => setIsClickedPrice(!isClickedPrice)}>
              Price
          </label>

          <ul className={classNames('filter-form-list', isClickedPrice && 'price')}>
            <li>
              <label>
                <input name="price" value="" onClick={(e) => updatePrice(e)} type="radio" />
                <span className="check"/>
                All
              </label>
            </li>
            <li>
              <label>
                <input name="price" value="1" onClick={(e) => updatePrice(e)} type="radio" />
                <span className="check"/>
                $
              </label>
            </li>
            <li>
              <label>
                <input name="price" value="2" onClick={(e) => updatePrice(e)} type="radio" />
                <span className="check"/>
                $$
              </label>
            </li>
            <li>
              <label>
                <input name="price" value="3" onClick={(e) => updatePrice(e)} type="radio" />
                <span className="check"/>
                $$$
              </label>
            </li>
            <li>
              <label>
                <input name="price" value="4" onClick={(e) => updatePrice(e)} type="radio" />
                <span className="check"/>
                $$$$
              </label>
            </li>
          </ul>
        </div>


        {/* CATEGORIES LIST 
          This is crunchy and needs to be updated for pulling from Yelp and dynamically
          creating elements. I was having trouble finding the best way to pull food category 
          results with the GraphQL route. 
        */}
        <div className="filter-form-list-container">
          <label 
            ref={categoriesRef}
            className="filter-form-list-label categories"
            onClick={() => setIsClickedCategories(!isClickedCategories)}>
              Categories
            </label>

          <ul className={classNames('filter-form-list', isClickedCategories && 'categories')}>
            <li>
              <label>
              <input 
                name="category" 
                value="" 
                onClick={(e) => updateCategories(e)} 
                type="radio" />
                <span className="check"/>
              All
              </label>
            </li>
            <li>
              <label>
                <input 
                  name="category" 
                  value="italian" 
                  onClick={(e) => updateCategories(e)} 
                  type="radio" 
                />
                <span className="check"/>
                Italian
              </label>
            </li>
            <li>
              <label>
                <input 
                  name="category" 
                  value="seafood" 
                  onClick={(e) => updateCategories(e)} 
                  type="radio" 
                />
                <span className="check"/>
                Seafood
              </label>
            </li>
            <li>
              <label>
                <input 
                  name="category" 
                  value="steakhouse" 
                  onClick={(e) => updateCategories(e)} 
                  type="radio" 
                />
                <span className="check"/>
                Steakhouse
              </label>
            </li>
            <li>
              <label>
                <input 
                  name="category" 
                  value="japanese" 
                  onClick={(e) => updateCategories(e)} 
                  type="radio" 
                />
                <span className="check"/>
                Japanese
              </label>
            </li>
            <li>
              <label>
                <input 
                  name="category" 
                  value="american" 
                  onClick={(e) => updateCategories(e)} 
                  type="radio" 
                />
                <span className="check"/>
                American
              </label>
            </li>
            <li>
              <label>
                <input 
                  name="category" 
                  value="mexican" 
                  onClick={(e) => updateCategories(e)} 
                  type="radio" 
                />
                <span className="check"/>
                Mexican
              </label>
            </li>
            <li>
              <label>
                <input 
                  name="category" 
                  value="thai" 
                  onClick={(e) => updateCategories(e)} 
                  type="radio" 
                />
                <span className="check"/>
                Thai
              </label>
            </li>
          </ul>
        </div>
    </form>


    {/* Reset all of the filters back to their original values */}
    <div className="filter-form-button-container">
      <Button inverted onClick={
        () => (
          setGlobalState({
            price: "",
            categories: "All",
            is_open_now: false}
          ),
          setIsChecked(false),
          setIsClickedPrice(false),
          setIsClickedCategories(false)
          
          )}>
          Clear All
      </Button>
    </div>

    </>
  );

}

export default Filter;