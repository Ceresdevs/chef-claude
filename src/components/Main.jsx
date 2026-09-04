export default function Main() {

    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        //event.preventDefault: prevent to refresh the page when input triggered
        event.preventDefault()
        console.log('Form Submitted!');

        //accessing the form element using the event na meron doon sa form na yun
        const formData = new FormData(event.currentTarget)
        //accessing the value na iinput sa input element 
        const newIngredient = formData.get("ingredient");
        
        //pushing new value/ingridient to the array
        ingredients.push(newIngredient)
        console.log(ingredients)
    }

    return (
        <main>
            <form  onSubmit={handleSubmit} className="ingredient-form">
                <input type="text" aria-label="Add ingredient" placeholder="e.g. Chicken" name="ingredient" />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main> 
    )
}