import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return; 
        // categories.push('Simpso');  // Tratar de no utilizar en React
        setCategories([ newCategory, ...categories ]);
        //setCategories( cat => [ ...cat, 'Hola Mundo'] );
    }
    
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ event => onAddCategory(event) }
            />
           
            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category }
                        category={ category } 
                    />
                ))  
            }
          
        </>
    )
}
