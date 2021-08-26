import React, { FC } from 'react'

interface CategoriesProps {
    items: Array<String>,
    onClickCategory: Function,
    activeCategory: number
}

const Categories: FC<CategoriesProps> = React.memo(({ items, onClickCategory, activeCategory }) => {

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)} > Все
                </li>
                {
                    items && items.map((name, index) => (
                        <li className={activeCategory === index ? 'active' : ''}
                            key={`${name}_${index}`}
                            onClick={() => onClickCategory(index)}
                        >{name}</li>
                    ))
                }
            </ul>
        </div>
    )
})

export default Categories
