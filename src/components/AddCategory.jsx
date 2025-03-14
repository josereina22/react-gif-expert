import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const inputVal = inputValue.trim();

        if ( inputVal.length <= 1 ) return;
        
        //setCategories( categories =>[ inputValue, ...categories ] );
        setInputValue('');
        onNewCategory( inputVal ); 
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
        
    )
}
