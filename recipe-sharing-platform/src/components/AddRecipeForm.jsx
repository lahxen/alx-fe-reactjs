import { useState } from 'react';

const AddRecipeForm = () => {
  // Form state management
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    ingredients: '',
    instructions: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    image: ''
  });

  // Validation state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    if (!formData.summary.trim()) {
      newErrors.summary = 'Recipe summary is required';
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients list is required';
    } else {
      // Check if ingredients has at least 2 items (separated by line breaks)
      const ingredientsList = formData.ingredients.split('\n').filter(item => item.trim());
      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please add at least 2 ingredients (one per line)';
      }
    }

    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Cooking instructions are required';
    } else {
      // Check if instructions has at least 3 steps
      const instructionsList = formData.instructions.split('\n').filter(item => item.trim());
      if (instructionsList.length < 3) {
        newErrors.instructions = 'Please add at least 3 preparation steps (one per line)';
      }
    }

    if (!formData.prepTime.trim()) {
      newErrors.prepTime = 'Preparation time is required';
    }

    if (!formData.cookTime.trim()) {
      newErrors.cookTime = 'Cooking time is required';
    }

    if (!formData.servings.trim()) {
      newErrors.servings = 'Number of servings is required';
    } else if (isNaN(formData.servings) || parseInt(formData.servings) < 1) {
      newErrors.servings = 'Please enter a valid number of servings';
    }

    if (!formData.image.trim()) {
      newErrors.image = 'Recipe image URL is required';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Process the form data
      const newRecipe = {
        id: Date.now(), // Simple ID generation for demo
        title: formData.title.trim(),
        summary: formData.summary.trim(),
        image: formData.image.trim(),
        ingredients: formData.ingredients.split('\n').filter(item => item.trim()),
        instructions: formData.instructions.split('\n').filter(item => item.trim()),
        prepTime: formData.prepTime.trim(),
        cookTime: formData.cookTime.trim(),
        servings: parseInt(formData.servings)
      };

      console.log('New recipe submitted:', newRecipe);
      
      // Show success message
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          title: '',
          summary: '',
          ingredients: '',
          instructions: '',
          prepTime: '',
          cookTime: '',
          servings: '',
          image: ''
        });
        setSubmitSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting recipe:', error);
      setErrors({ submit: 'Failed to submit recipe. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      title: '',
      summary: '',
      ingredients: '',
      instructions: '',
      prepTime: '',
      cookTime: '',
      servings: '',
      image: ''
    });
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Add New Recipe
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your delicious recipes with the community. Fill out the form below to add your recipe to our collection.
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Success! Your recipe has been submitted successfully.</span>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Recipe Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter your recipe title..."
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                  errors.title ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
            </div>

            {/* Recipe Summary */}
            <div>
              <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-2">
                Recipe Summary *
              </label>
              <textarea
                id="summary"
                name="summary"
                rows={3}
                value={formData.summary}
                onChange={handleInputChange}
                placeholder="Brief description of your recipe..."
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-vertical ${
                  errors.summary ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.summary && <p className="mt-1 text-sm text-red-600">{errors.summary}</p>}
            </div>

            {/* Recipe Image URL */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                Recipe Image URL *
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="https://example.com/recipe-image.jpg"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                  errors.image ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
              <p className="mt-1 text-sm text-gray-500">
                Provide a link to an image of your finished recipe
              </p>
            </div>

            {/* Recipe Times and Servings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="prepTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Prep Time *
                </label>
                <input
                  type="text"
                  id="prepTime"
                  name="prepTime"
                  value={formData.prepTime}
                  onChange={handleInputChange}
                  placeholder="15 minutes"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                    errors.prepTime ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.prepTime && <p className="mt-1 text-sm text-red-600">{errors.prepTime}</p>}
              </div>

              <div>
                <label htmlFor="cookTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Cook Time *
                </label>
                <input
                  type="text"
                  id="cookTime"
                  name="cookTime"
                  value={formData.cookTime}
                  onChange={handleInputChange}
                  placeholder="30 minutes"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                    errors.cookTime ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.cookTime && <p className="mt-1 text-sm text-red-600">{errors.cookTime}</p>}
              </div>

              <div>
                <label htmlFor="servings" className="block text-sm font-medium text-gray-700 mb-2">
                  Servings *
                </label>
                <input
                  type="number"
                  id="servings"
                  name="servings"
                  min="1"
                  value={formData.servings}
                  onChange={handleInputChange}
                  placeholder="4"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                    errors.servings ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.servings && <p className="mt-1 text-sm text-red-600">{errors.servings}</p>}
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-2">
                Ingredients * <span className="text-gray-500">(minimum 2 required)</span>
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                rows={8}
                value={formData.ingredients}
                onChange={handleInputChange}
                placeholder="Enter each ingredient on a new line:
2 cups all-purpose flour
1 tsp baking powder
1/2 cup sugar
2 eggs
1 cup milk"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-vertical ${
                  errors.ingredients ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.ingredients && <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>}
              <p className="mt-1 text-sm text-gray-500">
                List each ingredient on a separate line with quantities
              </p>
            </div>

            {/* Instructions */}
            <div>
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-2">
                Cooking Instructions * <span className="text-gray-500">(minimum 3 steps required)</span>
              </label>
              <textarea
                id="instructions"
                name="instructions"
                rows={10}
                value={formData.instructions}
                onChange={handleInputChange}
                placeholder="Enter each step on a new line:
Preheat oven to 375°F (190°C)
Mix dry ingredients in a large bowl
In separate bowl, whisk eggs and milk
Combine wet and dry ingredients until just mixed
Pour into greased baking pan
Bake for 25-30 minutes until golden brown"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-vertical ${
                  errors.instructions ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.instructions && <p className="mt-1 text-sm text-red-600">{errors.instructions}</p>}
              <p className="mt-1 text-sm text-gray-500">
                List each cooking step on a separate line in order
              </p>
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {errors.submit}
              </div>
            )}

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Recipe...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Recipe
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReset}
                disabled={isSubmitting}
                className="flex-1 sm:flex-none px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            💡 Tips for Adding Great Recipes
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Use clear, descriptive titles that highlight the main dish or flavor
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Include specific measurements and quantities in your ingredients list
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Write step-by-step instructions in the order they should be performed
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Use high-quality images that showcase the finished recipe
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Include helpful cooking tips or variations in your instructions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;