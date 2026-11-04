import React, { useState } from 'react';
import ShoppingItem from './components/ShoppingItem.jsx';

export default function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  function addItem(event) {
    event.preventDefault();
    if (!name.trim()) return;
    setItems([...items, { id: crypto.randomUUID(), name: name.trim(), price: Number(price) }]);
    setName('');
    setPrice('');
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Домой"><span className="brand-mark">✳</span> в корзину</a>
        <span className="top-note">ПЛАНИРУЙ ПОКУПКИ С УДОВОЛЬСТВИЕМ</span>
      </header>

      <section className="intro" id="top">
        <div className="intro-copy">
          <p className="eyebrow">ВАШ СПИСОК НА СЕГОДНЯ</p>
          <h1>Покупки<br /><em>без суеты.</em></h1>
          <p className="intro-text">Запишите всё нужное и держите бюджет под контролем.</p>
        </div>
        <div className="market-art" aria-hidden="true">
          <span className="sun"></span><span className="art-leaf leaf-one">✳</span><span className="art-leaf leaf-two">✦</span>
          <div className="bag"><div className="bag-handle"></div><span>fresh<br />& local</span><i>✿</i></div>
          <span className="art-dot dot-one"></span><span className="art-dot dot-two"></span>
        </div>
      </section>

      <section className="board" aria-label="Список покупок">
        <div className="board-heading">
          <div><p className="eyebrow">ВАШ ПЛАН</p><h2>Что купить</h2></div>
          <span className="item-count">{items.length} {items.length === 1 ? 'товар' : items.length > 1 && items.length < 5 ? 'товара' : 'товаров'}</span>
        </div>

        <form className="add-form" onSubmit={addItem}>
          <label className="field name-field">
            <span>ТОВАР</span>
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Например, авокадо" required />
          </label>
          <label className="field price-field">
            <span>ЦЕНА · СОМ</span>
            <input type="number" min="0" step="0.01" value={price} onChange={(event) => setPrice(event.target.value)} placeholder="0" required />
          </label>
          <button className="add-button" type="submit"><span>+</span> Добавить</button>
        </form>

        {items.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">✎</span>
            <div><strong>Пока здесь пусто</strong><p>Добавьте первый товар — и список готов.</p></div>
          </div>
        ) : (
          <ul className="shopping-list">
            {items.map((item) => <ShoppingItem key={item.id} item={item} onDelete={deleteItem} />)}
          </ul>
        )}

        <div className="total-card">
          <div><span className="total-label">ПРИМЕРНАЯ СУММА</span><span className="total-caption">На всё из списка</span></div>
          <strong>{total.toFixed(2)} <small>сом</small></strong>
        </div>
      </section>
      <footer className="footer"><span>✳</span> Маленький список — спокойный поход в магазин.</footer>
    </main>
  );
}
