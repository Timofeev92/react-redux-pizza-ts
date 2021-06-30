import React, { FC, useState } from 'react'

interface CategoriesProps {
    items: Array<string>,
}



const Categories: FC<CategoriesProps> = ({ items, }) => {

    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = (index: any) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)} > Все
                </li>
                {
                    items && items.map((name, index) => (
                        <li className={activeItem === index ? 'active' : ''}
                            key={`${name}_${index}`}
                            onClick={() => onSelectItem(index)}
                        >{name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories
