import React from 'react';
import classes from './Header.module.css';
import CartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <CartButton onClick={props.onShowCart}>Cart</CartButton>
      </header>
      <div className={classes['main-image']}>
        <img
          src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/code/02-adding-a-header-cmp/src/assets/meals.jpg?raw=true"
          alt="A table full of delecious food!"
        />
      </div>
    </>
  );
};

export default Header;
