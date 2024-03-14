
const mongoose = require("F:\\Divya\\prepinsta\\FoodAPI\\conn")
const foodSchema = {
      Food_Item_Name: String,
      Food_Group_or_Category: String,
      Description: String,
      Nutritional_Information: [
        {
          Calories: Number, 
          Macronutrients: {
              Proteins: String,
              Fats: {
                  Saturated: String,
                  Unsaturated: String,
                  Trans_fats: String
                },
              Carbohydrates: String
            },
          Micronutrients: {
              Vitamins: {
                  Vitamin_A: String,
                  Vitamin_C: String,
                  Vitamin_D: String
                },
              Minerals: {
                  Iron: String,
                  Calcium: String,
                  Potassium: String
                }
              },
          Fiber: String,
          Sodium: String,
          Cholesterol: String
        }
      ],
      Serving_Size: String,
      Allergens: Array,
      Ingredients: Array,
      Preparation_Methods: String,
      Certifications: Array,
      Country_of_Origin:String,
      Brand_or_Manufacturer: String,
      Dietary_Restrictions:Array,
      Health_Benefits: String,
      Best_Practices: String
}

const NewSchema = new mongoose.Schema(foodSchema)
const newCollection = new mongoose.model("foodRecord",NewSchema)

module.exports=newCollection