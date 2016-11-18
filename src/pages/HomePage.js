import React from 'react';
import { SearchBox } from '../components/events/SearchBox.js';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Nebuďte mistry v gaučingu!</h1>
      <h2>Rádi sportujete, ale nemáte s kým? Přestěhovali jste se a nemáte s kým hrát šachy, nebo vám naopak chybí další spoluhráči? Jednoduše zde najděte vaše oblíbené aktivity a hurá ven!</h2>
      <SearchBox />
    </div>
  );
}

export default HomePage;
