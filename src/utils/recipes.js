export const getRecipes = () => {
  return [
    {
      id: 1,
      name: "Chicken Stir Fry",
      description: "Quick and healthy chicken stir fry with vegetables",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "20 min",
      servings: 4,
      rating: 4.5,
      difficulty: "beginner",
      diet: "all",
      cuisine: "asian",
      ingredients: [
        "chicken breast",
        "bell pepper",
        "onion",
        "garlic",
        "soy sauce",
        "olive oil",
        "rice"
      ],
      steps: [
        {
          title: "Prepare Ingredients",
          instruction: "Cut chicken breast into bite-sized pieces. Slice bell peppers and onion. Mince garlic.",
          image: "https://www.nuste.in/cdn/shop/files/breastchickenBoneless.jpg?v=1711450066"
        },
        {
          title: "Cook Chicken",
          instruction: "Heat olive oil in a large pan. Add chicken pieces and cook until golden brown, about 5-7 minutes.",
          image: "https://www.seriouseats.com/thmb/DDMflV5hLJZIXzZjWxqRV9f2eiA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__03__20150320-cooking-olive-oil-vicky-wasik-4-cf7403e2baeb42689ccd27e9458e43f3.jpg"
        },
        {
          title: "Add Vegetables",
          instruction: "Add garlic, onion, and bell peppers to the pan. Stir fry for 3-4 minutes until vegetables are tender-crisp.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDO3yQPqSnhHschy_CExnXRuA5_lLWLSmZ6w&s"
        },
        {
          title: "Season and Serve",
          instruction: "Add soy sauce and stir to combine. Cook for another minute. Serve over steamed rice.",
          image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=300"
        }
      ]
    },
    {
      id: 2,
      name: "Pasta Carbonara",
      description: "Classic Italian pasta with eggs, cheese, and pancetta",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.8,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "italian",
      ingredients: [
        "pasta",
        "eggs",
        "parmesan cheese",
        "pancetta",
        "garlic",
        "black pepper",
        "salt"
      ],
      steps: [
        {
          title: "Cook Pasta",
          instruction: "Bring a large pot of salted water to boil. Cook pasta according to package instructions until al dente.",
          image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          title: "Prepare Egg Mixture",
          instruction: "In a bowl, whisk together eggs, grated parmesan cheese, and freshly ground black pepper.",
          image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          title: "Cook Pancetta",
          instruction: "In a large pan, cook pancetta until crispy. Add minced garlic and cook for 1 minute.",
          image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          title: "Combine Everything",
          instruction: "Remove pan from heat. Add drained pasta and egg mixture, tossing quickly to create a creamy sauce.",
          image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300"
        }
      ]
    },
    {
      id: 3,
      name: "Vegetable Curry",
      description: "Aromatic vegetable curry with coconut milk and spices",
      image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 6,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "vegetarian",
      cuisine: "asian",
      ingredients: [
        "onion",
        "garlic",
        "ginger",
        "tomato",
        "coconut milk",
        "curry powder",
        "potato",
        "carrot",
        "peas"
      ],
      steps: [
        {
          title: "Prepare Vegetables",
          instruction: "Dice onion, mince garlic and ginger. Cut potato and carrot into cubes. Dice tomatoes.",
          image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          title: "Sauté Aromatics",
          instruction: "Heat oil in a large pot. Sauté onion, garlic, and ginger until fragrant, about 3 minutes.",
          image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          title: "Add Spices",
          instruction: "Add curry powder and cook for 1 minute. Add tomatoes and cook until they break down.",
          image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          title: "Simmer Curry",
          instruction: "Add coconut milk, potato, and carrot. Simmer for 20 minutes. Add peas in the last 5 minutes.",
          image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300"
        }
      ]
    },
    {
      id: 4,
      name: "Fish Tacos",
      description: "Fresh fish tacos with cabbage slaw and lime",
      image: "https://images.pexels.com/photos/2871755/pexels-photo-2871755.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.7,
      difficulty: "beginner",
      diet: "all",
      cuisine: "mexican",
      ingredients: [
        "fish",
        "cabbage",
        "lime",
        "cilantro",
        "onion",
        "tortillas",
        "avocado",
        "sour cream"
      ],
      steps: [
        {
          title: "Prepare Fish",
          instruction: "Season fish fillets with salt, pepper, and lime juice. Let marinate for 10 minutes.",
          image: "https://images.pexels.com/photos/2871755/pexels-photo-2871755.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          title: "Make Slaw",
          instruction: "Shred cabbage and mix with diced onion, cilantro, and lime juice. Season with salt.",
          image: "https://images.pexels.com/photos/2871755/pexels-photo-2871755.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          title: "Cook Fish",
          instruction: "Heat oil in a pan. Cook fish for 3-4 minutes per side until flaky and cooked through.",
          image: "https://images.pexels.com/photos/2871755/pexels-photo-2871755.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          title: "Assemble Tacos",
          instruction: "Warm tortillas, add fish, top with slaw, sliced avocado, and a dollop of sour cream.",
          image: "https://images.pexels.com/photos/2871755/pexels-photo-2871755.jpeg?auto=compress&cs=tinysrgb&w=300"
        }
      ]
    },
    {
      id: 5,
      name: "Mushroom Risotto",
      description: "Creamy mushroom risotto with parmesan cheese",
      image: "https://images.pexels.com/photos/8601515/pexels-photo-8601515.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "40 min",
      servings: 4,
      rating: 4.9,
      difficulty: "advanced",
      diet: "vegetarian",
      cuisine: "italian",
      ingredients: [
        "arborio rice",
        "mushrooms",
        "onion",
        "garlic",
        "vegetable broth",
        "white wine",
        "parmesan cheese",
        "butter"
      ],
      steps: [
        {
          title: "Prepare Mushrooms",
          instruction: "Clean and slice mushrooms. Sauté in butter until golden brown and set aside.",
          image: "https://images.pexels.com/photos/8601515/pexels-photo-8601515.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          title: "Start Risotto",
          instruction: "In the same pan, sauté diced onion and garlic until soft. Add rice and stir for 2 minutes.",
          image: "https://images.pexels.com/photos/8601515/pexels-photo-8601515.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          title: "Add Liquid Gradually",
          instruction: "Add wine and let it absorb. Add warm broth one ladle at a time, stirring constantly.",
          image: "https://images.pexels.com/photos/8601515/pexels-photo-8601515.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          title: "Finish Risotto",
          instruction: "After 20 minutes, stir in mushrooms, butter, and parmesan cheese. Season and serve immediately.",
          image: "https://images.pexels.com/photos/8601515/pexels-photo-8601515.jpeg?auto=compress&cs=tinysrgb&w=300"
        }
      ]
    },
    {
      id: 6,
      name: "Beef Tacos",
      description: "Seasoned ground beef tacos with fresh toppings",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "20 min",
      servings: 4,
      rating: 4.4,
      difficulty: "beginner",
      diet: "all",
      cuisine: "mexican",
      ingredients: ["ground beef", "taco seasoning", "tortillas", "lettuce", "tomato", "cheese", "sour cream", "onion"],
      steps: [
        { title: "Cook Beef", instruction: "Brown ground beef in a large skillet over medium-high heat, breaking it up as it cooks." },
        { title: "Season", instruction: "Add taco seasoning and water according to package directions. Simmer until thickened." },
        { title: "Prepare Toppings", instruction: "Dice tomatoes and onions, shred lettuce and cheese." },
        { title: "Assemble", instruction: "Fill warm tortillas with beef mixture and desired toppings." }
      ]
    },
    {
      id: 7,
      name: "Caesar Salad",
      description: "Classic Caesar salad with homemade dressing and croutons",
      image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "15 min",
      servings: 4,
      rating: 4.3,
      difficulty: "beginner",
      diet: "vegetarian",
      cuisine: "american",
      ingredients: ["romaine lettuce", "parmesan cheese", "bread", "garlic", "olive oil", "lemon", "anchovies", "eggs"],
      steps: [
        { title: "Make Croutons", instruction: "Cut bread into cubes, toss with olive oil and garlic, bake until golden." },
        { title: "Prepare Dressing", instruction: "Whisk together lemon juice, garlic, anchovies, egg yolk, and olive oil." },
        { title: "Assemble Salad", instruction: "Toss chopped romaine with dressing, add croutons and parmesan." },
        { title: "Serve", instruction: "Plate immediately and garnish with extra parmesan and black pepper." }
      ]
    },
    {
      id: 8,
      name: "Chicken Parmesan",
      description: "Breaded chicken breast with marinara sauce and mozzarella",
      image: "https://images.pexels.com/photos/8601515/pexels-photo-8601515.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "35 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "italian",
      ingredients: ["chicken breast", "breadcrumbs", "eggs", "flour", "marinara sauce", "mozzarella", "parmesan", "olive oil"],
      steps: [
        { title: "Bread Chicken", instruction: "Dredge chicken in flour, dip in beaten eggs, then coat with breadcrumbs." },
        { title: "Cook Chicken", instruction: "Pan-fry breaded chicken until golden brown and cooked through." },
        { title: "Add Sauce", instruction: "Top with marinara sauce and mozzarella cheese." },
        { title: "Bake", instruction: "Bake at 375°F until cheese is melted and bubbly." }
      ]
    },
    {
      id: 9,
      name: "Vegetable Stir Fry",
      description: "Colorful mixed vegetable stir fry with ginger soy sauce",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "15 min",
      servings: 4,
      rating: 4.2,
      difficulty: "beginner",
      diet: "vegan",
      cuisine: "asian",
      ingredients: ["broccoli", "carrot", "bell pepper", "snap peas", "ginger", "garlic", "soy sauce", "sesame oil"],
      steps: [
        { title: "Prep Vegetables", instruction: "Cut all vegetables into uniform bite-sized pieces." },
        { title: "Heat Wok", instruction: "Heat oil in a wok or large skillet over high heat." },
        { title: "Stir Fry", instruction: "Add vegetables in order of cooking time, starting with hardest." },
        { title: "Season", instruction: "Add ginger, garlic, and soy sauce. Toss to combine." }
      ]
    },
    {
      id: 10,
      name: "Beef Stroganoff",
      description: "Tender beef in creamy mushroom sauce over egg noodles",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 6,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "american",
      ingredients: ["beef sirloin", "mushrooms", "onion", "sour cream", "beef broth", "egg noodles", "flour", "butter"],
      steps: [
        { title: "Cook Beef", instruction: "Brown beef strips in butter, remove and set aside." },
        { title: "Sauté Vegetables", instruction: "Cook mushrooms and onions until soft." },
        { title: "Make Sauce", instruction: "Add flour, then gradually whisk in broth until thickened." },
        { title: "Finish", instruction: "Return beef to pan, stir in sour cream, serve over noodles." }
      ]
    },
    {
      id: 11,
      name: "Margherita Pizza",
      description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
      image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.8,
      difficulty: "intermediate",
      diet: "vegetarian",
      cuisine: "italian",
      ingredients: ["pizza dough", "tomato sauce", "mozzarella", "fresh basil", "olive oil", "garlic", "salt"],
      steps: [
        { title: "Prepare Dough", instruction: "Roll out pizza dough on a floured surface to desired thickness." },
        { title: "Add Sauce", instruction: "Spread tomato sauce evenly, leaving border for crust." },
        { title: "Add Cheese", instruction: "Top with torn mozzarella and drizzle with olive oil." },
        { title: "Bake", instruction: "Bake at 475°F for 12-15 minutes until crust is golden." }
      ]
    },
    {
      id: 12,
      name: "Chicken Noodle Soup",
      description: "Comforting homemade chicken soup with vegetables and noodles",
      image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "45 min",
      servings: 6,
      rating: 4.5,
      difficulty: "beginner",
      diet: "all",
      cuisine: "american",
      ingredients: ["chicken breast", "egg noodles", "carrot", "celery", "onion", "chicken broth", "bay leaves", "thyme"],
      steps: [
        { title: "Cook Chicken", instruction: "Simmer chicken breast in broth until cooked through, then shred." },
        { title: "Sauté Vegetables", instruction: "Cook diced carrots, celery, and onion until tender." },
        { title: "Combine", instruction: "Add shredded chicken back to pot with vegetables and broth." },
        { title: "Add Noodles", instruction: "Cook egg noodles in the soup until tender." }
      ]
    },
    {
      id: 13,
      name: "Greek Salad",
      description: "Fresh Mediterranean salad with feta cheese and olives",
      image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "10 min",
      servings: 4,
      rating: 4.4,
      difficulty: "beginner",
      diet: "vegetarian",
      cuisine: "mediterranean",
      ingredients: ["cucumber", "tomato", "red onion", "feta cheese", "olives", "olive oil", "lemon", "oregano"],
      steps: [
        { title: "Chop Vegetables", instruction: "Dice cucumber, tomatoes, and red onion into bite-sized pieces." },
        { title: "Make Dressing", instruction: "Whisk olive oil, lemon juice, and oregano together." },
        { title: "Assemble", instruction: "Combine vegetables, add feta cheese and olives." },
        { title: "Dress", instruction: "Toss with dressing just before serving." }
      ]
    },
    {
      id: 14,
      name: "Beef Chili",
      description: "Hearty beef chili with beans and spices",
      image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "60 min",
      servings: 8,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "american",
      ingredients: ["ground beef", "kidney beans", "tomato", "onion", "bell pepper", "chili powder", "cumin", "garlic"],
      steps: [
        { title: "Brown Beef", instruction: "Cook ground beef until browned, breaking up as it cooks." },
        { title: "Add Vegetables", instruction: "Add diced onion and bell pepper, cook until soft." },
        { title: "Add Spices", instruction: "Stir in chili powder, cumin, and garlic." },
        { title: "Simmer", instruction: "Add tomatoes and beans, simmer for 45 minutes." }
      ]
    },
    {
      id: 15,
      name: "Pancakes",
      description: "Fluffy buttermilk pancakes perfect for breakfast",
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "20 min",
      servings: 4,
      rating: 4.7,
      difficulty: "beginner",
      diet: "vegetarian",
      cuisine: "american",
      ingredients: ["flour", "sugar", "baking powder", "salt", "milk", "eggs", "butter", "vanilla"],
      steps: [
        { title: "Mix Dry Ingredients", instruction: "Whisk together flour, sugar, baking powder, and salt." },
        { title: "Mix Wet Ingredients", instruction: "Combine milk, eggs, melted butter, and vanilla." },
        { title: "Combine", instruction: "Gently fold wet ingredients into dry until just combined." },
        { title: "Cook", instruction: "Pour batter onto hot griddle and cook until bubbles form." }
      ]
    },
    {
      id: 16,
      name: "Salmon Teriyaki",
      description: "Glazed salmon with sweet and savory teriyaki sauce",
      image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.8,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["salmon fillets", "soy sauce", "mirin", "sugar", "ginger", "garlic", "sesame oil", "green onions"],
      steps: [
        { title: "Make Sauce", instruction: "Combine soy sauce, mirin, sugar, ginger, and garlic in a pan." },
        { title: "Reduce Sauce", instruction: "Simmer sauce until thickened and glossy." },
        { title: "Cook Salmon", instruction: "Pan-sear salmon fillets until cooked through." },
        { title: "Glaze", instruction: "Brush salmon with teriyaki sauce and garnish with green onions." }
      ]
    },
    {
      id: 17,
      name: "Caprese Salad",
      description: "Simple Italian salad with tomatoes, mozzarella, and basil",
      image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "10 min",
      servings: 4,
      rating: 4.5,
      difficulty: "beginner",
      diet: "vegetarian",
      cuisine: "italian",
      ingredients: ["tomatoes", "fresh mozzarella", "fresh basil", "olive oil", "balsamic vinegar", "salt", "pepper"],
      steps: [
        { title: "Slice Ingredients", instruction: "Slice tomatoes and mozzarella into 1/4 inch thick rounds." },
        { title: "Arrange", instruction: "Alternate tomato and mozzarella slices on a platter." },
        { title: "Add Basil", instruction: "Tuck fresh basil leaves between slices." },
        { title: "Dress", instruction: "Drizzle with olive oil and balsamic vinegar, season with salt and pepper." }
      ]
    },
    {
      id: 18,
      name: "Chicken Quesadillas",
      description: "Crispy tortillas filled with chicken and melted cheese",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNe9Y7EPrz5tcaiaL0b_6W-eMIXYl7mmp0w&s",
      time: "15 min",
      servings: 4,
      rating: 4.4,
      difficulty: "beginner",
      diet: "all",
      cuisine: "mexican",
      ingredients: ["flour tortillas", "cooked chicken", "cheese", "bell pepper", "onion", "cilantro", "sour cream", "salsa"],
      steps: [
        { title: "Prepare Filling", instruction: "Dice cooked chicken, bell pepper, and onion." },
        { title: "Assemble", instruction: "Place filling and cheese on half of each tortilla, fold over." },
        { title: "Cook", instruction: "Cook in a dry skillet until golden and cheese melts." },
        { title: "Serve", instruction: "Cut into wedges and serve with sour cream and salsa." }
      ]
    },
    {
      id: 19,
      name: "Vegetable Soup",
      description: "Hearty vegetable soup with seasonal vegetables",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQH49waX_-KXhT09Z5dF19nv292n22KbwZQ&s",
      time: "40 min",
      servings: 6,
      rating: 4.3,
      difficulty: "beginner",
      diet: "vegan",
      cuisine: "american",
      ingredients: ["carrot", "celery", "onion", "potato", "tomato", "vegetable broth", "herbs", "garlic"],
      steps: [
        { title: "Sauté Base", instruction: "Cook diced onion, carrot, and celery until soft." },
        { title: "Add Vegetables", instruction: "Add diced potato, tomato, and garlic." },
        { title: "Add Broth", instruction: "Pour in vegetable broth and bring to a boil." },
        { title: "Simmer", instruction: "Reduce heat and simmer until vegetables are tender." }
      ]
    },
    {
      id: 20,
      name: "Chocolate Chip Cookies",
      description: "Classic chewy chocolate chip cookies",
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 24,
      rating: 4.9,
      difficulty: "beginner",
      diet: "vegetarian",
      cuisine: "american",
      ingredients: ["flour", "butter", "brown sugar", "white sugar", "eggs", "vanilla", "baking soda", "chocolate chips"],
      steps: [
        { title: "Cream Butter", instruction: "Beat butter with both sugars until light and fluffy." },
        { title: "Add Eggs", instruction: "Beat in eggs and vanilla extract." },
        { title: "Mix Dry", instruction: "Gradually mix in flour and baking soda." },
        { title: "Bake", instruction: "Drop spoonfuls on baking sheet and bake at 375°F for 9-11 minutes." }
      ]
    },
    {
      id: 21,
      name: "Pad Thai",
      description: "Thai stir-fried noodles with shrimp and peanuts",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["rice noodles", "shrimp", "eggs", "bean sprouts", "peanuts", "lime", "fish sauce", "tamarind"],
      steps: [
        { title: "Soak Noodles", instruction: "Soak rice noodles in warm water until soft." },
        { title: "Make Sauce", instruction: "Mix fish sauce, tamarind paste, and sugar." },
        { title: "Stir Fry", instruction: "Cook shrimp, add noodles and sauce, toss with eggs." },
        { title: "Finish", instruction: "Add bean sprouts and peanuts, serve with lime wedges." }
      ]
    },
    {
      id: 22,
      name: "French Toast",
      description: "Golden French toast with cinnamon and vanilla",
      image: "https://www.chilitochoc.com/wp-content/uploads/2025/04/buttermilk-french-toast-recipe.jpg",
      time: "15 min",
      servings: 4,
      rating: 4.6,
      difficulty: "beginner",
      diet: "vegetarian",
      cuisine: "american",
      ingredients: ["bread", "eggs", "milk", "vanilla", "cinnamon", "sugar", "butter", "maple syrup"],
      steps: [
        { title: "Make Custard", instruction: "Whisk eggs, milk, vanilla, cinnamon, and sugar." },
        { title: "Soak Bread", instruction: "Dip bread slices in custard mixture." },
        { title: "Cook", instruction: "Cook in buttered pan until golden on both sides." },
        { title: "Serve", instruction: "Serve hot with maple syrup and butter." }
      ]
    },
    {
      id: 23,
      name: "Chicken Tikka Masala",
      description: "Creamy Indian curry with tender chicken pieces",
      image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "45 min",
      servings: 6,
      rating: 4.8,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["chicken breast", "yogurt", "garam masala", "tomato sauce", "cream", "onion", "garlic", "ginger"],
      steps: [
        { title: "Marinate Chicken", instruction: "Marinate chicken in yogurt and spices for 30 minutes." },
        { title: "Cook Chicken", instruction: "Grill or pan-fry marinated chicken until cooked." },
        { title: "Make Sauce", instruction: "Sauté onion, garlic, ginger, add tomato sauce and spices." },
        { title: "Combine", instruction: "Add chicken to sauce with cream, simmer until heated through." }
      ]
    },
    {
      id: 24,
      name: "Meatball Subs",
      description: "Italian meatballs in marinara sauce on crusty rolls",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "35 min",
      servings: 4,
      rating: 4.5,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "italian",
      ingredients: ["ground beef", "breadcrumbs", "eggs", "marinara sauce", "mozzarella", "sub rolls", "parmesan", "garlic"],
      steps: [
        { title: "Make Meatballs", instruction: "Mix ground beef, breadcrumbs, egg, and seasonings, form into balls." },
        { title: "Cook Meatballs", instruction: "Brown meatballs in a skillet, then simmer in marinara sauce." },
        { title: "Prepare Rolls", instruction: "Split sub rolls and toast lightly." },
        { title: "Assemble", instruction: "Fill rolls with meatballs, sauce, and cheese, broil until melted." }
      ]
    },
    {
      id: 25,
      name: "Banana Bread",
      description: "Moist banana bread with walnuts",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1VcUoz7kLVJ-eTS4_8MbOpOX-GNIGxiWfQ&s",
      time: "75 min",
      servings: 8,
      rating: 4.7,
      difficulty: "beginner",
      diet: "vegetarian",
      cuisine: "american",
      ingredients: ["ripe bananas", "flour", "sugar", "eggs", "butter", "baking soda", "salt", "walnuts"],
      steps: [
        { title: "Mash Bananas", instruction: "Mash ripe bananas in a large bowl." },
        { title: "Mix Wet", instruction: "Add melted butter, sugar, egg, and vanilla to bananas." },
        { title: "Add Dry", instruction: "Mix in flour, baking soda, and salt until just combined." },
        { title: "Bake", instruction: "Pour into loaf pan and bake at 350°F for 60 minutes." }
      ]
    },
    {
      id: 26,
      name: "Chicken Caesar Wrap",
      description: "Grilled chicken Caesar salad wrapped in a tortilla",
      image: "https://tastesbetterfromscratch.com/wp-content/uploads/2020/04/Chicken-Caesar-Wrap-1.jpg",
      time: "15 min",
      servings: 4,
      rating: 4.3,
      difficulty: "beginner",
      diet: "all",
      cuisine: "american",
      ingredients: ["chicken breast", "romaine lettuce", "caesar dressing", "parmesan", "tortillas", "croutons"],
      steps: [
        { title: "Cook Chicken", instruction: "Grill or pan-cook chicken breast until done, slice thin." },
        { title: "Prepare Lettuce", instruction: "Chop romaine lettuce into bite-sized pieces." },
        { title: "Assemble", instruction: "Place lettuce, chicken, and croutons on tortilla." },
        { title: "Wrap", instruction: "Add dressing and parmesan, roll tightly and slice in half." }
      ]
    },
    {
      id: 27,
      name: "Beef and Broccoli",
      description: "Classic Chinese-American stir fry with tender beef",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["beef sirloin", "broccoli", "soy sauce", "oyster sauce", "garlic", "ginger", "cornstarch", "rice"],
      steps: [
        { title: "Marinate Beef", instruction: "Slice beef thin, marinate in soy sauce and cornstarch." },
        { title: "Blanch Broccoli", instruction: "Quickly blanch broccoli florets until bright green." },
        { title: "Stir Fry Beef", instruction: "Cook beef in hot oil until browned, remove." },
        { title: "Combine", instruction: "Return beef to pan with broccoli and sauce, toss to coat." }
      ]
    },
    {
      id: 28,
      name: "Spinach and Feta Stuffed Chicken",
      description: "Chicken breast stuffed with spinach and feta cheese",
      image: "https://images.pexels.com/photos/8601515/pexels-photo-8601515.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "35 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "mediterranean",
      ingredients: ["chicken breast", "spinach", "feta cheese", "garlic", "olive oil", "lemon", "herbs"],
      steps: [
        { title: "Prepare Filling", instruction: "Sauté spinach with garlic, mix with crumbled feta." },
        { title: "Stuff Chicken", instruction: "Cut pocket in chicken breast, stuff with spinach mixture." },
        { title: "Sear", instruction: "Sear stuffed chicken in hot oil until golden." },
        { title: "Bake", instruction: "Transfer to oven and bake at 375°F until cooked through." }
      ]
    },
    {
      id: 29,
      name: "Vegetarian Chili",
      description: "Hearty bean chili with vegetables and spices",
      image: "https://cookieandkate.com/images/2015/11/best-vegetarian-chili-1-1.jpg",
      time: "45 min",
      servings: 6,
      rating: 4.4,
      difficulty: "beginner",
      diet: "vegetarian",
      cuisine: "american",
      ingredients: ["black beans", "kidney beans", "tomato", "bell pepper", "onion", "chili powder", "cumin", "garlic"],
      steps: [
        { title: "Sauté Vegetables", instruction: "Cook diced onion and bell pepper until soft." },
        { title: "Add Spices", instruction: "Add garlic, chili powder, and cumin, cook 1 minute." },
        { title: "Add Tomatoes", instruction: "Add diced tomatoes and bring to a simmer." },
        { title: "Add Beans", instruction: "Stir in beans and simmer 30 minutes until thickened." }
      ]
    },
    {
      id: 30,
      name: "Lemon Garlic Shrimp",
      description: "Quick sautéed shrimp with lemon and garlic",
      image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "10 min",
      servings: 4,
      rating: 4.8,
      difficulty: "beginner",
      diet: "all",
      cuisine: "mediterranean",
      ingredients: ["shrimp", "garlic", "lemon", "butter", "parsley", "white wine", "olive oil"],
      steps: [
        { title: "Prep Shrimp", instruction: "Peel and devein shrimp, pat dry." },
        { title: "Sauté Garlic", instruction: "Heat oil and butter, sauté minced garlic until fragrant." },
        { title: "Cook Shrimp", instruction: "Add shrimp and cook 2-3 minutes per side." },
        { title: "Finish", instruction: "Add lemon juice, wine, and parsley, toss to combine." }
      ]
    },
    {
      id: 31,
      name: "BBQ Pulled Pork",
      description: "Slow-cooked pulled pork with tangy BBQ sauce",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "4 hours",
      servings: 8,
      rating: 4.9,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "american",
      ingredients: ["pork shoulder", "bbq sauce", "brown sugar", "paprika", "garlic powder", "onion powder", "buns"],
      steps: [
        { title: "Season Pork", instruction: "Rub pork with spice mixture and let sit 1 hour." },
        { title: "Slow Cook", instruction: "Cook in slow cooker on low for 6-8 hours." },
        { title: "Shred", instruction: "Remove pork and shred with two forks." },
        { title: "Sauce", instruction: "Mix shredded pork with BBQ sauce and serve on buns." }
      ]
    },
    {
      id: 32,
      name: "Chicken Fried Rice",
      description: "Asian-style fried rice with chicken and vegetables",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "20 min",
      servings: 4,
      rating: 4.5,
      difficulty: "beginner",
      diet: "all",
      cuisine: "asian",
      ingredients: ["cooked rice", "chicken breast", "eggs", "peas", "carrot", "soy sauce", "sesame oil", "green onions"],
      steps: [
        { title: "Cook Chicken", instruction: "Dice and cook chicken until done, set aside." },
        { title: "Scramble Eggs", instruction: "Scramble eggs in the same pan, remove." },
        { title: "Fry Rice", instruction: "Add rice to pan, breaking up clumps, stir fry until heated." },
        { title: "Combine", instruction: "Add chicken, eggs, vegetables, and seasonings, toss well." }
      ]
    },
    {
      id: 33,
      name: "Stuffed Bell Peppers",
      description: "Bell peppers stuffed with ground beef and rice",
      image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "45 min",
      servings: 4,
      rating: 4.4,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "american",
      ingredients: ["bell peppers", "ground beef", "rice", "onion", "tomato sauce", "cheese", "garlic"],
      steps: [
        { title: "Prepare Peppers", instruction: "Cut tops off peppers and remove seeds and membranes." },
        { title: "Make Filling", instruction: "Brown beef with onion, add cooked rice and tomato sauce." },
        { title: "Stuff Peppers", instruction: "Fill peppers with beef mixture, top with cheese." },
        { title: "Bake", instruction: "Bake at 375°F for 25-30 minutes until peppers are tender." }
      ]
    },
    {
      id: 34,
      name: "Chicken Fajitas",
      description: "Sizzling chicken fajitas with peppers and onions",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.6,
      difficulty: "beginner",
      diet: "all",
      cuisine: "mexican",
      ingredients: ["chicken breast", "bell peppers", "onion", "lime", "cumin", "chili powder", "tortillas", "cilantro"],
      steps: [
        { title: "Marinate Chicken", instruction: "Slice chicken and marinate in lime juice and spices." },
        { title: "Cook Chicken", instruction: "Cook chicken strips in hot skillet until done." },
        { title: "Cook Vegetables", instruction: "Sauté sliced peppers and onions until tender." },
        { title: "Serve", instruction: "Serve chicken and vegetables with warm tortillas and toppings." }
      ]
    },
    {
      id: 35,
      name: "Tomato Basil Soup",
      description: "Creamy tomato soup with fresh basil",
      image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 4,
      rating: 4.5,
      difficulty: "beginner",
      diet: "vegetarian",
      cuisine: "american",
      ingredients: ["tomatoes", "onion", "garlic", "vegetable broth", "cream", "fresh basil", "butter"],
      steps: [
        { title: "Sauté Base", instruction: "Cook diced onion and garlic in butter until soft." },
        { title: "Add Tomatoes", instruction: "Add crushed tomatoes and broth, bring to a boil." },
        { title: "Simmer", instruction: "Reduce heat and simmer 20 minutes." },
        { title: "Finish", instruction: "Blend until smooth, stir in cream and fresh basil." }
      ]
    },
    {
      id: 36,
      name: "Beef Burgers",
      description: "Juicy beef burgers with classic toppings",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "20 min",
      servings: 4,
      rating: 4.7,
      difficulty: "beginner",
      diet: "all",
      cuisine: "american",
      ingredients: ["ground beef", "burger buns", "lettuce", "tomato", "onion", "cheese", "pickles", "ketchup"],
      steps: [
        { title: "Form Patties", instruction: "Shape ground beef into 4 patties, season with salt and pepper." },
        { title: "Cook Burgers", instruction: "Grill or pan-fry patties 4-5 minutes per side." },
        { title: "Toast Buns", instruction: "Lightly toast burger buns." },
        { title: "Assemble", instruction: "Build burgers with desired toppings and condiments." }
      ]
    },
    {
      id: 37,
      name: "Chicken Alfredo",
      description: "Creamy pasta with grilled chicken and alfredo sauce",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 4,
      rating: 4.8,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "italian",
      ingredients: ["fettuccine", "chicken breast", "heavy cream", "parmesan", "butter", "garlic", "parsley"],
      steps: [
        { title: "Cook Pasta", instruction: "Cook fettuccine according to package directions." },
        { title: "Cook Chicken", instruction: "Season and grill chicken breast, slice when done." },
        { title: "Make Sauce", instruction: "Melt butter, add garlic, cream, and parmesan until smooth." },
        { title: "Combine", instruction: "Toss pasta with sauce, top with sliced chicken." }
      ]
    },
    {
      id: 38,
      name: "Fish and Chips",
      description: "Beer-battered fish with crispy french fries",
      image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "40 min",
      servings: 4,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "british",
      ingredients: ["white fish", "flour", "beer", "potatoes", "oil", "malt vinegar", "tartar sauce"],
      steps: [
        { title: "Prep Potatoes", instruction: "Cut potatoes into fries and soak in cold water." },
        { title: "Make Batter", instruction: "Mix flour and beer to make a smooth batter." },
        { title: "Fry Chips", instruction: "Fry potato chips until golden and crispy." },
        { title: "Fry Fish", instruction: "Dip fish in batter and fry until golden brown." }
      ]
    },
    {
      id: 39,
      name: "Vegetable Lasagna",
      description: "Layered pasta with vegetables and cheese",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "90 min",
      servings: 8,
      rating: 4.5,
      difficulty: "advanced",
      diet: "vegetarian",
      cuisine: "italian",
      ingredients: ["lasagna noodles", "zucchini", "eggplant", "ricotta", "mozzarella", "marinara sauce", "spinach"],
      steps: [
        { title: "Prep Vegetables", instruction: "Slice zucchini and eggplant, sauté until tender." },
        { title: "Cook Noodles", instruction: "Cook lasagna noodles according to package directions." },
        { title: "Layer", instruction: "Layer noodles, vegetables, cheese, and sauce in baking dish." },
        { title: "Bake", instruction: "Cover and bake at 375°F for 45 minutes, uncover last 15 minutes." }
      ]
    },
    {
      id: 40,
      name: "Chicken Wings",
      description: "Crispy buffalo chicken wings with blue cheese dip",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "45 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "american",
      ingredients: ["chicken wings", "hot sauce", "butter", "blue cheese", "celery", "ranch dressing"],
      steps: [
        { title: "Prep Wings", instruction: "Pat wings dry and season with salt and pepper." },
        { title: "Bake Wings", instruction: "Bake at 425°F for 45 minutes until crispy." },
        { title: "Make Sauce", instruction: "Mix hot sauce with melted butter." },
        { title: "Toss and Serve", instruction: "Toss wings with sauce, serve with celery and dip." }
      ]
    },
    {
      id: 41,
      name: "Shepherd's Pie",
      description: "Ground lamb with vegetables topped with mashed potatoes",
      image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "60 min",
      servings: 6,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "british",
      ingredients: ["ground lamb", "potatoes", "carrot", "peas", "onion", "worcestershire sauce", "beef broth", "butter"],
      steps: [
        { title: "Make Mashed Potatoes", instruction: "Boil and mash potatoes with butter and milk." },
        { title: "Cook Meat", instruction: "Brown ground lamb with onion and vegetables." },
        { title: "Add Liquid", instruction: "Add broth and worcestershire sauce, simmer until thickened." },
        { title: "Assemble", instruction: "Top meat mixture with mashed potatoes and bake until golden." }
      ]
    },
    {
      id: 42,
      name: "Chicken Teriyaki Bowl",
      description: "Grilled chicken teriyaki over rice with vegetables",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.5,
      difficulty: "beginner",
      diet: "all",
      cuisine: "asian",
      ingredients: ["chicken thighs", "teriyaki sauce", "rice", "broccoli", "carrot", "sesame seeds"],
      steps: [
        { title: "Cook Rice", instruction: "Prepare rice according to package directions." },
        { title: "Grill Chicken", instruction: "Grill chicken thighs and brush with teriyaki sauce." },
        { title: "Steam Vegetables", instruction: "Steam broccoli and carrots until tender." },
        { title: "Assemble Bowl", instruction: "Serve chicken over rice with vegetables, drizzle with sauce." }
      ]
    },
    {
      id: 43,
      name: "Tuna Salad Sandwich",
      description: "Classic tuna salad sandwich with celery and mayo",
      image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "10 min",
      servings: 2,
      rating: 4.2,
      difficulty: "beginner",
      diet: "all",
      cuisine: "american",
      ingredients: ["canned tuna", "mayonnaise", "celery", "onion", "bread", "lettuce", "tomato"],
      steps: [
        { title: "Make Tuna Salad", instruction: "Mix drained tuna with mayo, diced celery, and onion." },
        { title: "Season", instruction: "Add salt, pepper, and lemon juice to taste." },
        { title: "Toast Bread", instruction: "Lightly toast bread slices." },
        { title: "Assemble", instruction: "Spread tuna salad on bread, add lettuce and tomato." }
      ]
    },
    {
      id: 44,
      name: "Beef Stew",
      description: "Hearty beef stew with potatoes and vegetables",
      image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "2 hours",
      servings: 6,
      rating: 4.8,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "american",
      ingredients: ["beef chuck", "potato", "carrot", "onion", "beef broth", "tomato paste", "thyme", "bay leaves"],
      steps: [
        { title: "Brown Beef", instruction: "Cut beef into chunks and brown in Dutch oven." },
        { title: "Add Vegetables", instruction: "Add diced onion, carrot, and potato." },
        { title: "Add Liquid", instruction: "Stir in tomato paste, broth, and herbs." },
        { title: "Simmer", instruction: "Cover and simmer 1.5-2 hours until beef is tender." }
      ]
    },
    {
      id: 45,
      name: "Chicken Enchiladas",
      description: "Rolled tortillas filled with chicken and topped with sauce",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "40 min",
      servings: 6,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "mexican",
      ingredients: ["corn tortillas", "cooked chicken", "enchilada sauce", "cheese", "onion", "cilantro", "sour cream"],
      steps: [
        { title: "Prepare Filling", instruction: "Shred cooked chicken and mix with diced onion." },
        { title: "Warm Tortillas", instruction: "Warm tortillas to make them pliable." },
        { title: "Roll Enchiladas", instruction: "Fill tortillas with chicken, roll and place in baking dish." },
        { title: "Bake", instruction: "Top with sauce and cheese, bake until cheese melts." }
      ]
    },
    {
      id: 46,
      name: "Pork Chops",
      description: "Pan-seared pork chops with herbs",
      image: "https://images.pexels.com/photos/8601515/pexels-photo-8601515.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "20 min",
      servings: 4,
      rating: 4.4,
      difficulty: "beginner",
      diet: "all",
      cuisine: "american",
      ingredients: ["pork chops", "olive oil", "garlic", "thyme", "rosemary", "salt", "pepper"],
      steps: [
        { title: "Season Chops", instruction: "Season pork chops with salt, pepper, and herbs." },
        { title: "Heat Pan", instruction: "Heat olive oil in a large skillet over medium-high heat." },
        { title: "Sear Chops", instruction: "Cook pork chops 4-5 minutes per side until golden." },
        { title: "Rest", instruction: "Let chops rest 5 minutes before serving." }
      ]
    },
    {
      id: 47,
      name: "Chicken Salad",
      description: "Creamy chicken salad with grapes and almonds",
      image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "15 min",
      servings: 4,
      rating: 4.3,
      difficulty: "beginner",
      diet: "all",
      cuisine: "american",
      ingredients: ["cooked chicken", "mayonnaise", "grapes", "almonds", "celery", "lettuce", "bread"],
      steps: [
        { title: "Dice Chicken", instruction: "Cut cooked chicken into bite-sized pieces." },
        { title: "Add Mix-ins", instruction: "Add halved grapes, chopped almonds, and diced celery." },
        { title: "Dress", instruction: "Mix with mayonnaise and season with salt and pepper." },
        { title: "Serve", instruction: "Serve on lettuce leaves or as a sandwich." }
      ]
    },
    {
      id: 48,
      name: "Vegetable Stir Fry Noodles",
      description: "Asian noodles with mixed vegetables in savory sauce",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "20 min",
      servings: 4,
      rating: 4.4,
      difficulty: "beginner",
      diet: "vegan",
      cuisine: "asian",
      ingredients: ["lo mein noodles", "broccoli", "bell pepper", "carrot", "soy sauce", "sesame oil", "garlic", "ginger"],
      steps: [
        { title: "Cook Noodles", instruction: "Cook noodles according to package directions, drain." },
        { title: "Prep Vegetables", instruction: "Cut all vegetables into uniform pieces." },
        { title: "Stir Fry", instruction: "Heat oil in wok, stir fry vegetables until tender-crisp." },
        { title: "Combine", instruction: "Add noodles and sauce, toss until heated through." }
      ]
    },
    {
      id: 49,
      name: "Meatloaf",
      description: "Classic comfort food meatloaf with glaze",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "75 min",
      servings: 6,
      rating: 4.5,
      difficulty: "beginner",
      diet: "all",
      cuisine: "american",
      ingredients: ["ground beef", "breadcrumbs", "eggs", "onion", "ketchup", "worcestershire sauce", "milk"],
      steps: [
        { title: "Mix Ingredients", instruction: "Combine ground beef, breadcrumbs, eggs, and seasonings." },
        { title: "Shape Loaf", instruction: "Form mixture into a loaf shape in baking dish." },
        { title: "Make Glaze", instruction: "Mix ketchup with brown sugar and worcestershire sauce." },
        { title: "Bake", instruction: "Bake at 350°F for 1 hour, brush with glaze last 15 minutes." }
      ]
    },
    {
      id: 50,
      name: "Chicken Noodle Casserole",
      description: "Comforting casserole with chicken, noodles, and vegetables",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "45 min",
      servings: 6,
      rating: 4.4,
      difficulty: "beginner",
      diet: "all",
      cuisine: "american",
      ingredients: ["egg noodles", "cooked chicken", "frozen vegetables", "cream of mushroom soup", "cheese", "breadcrumbs"],
      steps: [
        { title: "Cook Noodles", instruction: "Cook egg noodles according to package directions." },
        { title: "Mix Filling", instruction: "Combine chicken, vegetables, soup, and half the cheese." },
        { title: "Assemble", instruction: "Layer noodles and chicken mixture in baking dish." },
        { title: "Bake", instruction: "Top with remaining cheese and breadcrumbs, bake until bubbly." }
      ]
    },
    {
      id: 51,
      name: "Thai Green Curry",
      description: "Spicy Thai curry with coconut milk and vegetables",
      image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["green curry paste", "coconut milk", "chicken breast", "thai basil", "eggplant", "fish sauce", "palm sugar"],
      steps: [
        { title: "Fry Curry Paste", instruction: "Fry curry paste in oil until fragrant." },
        { title: "Add Coconut Milk", instruction: "Gradually add coconut milk, stirring constantly." },
        { title: "Add Protein", instruction: "Add sliced chicken and cook until done." },
        { title: "Finish", instruction: "Add vegetables, fish sauce, sugar, and basil." }
      ]
    },
    {
      id: 52,
      name: "Grilled Cheese Sandwich",
      description: "Classic grilled cheese with buttery crispy bread",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "10 min",
      servings: 1,
      rating: 4.6,
      difficulty: "beginner",
      diet: "vegetarian",
      cuisine: "american",
      ingredients: ["bread", "cheese", "butter"],
      steps: [
        { title: "Butter Bread", instruction: "Butter one side of each bread slice." },
        { title: "Add Cheese", instruction: "Place cheese between bread slices, buttered sides out." },
        { title: "Cook", instruction: "Cook in skillet over medium heat until golden brown." },
        { title: "Flip", instruction: "Flip carefully and cook other side until cheese melts." }
      ]
    },
    {
      id: 53,
      name: "Chicken Pot Pie",
      description: "Flaky pastry filled with chicken and vegetables in creamy sauce",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "60 min",
      servings: 6,
      rating: 4.8,
      difficulty: "advanced",
      diet: "all",
      cuisine: "american",
      ingredients: ["pie crust", "chicken breast", "carrot", "peas", "onion", "chicken broth", "flour", "cream"],
      steps: [
        { title: "Cook Filling", instruction: "Sauté vegetables, add flour, then broth and cream." },
        { title: "Add Chicken", instruction: "Stir in cooked diced chicken." },
        { title: "Assemble", instruction: "Pour filling into pie dish, top with crust." },
        { title: "Bake", instruction: "Bake at 425°F until crust is golden brown." }
      ]
    },
    {
      id: 54,
      name: "Beef Tacos al Pastor",
      description: "Mexican-style tacos with marinated beef and pineapple",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "mexican",
      ingredients: ["beef sirloin", "pineapple", "corn tortillas", "onion", "cilantro", "lime", "chili powder", "cumin"],
      steps: [
        { title: "Marinate Beef", instruction: "Marinate sliced beef in spices and lime juice." },
        { title: "Cook Beef", instruction: "Cook marinated beef until caramelized." },
        { title: "Grill Pineapple", instruction: "Grill pineapple slices until charred." },
        { title: "Assemble", instruction: "Serve beef and pineapple in tortillas with onion and cilantro." }
      ]
    },
    {
      id: 55,
      name: "Clam Chowder",
      description: "Creamy New England clam chowder with potatoes",
      image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "40 min",
      servings: 6,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "american",
      ingredients: ["clams", "potato", "onion", "celery", "bacon", "flour", "cream", "bay leaves"],
      steps: [
        { title: "Cook Bacon", instruction: "Cook diced bacon until crispy, remove." },
        { title: "Sauté Vegetables", instruction: "Cook onion, celery, and potato in bacon fat." },
        { title: "Make Roux", instruction: "Add flour and cook 1 minute, gradually add clam juice." },
        { title: "Finish", instruction: "Add clams, cream, and bacon, simmer until thickened." }
      ]
    },
    {
      id: 56,
      name: "Chicken Shawarma",
      description: "Middle Eastern spiced chicken with tahini sauce",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "35 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "mediterranean",
      ingredients: ["chicken thighs", "yogurt", "lemon", "garlic", "cumin", "paprika", "pita bread", "tahini"],
      steps: [
        { title: "Marinate Chicken", instruction: "Marinate chicken in yogurt, lemon, and spices for 30 minutes." },
        { title: "Cook Chicken", instruction: "Grill or roast chicken until cooked through." },
        { title: "Make Sauce", instruction: "Mix tahini with lemon juice and garlic." },
        { title: "Serve", instruction: "Slice chicken and serve in pita with sauce and vegetables." }
      ]
    },
    {
      id: 57,
      name: "Vegetable Fried Rice",
      description: "Colorful fried rice with mixed vegetables and soy sauce",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "15 min",
      servings: 4,
      rating: 4.3,
      difficulty: "beginner",
      diet: "vegan",
      cuisine: "asian",
      ingredients: ["cooked rice", "mixed vegetables", "soy sauce", "sesame oil", "garlic", "ginger", "green onions"],
      steps: [
        { title: "Heat Oil", instruction: "Heat oil in large wok or skillet." },
        { title: "Cook Aromatics", instruction: "Stir fry garlic and ginger until fragrant." },
        { title: "Add Vegetables", instruction: "Add mixed vegetables and stir fry until tender." },
        { title: "Add Rice", instruction: "Add rice and seasonings, toss until heated through." }
      ]
    },
    {
      id: 58,
      name: "Pork Tenderloin",
      description: "Roasted pork tenderloin with herb crust",
      image: "https://images.pexels.com/photos/8601515/pexels-photo-8601515.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 4,
      rating: 4.8,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "american",
      ingredients: ["pork tenderloin", "rosemary", "thyme", "garlic", "olive oil", "dijon mustard", "breadcrumbs"],
      steps: [
        { title: "Sear Pork", instruction: "Sear pork tenderloin on all sides until browned." },
        { title: "Make Crust", instruction: "Mix herbs, garlic, breadcrumbs, and oil." },
        { title: "Coat", instruction: "Brush pork with mustard, press herb mixture on top." },
        { title: "Roast", instruction: "Roast at 425°F for 15-20 minutes until internal temp reaches 145°F." }
      ]
    },
    {
      id: 59,
      name: "Chicken Burrito Bowl",
      description: "Mexican-inspired bowl with chicken, rice, and toppings",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.5,
      difficulty: "beginner",
      diet: "all",
      cuisine: "mexican",
      ingredients: ["chicken breast", "rice", "black beans", "corn", "avocado", "salsa", "cheese", "lime"],
      steps: [
        { title: "Cook Chicken", instruction: "Season and cook chicken breast, slice when done." },
        { title: "Prepare Rice", instruction: "Cook rice and season with lime and cilantro." },
        { title: "Warm Beans", instruction: "Heat black beans with cumin and garlic." },
        { title: "Assemble Bowl", instruction: "Layer rice, chicken, beans, and toppings in bowls." }
      ]
    },
    {
      id: 60,
      name: "Mushroom Stroganoff",
      description: "Vegetarian stroganoff with mushrooms and sour cream",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.4,
      difficulty: "beginner",
      diet: "vegetarian",
      cuisine: "american",
      ingredients: ["mixed mushrooms", "onion", "sour cream", "vegetable broth", "egg noodles", "flour", "butter"],
      steps: [
        { title: "Cook Noodles", instruction: "Cook egg noodles according to package directions." },
        { title: "Sauté Mushrooms", instruction: "Cook sliced mushrooms and onion until golden." },
        { title: "Make Sauce", instruction: "Add flour, then gradually whisk in broth." },
        { title: "Finish", instruction: "Stir in sour cream and serve over noodles." }
      ]
    },
    {
      id: 61,
      name: "Fish Curry",
      description: "Spicy fish curry with coconut milk and curry spices",
      image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 4,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["white fish", "coconut milk", "curry powder", "onion", "tomato", "ginger", "garlic", "cilantro"],
      steps: [
        { title: "Sauté Base", instruction: "Cook onion, ginger, and garlic until soft." },
        { title: "Add Spices", instruction: "Add curry powder and cook until fragrant." },
        { title: "Add Liquid", instruction: "Add tomatoes and coconut milk, bring to simmer." },
        { title: "Add Fish", instruction: "Gently add fish pieces and cook until done." }
      ]
    },
    {
      id: 62,
      name: "Chicken Club Sandwich",
      description: "Triple-decker sandwich with chicken, bacon, and vegetables",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "15 min",
      servings: 2,
      rating: 4.5,
      difficulty: "beginner",
      diet: "all",
      cuisine: "american",
      ingredients: ["bread", "chicken breast", "bacon", "lettuce", "tomato", "mayonnaise", "avocado"],
      steps: [
        { title: "Toast Bread", instruction: "Toast 3 slices of bread until golden." },
        { title: "Cook Proteins", instruction: "Cook chicken breast and bacon until done." },
        { title: "Prep Vegetables", instruction: "Slice tomato and avocado, wash lettuce." },
        { title: "Assemble", instruction: "Layer ingredients between toast slices, secure with toothpicks." }
      ]
    },
    {
      id: 63,
      name: "Beef Burritos",
      description: "Large flour tortillas filled with seasoned beef and beans",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.4,
      difficulty: "beginner",
      diet: "all",
      cuisine: "mexican",
      ingredients: ["ground beef", "flour tortillas", "refried beans", "rice", "cheese", "salsa", "sour cream", "lettuce"],
      steps: [
        { title: "Cook Beef", instruction: "Brown ground beef with taco seasoning." },
        { title: "Warm Beans", instruction: "Heat refried beans until smooth." },
        { title: "Warm Tortillas", instruction: "Heat tortillas to make them pliable." },
        { title: "Assemble", instruction: "Fill tortillas with beef, beans, rice, and toppings, roll tightly." }
      ]
    },
    {
      id: 64,
      name: "Chicken Marsala",
      description: "Pan-seared chicken in rich marsala wine sauce",
      image: "https://images.pexels.com/photos/8601515/pexels-photo-8601515.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "italian",
      ingredients: ["chicken breast", "mushrooms", "marsala wine", "flour", "butter", "chicken broth", "cream"],
      steps: [
        { title: "Pound Chicken", instruction: "Pound chicken to even thickness, dredge in flour." },
        { title: "Cook Chicken", instruction: "Pan-sear chicken until golden, remove from pan." },
        { title: "Make Sauce", instruction: "Sauté mushrooms, add wine and broth, reduce." },
        { title: "Finish", instruction: "Return chicken to pan, add cream, simmer until heated." }
      ]
    },
    {
      id: 65,
      name: "Vegetable Quesadillas",
      description: "Grilled tortillas filled with cheese and sautéed vegetables",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "20 min",
      servings: 4,
      rating: 4.3,
      difficulty: "beginner",
      diet: "vegetarian",
      cuisine: "mexican",
      ingredients: ["flour tortillas", "bell peppers", "onion", "mushrooms", "cheese", "spinach", "salsa"],
      steps: [
        { title: "Sauté Vegetables", instruction: "Cook bell peppers, onion, and mushrooms until tender." },
        { title: "Add Spinach", instruction: "Add spinach and cook until wilted." },
        { title: "Assemble", instruction: "Place vegetables and cheese on half of each tortilla." },
        { title: "Cook", instruction: "Fold tortillas and cook in skillet until golden and cheese melts." }
      ]
    },
    {
      id: 66,
      name: "Chicken Cacciatore",
      description: "Italian braised chicken with tomatoes and vegetables",
      image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "45 min",
      servings: 4,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "italian",
      ingredients: ["chicken pieces", "bell pepper", "onion", "tomatoes", "white wine", "olives", "herbs"],
      steps: [
        { title: "Brown Chicken", instruction: "Brown chicken pieces on all sides, remove." },
        { title: "Sauté Vegetables", instruction: "Cook bell pepper and onion until soft." },
        { title: "Add Tomatoes", instruction: "Add tomatoes, wine, and herbs, bring to simmer." },
        { title: "Braise", instruction: "Return chicken to pot, cover and simmer 30 minutes." }
      ]
    },
    {
      id: 67,
      name: "Shrimp Scampi",
      description: "Garlic butter shrimp served over pasta",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "20 min",
      servings: 4,
      rating: 4.8,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "italian",
      ingredients: ["shrimp", "linguine", "garlic", "white wine", "butter", "lemon", "parsley", "red pepper flakes"],
      steps: [
        { title: "Cook Pasta", instruction: "Cook linguine according to package directions." },
        { title: "Sauté Garlic", instruction: "Cook minced garlic in butter until fragrant." },
        { title: "Cook Shrimp", instruction: "Add shrimp and cook until pink." },
        { title: "Finish", instruction: "Add wine, lemon juice, and parsley, toss with pasta." }
      ]
    },
    {
      id: 68,
      name: "Turkey Meatballs",
      description: "Lean turkey meatballs in marinara sauce",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "35 min",
      servings: 4,
      rating: 4.4,
      difficulty: "beginner",
      diet: "all",
      cuisine: "italian",
      ingredients: ["ground turkey", "breadcrumbs", "eggs", "onion", "marinara sauce", "parmesan", "herbs"],
      steps: [
        { title: "Mix Meatballs", instruction: "Combine turkey, breadcrumbs, egg, and seasonings." },
        { title: "Form Balls", instruction: "Roll mixture into 1.5-inch meatballs." },
        { title: "Brown Meatballs", instruction: "Brown meatballs in skillet on all sides." },
        { title: "Simmer", instruction: "Add marinara sauce and simmer 15 minutes." }
      ]
    },
    {
      id: 69,
      name: "Chicken Fettuccine Alfredo",
      description: "Creamy fettuccine pasta with grilled chicken",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "italian",
      ingredients: ["fettuccine", "chicken breast", "heavy cream", "parmesan", "butter", "garlic", "nutmeg"],
      steps: [
        { title: "Cook Pasta", instruction: "Cook fettuccine until al dente, reserve pasta water." },
        { title: "Cook Chicken", instruction: "Grill chicken breast and slice into strips." },
        { title: "Make Alfredo", instruction: "Melt butter, add cream and parmesan, whisk until smooth." },
        { title: "Combine", instruction: "Toss pasta with sauce, top with chicken." }
      ]
    },
    {
      id: 70,
      name: "Beef Stir Fry",
      description: "Quick beef stir fry with vegetables and savory sauce",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "20 min",
      servings: 4,
      rating: 4.5,
      difficulty: "beginner",
      diet: "all",
      cuisine: "asian",
      ingredients: ["beef sirloin", "broccoli", "bell pepper", "soy sauce", "oyster sauce", "garlic", "ginger"],
      steps: [
        { title: "Slice Beef", instruction: "Cut beef into thin strips against the grain." },
        { title: "Prep Vegetables", instruction: "Cut vegetables into uniform pieces." },
        { title: "Stir Fry Beef", instruction: "Cook beef in hot oil until browned, remove." },
        { title: "Finish", instruction: "Stir fry vegetables, return beef, add sauce." }
      ]
    },
    {
      id: 71,
      name: "Chicken Tortilla Soup",
      description: "Mexican-inspired soup with chicken, beans, and tortilla strips",
      image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "35 min",
      servings: 6,
      rating: 4.6,
      difficulty: "beginner",
      diet: "all",
      cuisine: "mexican",
      ingredients: ["chicken breast", "black beans", "corn", "tomatoes", "chicken broth", "tortillas", "avocado", "lime"],
      steps: [
        { title: "Cook Chicken", instruction: "Simmer chicken in broth until cooked, shred." },
        { title: "Add Vegetables", instruction: "Add tomatoes, beans, and corn to broth." },
        { title: "Season", instruction: "Add cumin, chili powder, and lime juice." },
        { title: "Serve", instruction: "Top with tortilla strips, avocado, and cheese." }
      ]
    },
    {
      id: 72,
      name: "Pork Fried Rice",
      description: "Fried rice with diced pork and mixed vegetables",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "20 min",
      servings: 4,
      rating: 4.4,
      difficulty: "beginner",
      diet: "all",
      cuisine: "asian",
      ingredients: ["cooked rice", "pork tenderloin", "eggs", "peas", "carrot", "soy sauce", "sesame oil", "green onions"],
      steps: [
        { title: "Cook Pork", instruction: "Dice and cook pork until golden brown." },
        { title: "Scramble Eggs", instruction: "Scramble eggs in the same pan, remove." },
        { title: "Fry Rice", instruction: "Add rice and vegetables, stir fry until heated." },
        { title: "Combine", instruction: "Return pork and eggs to pan, season with soy sauce." }
      ]
    },
    {
      id: 73,
      name: "Chicken Gyros",
      description: "Greek-style chicken gyros with tzatziki sauce",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "mediterranean",
      ingredients: ["chicken thighs", "greek yogurt", "cucumber", "garlic", "lemon", "oregano", "pita bread", "red onion"],
      steps: [
        { title: "Marinate Chicken", instruction: "Marinate chicken in lemon, garlic, and oregano." },
        { title: "Make Tzatziki", instruction: "Mix yogurt with grated cucumber, garlic, and lemon." },
        { title: "Cook Chicken", instruction: "Grill chicken until cooked through, slice thin." },
        { title: "Assemble", instruction: "Serve chicken in pita with tzatziki and vegetables." }
      ]
    },
    {
      id: 74,
      name: "Vegetable Curry Rice Bowl",
      description: "Spiced vegetable curry served over jasmine rice",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "35 min",
      servings: 4,
      rating: 4.5,
      difficulty: "intermediate",
      diet: "vegan",
      cuisine: "asian",
      ingredients: ["jasmine rice", "cauliflower", "sweet potato", "coconut milk", "curry powder", "onion", "garlic", "cilantro"],
      steps: [
        { title: "Cook Rice", instruction: "Prepare jasmine rice according to package directions." },
        { title: "Prep Vegetables", instruction: "Cut cauliflower and sweet potato into chunks." },
        { title: "Make Curry", instruction: "Sauté onion and garlic, add vegetables and spices." },
        { title: "Simmer", instruction: "Add coconut milk and simmer until vegetables are tender." }
      ]
    },
    {
      id: 75,
      name: "Chicken Parmesan Sandwich",
      description: "Breaded chicken cutlet with marinara and mozzarella on a roll",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "italian",
      ingredients: ["chicken breast", "breadcrumbs", "marinara sauce", "mozzarella", "sub rolls", "parmesan", "basil"],
      steps: [
        { title: "Bread Chicken", instruction: "Pound chicken thin, bread with seasoned breadcrumbs." },
        { title: "Fry Chicken", instruction: "Pan-fry chicken until golden and cooked through." },
        { title: "Add Sauce", instruction: "Top chicken with marinara and mozzarella." },
        { title: "Melt Cheese", instruction: "Broil until cheese melts, serve on toasted rolls." }
      ]
    },
    {
      id: 76,
      name: "Beef Chow Mein",
      description: "Stir-fried noodles with beef and vegetables",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.5,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["chow mein noodles", "beef sirloin", "cabbage", "bean sprouts", "soy sauce", "oyster sauce", "garlic"],
      steps: [
        { title: "Cook Noodles", instruction: "Cook chow mein noodles according to package directions." },
        { title: "Stir Fry Beef", instruction: "Cook sliced beef in hot oil until browned." },
        { title: "Add Vegetables", instruction: "Add cabbage and bean sprouts, stir fry until tender." },
        { title: "Combine", instruction: "Add noodles and sauce, toss until heated through." }
      ]
    },
    {
      id: 77,
      name: "Turkey Chili",
      description: "Lean ground turkey chili with beans and vegetables",
      image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "50 min",
      servings: 6,
      rating: 4.4,
      difficulty: "beginner",
      diet: "all",
      cuisine: "american",
      ingredients: ["ground turkey", "kidney beans", "black beans", "tomatoes", "bell pepper", "onion", "chili powder", "cumin"],
      steps: [
        { title: "Brown Turkey", instruction: "Cook ground turkey until browned and cooked through." },
        { title: "Add Vegetables", instruction: "Add diced onion and bell pepper, cook until soft." },
        { title: "Add Spices", instruction: "Stir in chili powder, cumin, and other seasonings." },
        { title: "Simmer", instruction: "Add tomatoes and beans, simmer 30 minutes." }
      ]
    },
    {
      id: 78,
      name: "Chicken Tikka",
      description: "Marinated grilled chicken with Indian spices",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "40 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["chicken breast", "yogurt", "garam masala", "turmeric", "ginger", "garlic", "lemon", "cilantro"],
      steps: [
        { title: "Marinate Chicken", instruction: "Cut chicken into cubes, marinate in yogurt and spices for 30 minutes." },
        { title: "Thread Skewers", instruction: "Thread marinated chicken onto skewers." },
        { title: "Grill", instruction: "Grill chicken skewers until cooked through and slightly charred." },
        { title: "Serve", instruction: "Garnish with cilantro and serve with naan bread." }
      ]
    },
    {
      id: 79,
      name: "Vegetable Pad Thai",
      description: "Thai stir-fried noodles with vegetables and peanuts",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "vegan",
      cuisine: "asian",
      ingredients: ["rice noodles", "tofu", "bean sprouts", "carrot", "peanuts", "lime", "fish sauce", "tamarind"],
      steps: [
        { title: "Soak Noodles", instruction: "Soak rice noodles in warm water until soft." },
        { title: "Prep Vegetables", instruction: "Cut tofu and vegetables into bite-sized pieces." },
        { title: "Make Sauce", instruction: "Mix fish sauce, tamarind, and sugar for pad thai sauce." },
        { title: "Stir Fry", instruction: "Stir fry tofu and vegetables, add noodles and sauce." }
      ]
    },
    {
      id: 80,
      name: "Chicken Cordon Bleu",
      description: "Stuffed chicken breast with ham and cheese",
      image: "https://images.pexels.com/photos/8601515/pexels-photo-8601515.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "40 min",
      servings: 4,
      rating: 4.8,
      difficulty: "advanced",
      diet: "all",
      cuisine: "american",
      ingredients: ["chicken breast", "ham", "swiss cheese", "flour", "eggs", "breadcrumbs", "butter"],
      steps: [
        { title: "Pound Chicken", instruction: "Pound chicken breast to 1/4 inch thickness." },
        { title: "Stuff", instruction: "Place ham and cheese on chicken, roll up and secure." },
        { title: "Bread", instruction: "Dredge in flour, egg, then breadcrumbs." },
        { title: "Bake", instruction: "Bake at 375°F for 25-30 minutes until golden." }
      ]
    },
    {
      id: 81,
      name: "Shrimp Tacos",
      description: "Grilled shrimp tacos with cabbage slaw and lime",
      image: "https://images.pexels.com/photos/2871755/pexels-photo-2871755.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "20 min",
      servings: 4,
      rating: 4.7,
      difficulty: "beginner",
      diet: "all",
      cuisine: "mexican",
      ingredients: ["shrimp", "corn tortillas", "cabbage", "lime", "cilantro", "avocado", "chipotle mayo"],
      steps: [
        { title: "Season Shrimp", instruction: "Season shrimp with chili powder and lime juice." },
        { title: "Make Slaw", instruction: "Shred cabbage and toss with lime juice and cilantro." },
        { title: "Cook Shrimp", instruction: "Grill shrimp 2-3 minutes per side until pink." },
        { title: "Assemble", instruction: "Serve shrimp in tortillas with slaw and avocado." }
      ]
    },
    {
      id: 82,
      name: "Beef Ramen",
      description: "Rich beef ramen with soft-boiled eggs and vegetables",
      image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "45 min",
      servings: 4,
      rating: 4.8,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["ramen noodles", "beef broth", "beef sirloin", "eggs", "green onions", "mushrooms", "soy sauce"],
      steps: [
        { title: "Prepare Broth", instruction: "Simmer beef broth with soy sauce and seasonings." },
        { title: "Cook Eggs", instruction: "Soft-boil eggs for 6-7 minutes, peel and halve." },
        { title: "Cook Beef", instruction: "Slice and quickly sear beef until just cooked." },
        { title: "Assemble", instruction: "Serve noodles in broth with beef, eggs, and vegetables." }
      ]
    },
    {
      id: 83,
      name: "Chicken Satay",
      description: "Thai grilled chicken skewers with peanut sauce",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "35 min",
      servings: 4,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["chicken thighs", "coconut milk", "curry powder", "peanut butter", "soy sauce", "lime", "garlic"],
      steps: [
        { title: "Marinate Chicken", instruction: "Cut chicken into strips, marinate in coconut milk and spices." },
        { title: "Make Peanut Sauce", instruction: "Mix peanut butter, soy sauce, and lime juice." },
        { title: "Thread Skewers", instruction: "Thread chicken onto bamboo skewers." },
        { title: "Grill", instruction: "Grill skewers until cooked through, serve with peanut sauce." }
      ]
    },
    {
      id: 84,
      name: "Vegetable Biryani",
      description: "Fragrant Indian rice dish with mixed vegetables and spices",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "60 min",
      servings: 6,
      rating: 4.7,
      difficulty: "advanced",
      diet: "vegetarian",
      cuisine: "asian",
      ingredients: ["basmati rice", "mixed vegetables", "yogurt", "garam masala", "saffron", "onion", "garlic", "ginger"],
      steps: [
        { title: "Soak Rice", instruction: "Soak basmati rice for 30 minutes, then parboil." },
        { title: "Cook Vegetables", instruction: "Sauté vegetables with spices until tender." },
        { title: "Layer", instruction: "Layer rice and vegetables in a heavy-bottomed pot." },
        { title: "Steam", instruction: "Cover and cook on low heat for 45 minutes." }
      ]
    },
    {
      id: 85,
      name: "Chicken Pho",
      description: "Vietnamese noodle soup with chicken and herbs",
      image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "90 min",
      servings: 4,
      rating: 4.8,
      difficulty: "advanced",
      diet: "all",
      cuisine: "asian",
      ingredients: ["rice noodles", "chicken breast", "chicken broth", "star anise", "cinnamon", "ginger", "bean sprouts", "herbs"],
      steps: [
        { title: "Make Broth", instruction: "Simmer chicken broth with spices for 1 hour." },
        { title: "Cook Chicken", instruction: "Poach chicken breast in broth until cooked." },
        { title: "Prepare Noodles", instruction: "Cook rice noodles according to package directions." },
        { title: "Assemble", instruction: "Serve noodles and chicken in hot broth with fresh herbs." }
      ]
    },
    {
      id: 86,
      name: "Pork Carnitas",
      description: "Mexican slow-cooked pork shoulder with citrus and spices",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "3 hours",
      servings: 8,
      rating: 4.9,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "mexican",
      ingredients: ["pork shoulder", "orange", "lime", "cumin", "oregano", "garlic", "onion", "bay leaves"],
      steps: [
        { title: "Season Pork", instruction: "Rub pork with spices and citrus juice." },
        { title: "Slow Cook", instruction: "Cook in slow cooker with onion and bay leaves for 6-8 hours." },
        { title: "Shred", instruction: "Remove pork and shred with two forks." },
        { title: "Crisp", instruction: "Broil shredded pork briefly to crisp edges." }
      ]
    },
    {
      id: 87,
      name: "Chicken Katsu",
      description: "Japanese breaded chicken cutlet with tonkatsu sauce",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["chicken breast", "panko breadcrumbs", "flour", "eggs", "tonkatsu sauce", "cabbage", "rice"],
      steps: [
        { title: "Pound Chicken", instruction: "Pound chicken to even thickness, season with salt." },
        { title: "Bread Chicken", instruction: "Dredge in flour, egg, then panko breadcrumbs." },
        { title: "Fry", instruction: "Deep fry until golden brown and cooked through." },
        { title: "Serve", instruction: "Slice and serve with shredded cabbage and tonkatsu sauce." }
      ]
    },
    {
      id: 88,
      name: "Vegetable Ramen",
      description: "Vegetarian ramen with miso broth and seasonal vegetables",
      image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 4,
      rating: 4.5,
      difficulty: "intermediate",
      diet: "vegetarian",
      cuisine: "asian",
      ingredients: ["ramen noodles", "miso paste", "vegetable broth", "mushrooms", "corn", "green onions", "nori", "eggs"],
      steps: [
        { title: "Make Broth", instruction: "Whisk miso paste into hot vegetable broth." },
        { title: "Cook Noodles", instruction: "Cook ramen noodles according to package directions." },
        { title: "Prepare Toppings", instruction: "Sauté mushrooms, soft-boil eggs, prep vegetables." },
        { title: "Assemble", instruction: "Serve noodles in broth with toppings arranged on top." }
      ]
    },
    {
      id: 89,
      name: "Chicken Falafel Wrap",
      description: "Middle Eastern spiced chicken in pita with tahini sauce",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "mediterranean",
      ingredients: ["ground chicken", "chickpeas", "parsley", "cumin", "coriander", "pita bread", "tahini", "cucumber"],
      steps: [
        { title: "Make Falafel", instruction: "Mix ground chicken with spices and herbs, form into balls." },
        { title: "Cook Falafel", instruction: "Pan-fry falafel until golden brown and cooked through." },
        { title: "Make Sauce", instruction: "Mix tahini with lemon juice and garlic." },
        { title: "Assemble", instruction: "Serve falafel in pita with vegetables and tahini sauce." }
      ]
    },
    {
      id: 90,
      name: "Beef Bulgogi",
      description: "Korean marinated beef with sweet and savory flavors",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 4,
      rating: 4.8,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["beef sirloin", "soy sauce", "brown sugar", "sesame oil", "garlic", "ginger", "pear", "green onions"],
      steps: [
        { title: "Marinate Beef", instruction: "Slice beef thin, marinate in soy sauce, sugar, and aromatics." },
        { title: "Prep Vegetables", instruction: "Slice onions and prepare other vegetables." },
        { title: "Cook Beef", instruction: "Stir fry marinated beef until caramelized." },
        { title: "Serve", instruction: "Serve with rice and kimchi, garnish with green onions." }
      ]
    },
    {
      id: 91,
      name: "Chicken Burrito",
      description: "Large flour tortilla filled with seasoned chicken and fixings",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "20 min",
      servings: 4,
      rating: 4.5,
      difficulty: "beginner",
      diet: "all",
      cuisine: "mexican",
      ingredients: ["chicken breast", "flour tortillas", "black beans", "rice", "cheese", "salsa", "avocado", "lime"],
      steps: [
        { title: "Cook Chicken", instruction: "Season and cook chicken breast, dice when done." },
        { title: "Warm Tortillas", instruction: "Heat tortillas to make them pliable." },
        { title: "Prepare Fillings", instruction: "Warm beans and rice, prepare other toppings." },
        { title: "Assemble", instruction: "Fill tortillas with chicken and toppings, roll tightly." }
      ]
    },
    {
      id: 92,
      name: "Vegetable Paella",
      description: "Spanish rice dish with saffron and seasonal vegetables",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "45 min",
      servings: 6,
      rating: 4.6,
      difficulty: "advanced",
      diet: "vegetarian",
      cuisine: "mediterranean",
      ingredients: ["bomba rice", "saffron", "vegetable broth", "bell peppers", "green beans", "artichokes", "tomato", "garlic"],
      steps: [
        { title: "Prepare Sofrito", instruction: "Sauté garlic, tomato, and peppers until soft." },
        { title: "Add Rice", instruction: "Add rice and stir to coat with sofrito." },
        { title: "Add Broth", instruction: "Add hot saffron-infused broth, do not stir." },
        { title: "Simmer", instruction: "Add vegetables and simmer 20 minutes until rice is tender." }
      ]
    },
    {
      id: 93,
      name: "Chicken Tikka Wrap",
      description: "Spiced chicken tikka wrapped in naan with yogurt sauce",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["chicken breast", "yogurt", "garam masala", "naan bread", "cucumber", "red onion", "mint", "cilantro"],
      steps: [
        { title: "Marinate Chicken", instruction: "Marinate diced chicken in yogurt and spices." },
        { title: "Cook Chicken", instruction: "Grill or pan-fry chicken until cooked through." },
        { title: "Make Sauce", instruction: "Mix yogurt with mint and cilantro." },
        { title: "Assemble", instruction: "Wrap chicken in naan with vegetables and sauce." }
      ]
    },
    {
      id: 94,
      name: "Pork Banh Mi",
      description: "Vietnamese sandwich with marinated pork and pickled vegetables",
      image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "35 min",
      servings: 4,
      rating: 4.8,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["pork shoulder", "baguette", "carrot", "daikon", "cilantro", "jalapeño", "mayonnaise", "soy sauce"],
      steps: [
        { title: "Marinate Pork", instruction: "Marinate sliced pork in soy sauce and spices." },
        { title: "Pickle Vegetables", instruction: "Quick pickle carrot and daikon in vinegar." },
        { title: "Cook Pork", instruction: "Grill or pan-fry pork until caramelized." },
        { title: "Assemble", instruction: "Fill baguette with pork, pickled vegetables, and herbs." }
      ]
    },
    {
      id: 95,
      name: "Chicken Shawarma Bowl",
      description: "Middle Eastern spiced chicken over rice with tahini",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 4,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "mediterranean",
      ingredients: ["chicken thighs", "rice", "cucumber", "tomato", "red onion", "tahini", "lemon", "sumac"],
      steps: [
        { title: "Marinate Chicken", instruction: "Marinate chicken in Middle Eastern spices." },
        { title: "Cook Rice", instruction: "Prepare rice with a pinch of turmeric." },
        { title: "Cook Chicken", instruction: "Grill chicken until cooked through, slice thin." },
        { title: "Assemble Bowl", instruction: "Serve chicken over rice with vegetables and tahini." }
      ]
    },
    {
      id: 96,
      name: "Vegetable Sushi Bowl",
      description: "Deconstructed sushi with vegetables and sushi rice",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "25 min",
      servings: 4,
      rating: 4.4,
      difficulty: "beginner",
      diet: "vegetarian",
      cuisine: "asian",
      ingredients: ["sushi rice", "cucumber", "avocado", "carrot", "edamame", "nori", "soy sauce", "wasabi"],
      steps: [
        { title: "Prepare Rice", instruction: "Cook sushi rice and season with rice vinegar." },
        { title: "Prep Vegetables", instruction: "Slice cucumber, avocado, and carrot into strips." },
        { title: "Cook Edamame", instruction: "Steam edamame until tender." },
        { title: "Assemble Bowl", instruction: "Arrange vegetables over rice, serve with soy sauce." }
      ]
    },
    {
      id: 97,
      name: "Chicken Adobo",
      description: "Filipino braised chicken in vinegar and soy sauce",
      image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "40 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["chicken thighs", "soy sauce", "vinegar", "garlic", "bay leaves", "black pepper", "onion", "rice"],
      steps: [
        { title: "Marinate Chicken", instruction: "Marinate chicken in soy sauce and vinegar." },
        { title: "Brown Chicken", instruction: "Brown chicken pieces in a heavy pot." },
        { title: "Add Aromatics", instruction: "Add garlic, onion, and bay leaves." },
        { title: "Braise", instruction: "Add marinade and simmer until chicken is tender." }
      ]
    },
    {
      id: 98,
      name: "Beef Pho",
      description: "Vietnamese beef noodle soup with aromatic broth",
      image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "2 hours",
      servings: 4,
      rating: 4.9,
      difficulty: "advanced",
      diet: "all",
      cuisine: "asian",
      ingredients: ["beef bones", "rice noodles", "beef sirloin", "star anise", "cinnamon", "ginger", "onion", "herbs"],
      steps: [
        { title: "Make Broth", instruction: "Simmer beef bones with spices for 2 hours." },
        { title: "Prepare Noodles", instruction: "Cook rice noodles according to package directions." },
        { title: "Slice Beef", instruction: "Slice raw beef paper-thin." },
        { title: "Assemble", instruction: "Pour hot broth over noodles and raw beef, add herbs." }
      ]
    },
    {
      id: 99,
      name: "Chicken Yakitori",
      description: "Japanese grilled chicken skewers with tare sauce",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "30 min",
      servings: 4,
      rating: 4.6,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["chicken thighs", "soy sauce", "mirin", "sake", "sugar", "green onions", "sesame seeds"],
      steps: [
        { title: "Make Tare", instruction: "Simmer soy sauce, mirin, sake, and sugar until thickened." },
        { title: "Prep Chicken", instruction: "Cut chicken into bite-sized pieces, thread on skewers." },
        { title: "Grill", instruction: "Grill skewers, basting with tare sauce." },
        { title: "Serve", instruction: "Garnish with green onions and sesame seeds." }
      ]
    },
    {
      id: 100,
      name: "Vegetable Bibimbap",
      description: "Korean mixed rice bowl with seasoned vegetables",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "40 min",
      servings: 4,
      rating: 4.7,
      difficulty: "intermediate",
      diet: "vegetarian",
      cuisine: "asian",
      ingredients: ["rice", "spinach", "carrot", "mushrooms", "bean sprouts", "eggs", "gochujang", "sesame oil"],
      steps: [
        { title: "Prepare Rice", instruction: "Cook rice and keep warm." },
        { title: "Season Vegetables", instruction: "Blanch and season each vegetable separately." },
        { title: "Fry Eggs", instruction: "Fry eggs sunny-side up." },
        { title: "Assemble Bowl", instruction: "Arrange vegetables over rice, top with egg and gochujang." }
      ]
    },
    {
      id: 101,
      name: "Chicken Tandoori",
      description: "Indian spiced chicken marinated in yogurt and roasted",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "45 min",
      servings: 4,
      rating: 4.8,
      difficulty: "intermediate",
      diet: "all",
      cuisine: "asian",
      ingredients: ["chicken legs", "yogurt", "tandoori masala", "ginger", "garlic", "lemon", "cilantro", "naan"],
      steps: [
        { title: "Marinate Chicken", instruction: "Marinate chicken in yogurt and spices for 2 hours." },
        { title: "Preheat Oven", instruction: "Preheat oven to 450°F." },
        { title: "Roast", instruction: "Roast chicken 25-30 minutes until cooked through." },
        { title: "Serve", instruction: "Garnish with cilantro and serve with naan bread." }
      ]
    },
    {
      id: 102,
      name: "Seafood Paella",
      description: "Traditional Spanish rice dish with mixed seafood",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "50 min",
      servings: 6,
      rating: 4.9,
      difficulty: "advanced",
      diet: "all",
      cuisine: "mediterranean",
      ingredients: ["bomba rice", "shrimp", "mussels", "squid", "saffron", "tomato", "bell pepper", "garlic"],
      steps: [
        { title: "Prepare Seafood", instruction: "Clean and prepare all seafood." },
        { title: "Make Sofrito", instruction: "Sauté garlic, tomato, and peppers." },
        { title: "Add Rice", instruction: "Add rice and saffron-infused broth." },
        { title: "Add Seafood", instruction: "Arrange seafood on top and simmer until rice is tender." }
      ]
    },
    {
      id: 103,
      name: "Chicken Vindaloo",
      description: "Spicy Goan curry with chicken and vinegar",
      image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "50 min",
      servings: 4,
      rating: 4.7,
      difficulty: "advanced",
      diet: "all",
      cuisine: "asian",
      ingredients: ["chicken breast", "vinegar", "red chilies", "ginger", "garlic", "cumin", "coriander", "turmeric"],
      steps: [
        { title: "Make Paste", instruction: "Blend chilies, ginger, garlic, and spices with vinegar." },
        { title: "Marinate Chicken", instruction: "Marinate chicken in spice paste for 30 minutes." },
        { title: "Cook Chicken", instruction: "Brown chicken pieces in oil." },
        { title: "Simmer", instruction: "Add remaining paste and simmer until chicken is tender." }
      ]
    },
    {
      id: 104,
      name: "Vegetable Moussaka",
      description: "Greek layered casserole with eggplant and béchamel",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "90 min",
      servings: 8,
      rating: 4.6,
      difficulty: "advanced",
      diet: "vegetarian",
      cuisine: "mediterranean",
      ingredients: ["eggplant", "zucchini", "lentils", "tomato sauce", "béchamel sauce", "cheese", "onion", "herbs"],
      steps: [
        { title: "Prep Vegetables", instruction: "Slice and salt eggplant, then grill until tender." },
        { title: "Cook Lentils", instruction: "Simmer lentils with onion and tomato sauce." },
        { title: "Make Béchamel", instruction: "Prepare white sauce with butter, flour, and milk." },
        { title: "Assemble", instruction: "Layer vegetables, lentils, and béchamel, bake until golden." }
      ]
    },
    {
      id: 105,
      name: "Korean Fried Chicken",
      description: "Crispy double-fried chicken with sweet and spicy glaze",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=300",
      time: "60 min",
      servings: 4,
      rating: 4.8,
      difficulty: "advanced",
      diet: "all",
      cuisine: "asian",
      ingredients: ["chicken wings", "potato starch", "gochujang", "honey", "soy sauce", "garlic", "ginger", "sesame seeds"],
      steps: [
        { title: "Prep Chicken", instruction: "Cut chicken into pieces and marinate in buttermilk." },
        { title: "First Fry", instruction: "Coat in starch and fry at 325°F for 10 minutes." },
        { title: "Second Fry", instruction: "Fry again at 375°F until extra crispy." },
        { title: "Glaze", instruction: "Toss with gochujang glaze and garnish with sesame seeds." }
      ]
    },
    {
      id: 106,
      name: "Golgappa (Pani Puri)",
      description: "Crispy puris filled with spicy, tangy water and flavorful fillings – a popular Indian street food.",
      image: "https://images.pexels.com/photos/5946680/pexels-photo-5946680.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: "30 min",
      servings: 4,
      rating: 4.8,
      difficulty: "intermediate",
      diet: "vegetarian",
      cuisine: "indian",
      ingredients: [
        "ready-made golgappa puris",
        "boiled potatoes",
        "boiled chickpeas",
        "tamarind pulp",
        "mint leaves",
        "coriander leaves",
        "green chili",
        "black salt",
        "roasted cumin powder",
        "chaat masala",
        "lemon juice",
        "salt"
      ],
      steps: [
        {
          title: "Prepare Filling",
          instruction: "Mash boiled potatoes and mix with boiled chickpeas, salt, black salt, and chaat masala.",
          image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Rajashree_Venkatesh/Potato_Chana_Masala.jpg"
        },
        {
          title: "Make Pani (Spicy Water)",
          instruction: "Blend mint, coriander, green chili, tamarind pulp, and lemon juice with water. Add black salt, cumin powder, and adjust seasoning.",
          image: "https://www.whiskaffair.com/wp-content/uploads/2021/03/Pani-Puri-Water-2-3.jpg"
        },
        {
          title: "Assemble Golgappa",
          instruction: "Crack the top of each puri, fill with potato-chickpea mixture, and pour in spicy mint water.",
          image: "https://images.pexels.com/photos/12737836/pexels-photo-12737836.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "Serve Immediately",
          instruction: "Serve immediately to enjoy the crispy texture and burst of flavors.",
          image: "https://images.pexels.com/photos/14623507/pexels-photo-14623507.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      ]
    }
    

    
  ]
  ;
};