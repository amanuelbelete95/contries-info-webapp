import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes, { string } from 'prop-types';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import uuid4 from 'uuid4';
import styles from '../styles/Searching.module.css';

const Searching = ({ myArray, text }) => (
  <>
    {myArray
      .filter((item) => {
        if (item && item.name && item.name.common) {
          const ans = item.name.common.toLowerCase();
          return ans.includes(text.toLowerCase());
        }
        return false;
      })
      .map((item) => (
        <div key={uuid4()}>
          <NavLink
            to="details"
            state={{ country: item }}
            className={styles.link}
          >
            <FaRegArrowAltCircleRight />
            <span>{item.flag}</span>
            <p>
              {item.name.common}
              <br />
              {item.population}
              {' '}
              people
            </p>
          </NavLink>
        </div>
      ))}
  </>
);

export default Searching;

Searching.propTypes = PropTypes.shape({
  myArray: PropTypes.arrayOf(string),
  text: PropTypes.string,
}).isRequired;
