import React, { FC, useEffect } from 'react'
import { useDispatch, } from 'react-redux'
import { Categories, SortPopup, PizzaBlock, Preloader } from '../components/index'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { addPizzaToCart } from '../redux/actions/cart'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'


const categoryNames = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]
const sortItems = [
    { name: "популярности", type: "popular", order: "desc" },
    { name: "цене", type: "price", order: "desc" },
    { name: "алфавит", type: "name", order: "asc" }
]

const Home: FC = React.memo(() => {

    const dispatch = useDispatch()

    const { items, isLoaded } = useTypedSelector(({ pizzas }: any) => pizzas)
    const { category, sortBy } = useTypedSelector(({ filters }: any) => filters)
    const cartItems = useTypedSelector(({ cart }: any) => cart.items)

    const onSelectCategory = React.useCallback((index: number) => {
        dispatch(setCategory(index))
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    const onSelectSortType = React.useCallback((obj: object) => {
        dispatch(setSortBy(obj))
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    const handleAddPizzaToCart = (obj: object) => {
        dispatch(addPizzaToCart(obj))

    }

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy])// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categoryNames}
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                />
                <SortPopup
                    items={sortItems}
                    activeSortType={sortBy.type}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                        ?
                        items && items.map((obj: any) => (
                            <PizzaBlock
                                addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                                onClickAddPizza={handleAddPizzaToCart}
                                key={obj.id}
                                {...obj}
                            />))
                        : Array(12).fill(0).map((_, index) => <Preloader key={index} />)
                }
            </div>
        </div>
    )
})

export default Home
