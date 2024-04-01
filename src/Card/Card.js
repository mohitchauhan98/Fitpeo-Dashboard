import React from 'react';
import './Card.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const cardsData = [
  {
    id: 1,
    icon: <MonetizationOnIcon />,
    iconBgColor: 'rgb(225, 247, 225)',
    title: 'Earning',
    amount: '$198k',
    arrowIcon: <ArrowUpwardIcon />,
    arrowText: '37.8%'
  },
  {
    id: 2,
    icon: <ListAltIcon />,
    iconBgColor: 'rgb(236, 220, 247)',
    title: 'Orders',
    amount: '$2.4k',
    arrowIcon: <ArrowDownwardIcon />,
    arrowText: '2%'
  },
  {
    id: 3,
    icon: <AccountBalanceIcon />,
    iconBgColor: 'rgb(202, 236, 250)',
    title: 'Balance',
    amount: '$2.4k',
    arrowIcon: <ArrowDownwardIcon />,
    arrowText: '2%'
  },
  {
    id: 4,
    icon: <ShoppingBagIcon />,
    iconBgColor: 'pink',
    title: 'Total Sales',
    amount: '$89k',
    arrowIcon: <ArrowUpwardIcon />,
    arrowText: '11%'
  }
];

const Card = () => {
  return (
    <div className='card-container'>
      {cardsData.map((card) => (
        <div className='card-box' key={card.id}>
          <div className='cb-icon' style={{ backgroundColor: card.iconBgColor }}>
            <span>{card.icon}</span>
          </div>
          <div className='cb-content'>
            <span>{card.title}</span>
            <span>{card.amount}</span>
            <div className='cb-contentText'>
              <span className='content-arrow' style={{ color: card.arrowIcon.props.color }}>
                {card.arrowIcon}
                {card.arrowText}
              </span>
              <span className='content-text'>this month</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
