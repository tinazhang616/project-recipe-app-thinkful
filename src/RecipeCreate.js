import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const initialStatus = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:""
  }
  const [formData,setFormData]=useState({...initialStatus})
  
//   target name...target value
  const handleChange=({target})=>setFormData({...formData,[target.name]:target.value});
  // const handleContentChange=(event)=>setContent(event.target.value);
const handleSubmit=(event)=>{
  event.preventDefault();
  console.log("submitted: ",formData)
  createRecipe(formData)
  setFormData({...initialStatus});
}

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required={true}
                  onChange={handleChange}
                  value={formData.name}
                  />
            </td>
            <td htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  placeholder="Cuisine"
                  required={true}
                  onChange={handleChange}
                  value={formData.cuisine}
                  />
          
               
            </td>
            <td htmlFor="photo">
              <input
                id="photo"
                name="photo" 
                type="url" 
                placeholder="URL"
                required={true}
                onChange={handleChange}
                value={formData.photo}
                />
            </td>
            <td htmlFor="ingredients">
               <textarea 
                 id="ingredients"
                 name="ingredients"
                 placeholder="Ingredients"
                 required={true} 
                 rows={2} 
                 onChange={handleChange}
                 value={formData.ingredients}
                 />
            
            </td>
            <td htmlFor="preparation">
             <textarea 
               id="preparation"
               name="preparation"
               placeholder="Preparation"
               required={true} 
               rows={2} 
               onChange={handleChange}
               value={formData.preparation}
                 />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
