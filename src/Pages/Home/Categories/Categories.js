import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {

    const {data:allCategories = []} = useQuery({
        queryKey:['allCategories'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/allCategoties');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16'>
            {
                allCategories.map(category => <Category
                    key={category.id}
                    category={category}
                    ></Category>
                    )
            }
        </div>
    );
};

export default Categories;