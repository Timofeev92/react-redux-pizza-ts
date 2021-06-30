import React, { useState } from 'react'
import { Header, Categories, SortPopup } from './components/index'



const App = () => {


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              items={['Vzcysd', 'asdasdasd', 'asdaas', 'thtrhh']} />
            <SortPopup items={['популярности', 'алфавиту', 'рейтингу']} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
