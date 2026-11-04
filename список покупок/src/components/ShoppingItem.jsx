import React from 'react';

export default function ShoppingItem({ item, onDelete }) {
  return (
    <li className="shopping-item">
      <span className="item-check" aria-hidden="true">✓</span>
      <span className="item-name">{item.name}</span>
      <strong className="item-price">{item.price.toFixed(2)} <small>сом</small></strong>
      <button className="delete-button" type="button" onClick={() => onDelete(item.id)} aria-label={`Удалить ${item.name}`} title="Удалить">×</button>
    </li>
  );
}
