import { Request } from "express";

export default class RecipesManager {
  public static getRecipesSearch = async (req: Request) => {
    const ListRecipesSearch = [
      {
        id: "1",
        nameListRecipes: "Nuevas Recetas",
        recipes: [
          {
            id: "1",
            pathRecipeImage: "https://picsum.photos/200/300?random=1",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "2",
            pathRecipeImage: "https://picsum.photos/200/300?random=2",
            name: "Tacos Mexicanos",
          },
          {
            id: "3",
            pathRecipeImage: "https://picsum.photos/200/300?random=3",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "4",
            pathRecipeImage: "https://picsum.photos/200/300?random=4",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "5",
            pathRecipeImage: "https://picsum.photos/200/300?random=5",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "6",
            pathRecipeImage: "https://picsum.photos/200/300?random=6",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "7",
            pathRecipeImage: "https://picsum.photos/200/300?random=7",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
        ],
      },
      {
        id: "2",
        nameListRecipes: "Ultimas Recetas",
        recipes: [
          {
            id: "1",
            pathRecipeImage: "https://picsum.photos/200/300?random=1",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "2",
            pathRecipeImage: "https://picsum.photos/200/300?random=2",
            name: "Tacos Mexicanos",
          },
          {
            id: "3",
            pathRecipeImage: "https://picsum.photos/200/300?random=3",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "4",
            pathRecipeImage: "https://picsum.photos/200/300?random=4",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "5",
            pathRecipeImage: "https://picsum.photos/200/300?random=5",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "6",
            pathRecipeImage: "https://picsum.photos/200/300?random=6",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "7",
            pathRecipeImage: "https://picsum.photos/200/300?random=7",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
        ],
      },
      {
        id: "3",
        nameListRecipes: "Mejores Recetas",
        recipes: [
          {
            id: "1",
            pathRecipeImage: "https://picsum.photos/200/300?random=1",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "2",
            pathRecipeImage: "https://picsum.photos/200/300?random=2",
            name: "Tacos Mexicanos",
          },
          {
            id: "3",
            pathRecipeImage: "https://picsum.photos/200/300?random=3",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "4",
            pathRecipeImage: "https://picsum.photos/200/300?random=4",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "5",
            pathRecipeImage: "https://picsum.photos/200/300?random=5",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "6",
            pathRecipeImage: "https://picsum.photos/200/300?random=6",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "7",
            pathRecipeImage: "https://picsum.photos/200/300?random=7",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
        ],
      },
      {
        id: "4",
        nameListRecipes: "Nuevas Recetas",
        recipes: [
          {
            id: "1",
            pathRecipeImage: "https://picsum.photos/200/300?random=1",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "2",
            pathRecipeImage: "https://picsum.photos/200/300?random=2",
            name: "Tacos Mexicanos",
          },
          {
            id: "3",
            pathRecipeImage: "https://picsum.photos/200/300?random=3",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "4",
            pathRecipeImage: "https://picsum.photos/200/300?random=4",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "5",
            pathRecipeImage: "https://picsum.photos/200/300?random=5",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "6",
            pathRecipeImage: "https://picsum.photos/200/300?random=6",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "7",
            pathRecipeImage: "https://picsum.photos/200/300?random=7",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
        ],
      },
      {
        id: "5",
        nameListRecipes: "Nuevas Recetas",
        recipes: [
          {
            id: "1",
            pathRecipeImage: "https://picsum.photos/200/300?random=1",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "2",
            pathRecipeImage: "https://picsum.photos/200/300?random=2",
            name: "Tacos Mexicanos",
          },
          {
            id: "3",
            pathRecipeImage: "https://picsum.photos/200/300?random=3",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "4",
            pathRecipeImage: "https://picsum.photos/200/300?random=4",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "5",
            pathRecipeImage: "https://picsum.photos/200/300?random=5",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "6",
            pathRecipeImage: "https://picsum.photos/200/300?random=6",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
          {
            id: "7",
            pathRecipeImage: "https://picsum.photos/200/300?random=7",
            name: "Tacos Mexicanos de Carnitas Asadas",
          },
        ],
      },
    ];
    return ListRecipesSearch;
  };
  public static getRecipesExplore = async (req: Request) => {
    const listRecipesCategories = [
      {
        id: "1",
        pathCategoryImage: "https://picsum.photos/200/300?random=1",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos de Carnitas",
      },
      {
        id: "2",
        pathCategoryImage: "https://picsum.photos/200/300?random=2",
        icon: "Tacos Mexicanos",
        name: "Tacos Mexicanos",
      },
      {
        id: "3",
        pathCategoryImage: "https://picsum.photos/200/300?random=4",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
      {
        id: "4",
        pathCategoryImage: "https://picsum.photos/200/300?random=5",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
      {
        id: "5",
        pathCategoryImage: "https://picsum.photos/200/300?random=6",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
      {
        id: "6",
        pathCategoryImage: "https://picsum.photos/200/300?random=7",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
      {
        id: "7",
        pathCategoryImage: "https://picsum.photos/200/300?random=4",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
      {
        id: "8",
        pathCategoryImage: "https://picsum.photos/200/300?random=5",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
      {
        id: "9",
        pathCategoryImage: "https://picsum.photos/200/300?random=6",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
      {
        id: "10",
        pathCategoryImage: "https://picsum.photos/200/300?random=7",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
      {
        id: "11",
        pathCategoryImage: "https://picsum.photos/200/300?random=7",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
      {
        id: "12",
        pathCategoryImage: "https://picsum.photos/200/300?random=1",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
      {
        id: "13",
        pathCategoryImage: "https://picsum.photos/200/300?random=2",
        icon: "Tacos Mexicanos",
        name: "Tacos Mexicanos",
      },
      {
        id: "14",
        pathCategoryImage: "https://picsum.photos/200/300?random=3",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
      {
        id: "15",
        pathCategoryImage: "https://picsum.photos/200/300?random=4",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
      {
        id: "16",
        pathCategoryImage: "https://picsum.photos/200/300?random=5",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
      {
        id: "17",
        pathCategoryImage: "https://picsum.photos/200/300?random=6",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
      {
        id: "18",
        pathCategoryImage: "https://picsum.photos/200/300?random=7",
        icon: "Tacos Mexicanos de Carnitas Asadas",
        name: "Tacos Mexicanos",
      },
    ];
    return listRecipesCategories;
  };
  public static getRecipesList = async (req: Request) => {
    const id = req.params.id;
    const listRecipes = [
      {
        id: "0",
        nameRecipe: "Ensalada de Col con Pollo y Piña",
        pathRecipeImage:
          "https://d36fw6y2wq3bat.cloudfront.net/assets/images/cache/recipes/ensalada-de-col-con-pollo-y-pina/900/ensalada-de-col-con-pollo-y-pina.jpg",
        pathAvatarImage: "https://picsum.photos/200/300?random=2",
        introduction:
          "Como sabemos que los días de calor sólo te apetecen ensaladas frescas, hemos pensado que esta ensalada de col con pollo y piña no puedes perdértela. Porque está buenísima, es muy fácil de preparar, es fresquita y nos parece súper original. ",
        valoration: [true, true, true, true, false],
        time: 20,
        ingredientsNumber: 6,
        nameUser: "Jamcook",
        likes: 600,
      },
      {
        id: "1",
        nameRecipe: "Noodles con Tofu y Pimientos",
        pathRecipeImage:
          "https://d36fw6y2wq3bat.cloudfront.net/assets/images/cache/recipes/noodles-con-tofu-y-pimientos/900/noodles-con-tofu-y-pimientos.jpg",
        pathAvatarImage: "https://picsum.photos/200/300?random=2",
        introduction:
          "¡Alegría en la mesa! Venga, que se note ese olor a comida asiática por toda la casa. Estos noodles con tofu y vegetales, salteados con salsa de soja y jengibre van a ser tú perdición. ¡A por ellos!",
        valoration: [true, true, true, true, false],
        time: 20,
        ingredientsNumber: 6,
        nameUser: "Jamcook",
        likes: 600,
      },
      {
        id: "2",
        nameRecipe: "Pasta con Aguacate y Queso Feta",
        pathRecipeImage:
          "https://d36fw6y2wq3bat.cloudfront.net/assets/images/cache/recipes/pasta-con-aguacate-y-queso-feta/900/pasta-con-aguacate-y-queso-feta.jpg",
        pathAvatarImage: "https://picsum.photos/200/300?random=2",
        introduction:
          "¿Sabes la pasta tan rica que puedes cocinarte en menos de 20 minutos? Entra en esta receta y mira qué pasta tan sabrosa, fresca y fácil de preparar puedes hacerte.",
        valoration: [true, true, true, true, false],
        time: 20,
        ingredientsNumber: 6,
        nameUser: "Jamcook",
        likes: 600,
      },
      {
        id: "3",
        nameRecipe: "Ensalada de Quinua, Hummus y Salsa de Mostaza",
        pathRecipeImage:
          "https://d36fw6y2wq3bat.cloudfront.net/assets/images/cache/recipes/ensalada-de-quinua-hummus-y-salsa-de-mostaza/900/ensalada-de-quinua-hummus-y-salsa-de-mostaza.jpg",
        pathAvatarImage: "https://picsum.photos/200/300?random=2",
        introduction:
          "¿Quién dijo que las ensaladas de verduras son aburridas? Te aseguramos que si pruebas esta colorida receta vas a cambiar de opinión en cuestión de segundos. ¡Anímate a hacerla!",
        valoration: [true, true, true, true, false],
        time: 20,
        ingredientsNumber: 6,
        nameUser: "Jamcook",
        likes: 600,
      },
      {
        id: "4",
        nameRecipe: "Pasta con Brócoli y Limón",
        pathRecipeImage:
          "https://d36fw6y2wq3bat.cloudfront.net/assets/images/cache/recipes/pasta-con-brocoli-y-limon/900/pasta-con-brocoli-y-limon.jpg",
        pathAvatarImage: "https://picsum.photos/200/300?random=2",
        introduction:
          "¡Mira!, aquí esta receta de pasta con brócoli para que encuentres una nueva forma de cocinar el brócoli divertida. ¡Toda tuya!",
        valoration: [true, true, true, true, false],
        time: 20,
        ingredientsNumber: 6,
        nameUser: "Jamcook",
        likes: 600,
      },
      {
        id: "5",
        nameRecipe: "Shakshuka de Berenjena y Queso Feta",
        pathRecipeImage:
          "https://d36fw6y2wq3bat.cloudfront.net/assets/images/cache/recipes/shakshuka-de-berenjena-y-queso-feta/900/shakshuka-de-berenjena-y-queso-feta.jpg",
        pathAvatarImage: "https://picsum.photos/200/300?random=2",
        introduction:
          "Este plato de cuchara típico de la cocina oriental te va a sorprender por su delicioso sabor y sencillez. Es ideal para comer o cenar, lleva muy pocos ingredientes básicos y está... ¡brutal!",
        valoration: [true, true, true, true, false],
        time: 20,
        ingredientsNumber: 6,
        nameUser: "Jamcook",
        likes: 600,
      },
      {
        id: "6",
        nameRecipe: "Espaguetis con Coliflor y Queso Azul",
        pathRecipeImage:
          "https://d36fw6y2wq3bat.cloudfront.net/assets/images/cache/recipes/espaguetis-con-coliflor-y-queso-azul/900/espaguetis-con-coliflor-y-queso-azul.jpg",
        pathAvatarImage: "https://picsum.photos/200/300?random=2",
        introduction:
          "¿Se te había ocurrido alguna vez combinar coliflor, queso azul y pasta? ¡Ya estás tardando! Porque esta combinación resulta tan original y sorprendente como sabrosa. ",
        valoration: [true, true, true, true, false],
        time: 20,
        ingredientsNumber: 6,
        nameUser: "Jamcook",
        likes: 600,
      },
      {
        id: "7",
        nameRecipe: "Sartén de Espinacas y Champiñones con Tomate",
        pathRecipeImage:
          "https://d36fw6y2wq3bat.cloudfront.net/assets/images/cache/recipes/sarten-de-espinacas-y-champinones-con-tomate/900/sarten-de-espinacas-y-champinones-con-tomate.jpg",
        pathAvatarImage: "https://picsum.photos/200/300?random=2",
        introduction:
          "¿Buscas un plato rápido, completo y nutritivo? ¡No te pierdas esta sartén porque te va a fascinar. ¡Ah! Y no olvides acompañarla de un buen trozo de pan.",
        valoration: [true, true, true, true, false],
        time: 20,
        ingredientsNumber: 6,
        nameUser: "Jamcook",
        likes: 600,
      },
      {
        id: "8",
        nameRecipe: "Tortillas de Calabacín con Feta",
        pathRecipeImage:
          "https://d36fw6y2wq3bat.cloudfront.net/assets/images/cache/recipes/tortillas-de-calabacin-con-feta/900/tortillas-de-calabacin-con-feta.jpg",
        pathAvatarImage: "https://picsum.photos/200/300?random=2",
        introduction:
          "Una receta muy socorrida y deliciosa que te va ayudar a decidir qué cocinar hoy, son estas tortillas de calabacín y queso. Facilísimas de hacer, requieren muy pocos ingredientes, son muy sanas y están súper buenas. ",
        valoration: [true, true, true, true, false],
        time: 20,
        ingredientsNumber: 6,
        nameUser: "Jamcook",
        likes: 600,
      },
    ];
    return listRecipes;
  };
  public static getRecipe = async (req: Request) => {
    const id = req.params.id;
    const recipe = {
      id: "1",
      pathRecipeImage:
        "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214916/RFB-2312-2-tacos.jpg",
      pathAvatarImage: "https://picsum.photos/200/300?random=2",
      nameRecipe: "Tacos Mexicanos de Carnitas",
      nameUser: "Jonathan Mancera",
      valoration: [true, true, true, true, false],
      valorationNumber: 78,
      introduction:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum. Phasellus ex justo, gravida vitae nisl vitae, iaculis placerat massa.",
      ingredients: [
        {
          id: "1",
          name: "Zanahoria",
          pathIngredientImage: "https://picsum.photos/200/300?random=3",
          amount: "3",
        },
        {
          id: "2",
          name: "Tomate",
          pathIngredientImage: "https://picsum.photos/200/300?random=4",
          amount: "3",
        },
        {
          id: "3",
          name: "Pechuga de Pollo",
          pathIngredientImage: "https://picsum.photos/200/300?random=5",
          amount: "3",
        },
        {
          id: "4",
          name: "Arroz",
          pathIngredientImage: "https://picsum.photos/200/300?random=6",
          amount: "3",
        },
      ],
      steps: [
        {
          id: "1",
          step: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
        },
        {
          id: "2",
          step: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
        },
        {
          id: "3",
          step: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
        },
        {
          id: "4",
          step: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
        },
      ],
      tricks: [
        {
          id: "1",
          trick:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
        },
        {
          id: "2",
          trick:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis enim erat, et egestas urna ultricies dictum.",
        },
      ],
      comments: [
        {
          id: "1",
          pathAvatarImage: "https://picsum.photos/200/300?random=1",
          nameUser: "Leonardo Santos Franco",
          date: "Hace 4 dias",
          commentary:
            "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
          valoration: [true, true, true, true, true],
          responses: [
            {
              id: "2",
              pathAvatarImage: "https://picsum.photos/200/300?random=3",
              nameUser: "Leonardo Santos Franco",
              date: "Hace 4 dias",
              response:
                "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
            },
            {
              id: "3",
              pathAvatarImage: "https://picsum.photos/200/300?random=4",
              nameUser: "Leonardo Santos Franco",
              date: "Hace 4 dias",
              response:
                "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
            },
            {
              id: "4",
              pathAvatarImage: "https://picsum.photos/200/300?random=1",
              nameUser: "Leonardo Santos Franco",
              date: "Hace 4 dias",
              response:
                "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
            },
          ],
        },
        {
          id: "5",
          pathAvatarImage: "https://picsum.photos/200/300?random=1",
          nameUser: "Leonardo Santos Franco",
          date: "Hace 4 dias",
          commentary:
            "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
          valoration: [true, true, true, true, true],
          responses: [
            {
              id: "6",
              pathAvatarImage: "https://picsum.photos/200/300?random=3",
              nameUser: "Leonardo Santos Franco",
              date: "Hace 4 dias",
              response:
                "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
            },
          ],
        },
        {
          id: "7",
          pathAvatarImage: "https://picsum.photos/200/300?random=1",
          nameUser: "Leonardo Santos Franco",
          date: "Hace 4 dias",
          commentary:
            "Me encanta los platos a la carta como la langosta, camarones, y creo que el señor ingeniero mancera le falto implementarlo, ojo osino me vere obligado a desinstalar la app.",
          valoration: [true, true, true, true, true],
          responses: [],
        },
      ],
      tags: [
        {
          id: "1",
          ingrediente: "Brócoli",
          outline: false,
        },
        {
          id: "2",
          ingrediente: "Coliflor",
          outline: false,
        },
        {
          id: "3",
          ingrediente: "Pescado",
          outline: false,
        },
        {
          id: "4",
          ingrediente: "Pepino",
          outline: false,
        },
        {
          id: "5",
          ingrediente: "Alcachofa",
          outline: false,
        },
        {
          id: "6",
          ingrediente: "Queso",
          outline: false,
        },
      ],
      relatedRecipes: [
        {
          id: "1",
          title: "Recetas relacionadas",
          recipes: [
            {
              id: "1",
              pathRecipeImage: "https://picsum.photos/200/300?random=1",
              name: "Tacos Mexicanos de Carnitas Asadas",
              valoration: [true, true, true, true, false],
            },
            {
              id: "2",
              pathRecipeImage: "https://picsum.photos/200/300?random=2",
              name: "Tacos Mexicanos",
              valoration: [true, true, true, true, false],
            },
            {
              id: "3",
              pathRecipeImage: "https://picsum.photos/200/300?random=3",
              name: "Tacos Mexicanos de Carnitas Asadas",
              valoration: [true, true, true, true, false],
            },
            {
              id: "4",
              pathRecipeImage: "https://picsum.photos/200/300?random=4",
              name: "Tacos Mexicanos de Carnitas Asadas",
              valoration: [true, true, true, true, false],
            },
            {
              id: "5",
              pathRecipeImage: "https://picsum.photos/200/300?random=5",
              name: "Tacos Mexicanos de Carnitas Asadas",
              valoration: [true, true, true, true, false],
            },
            {
              id: "6",
              pathRecipeImage: "https://picsum.photos/200/300?random=6",
              name: "Tacos Mexicanos de Carnitas Asadas",
              valoration: [true, true, true, true, false],
            },
            {
              id: "7",
              pathRecipeImage: "https://picsum.photos/200/300?random=7",
              name: "Tacos Mexicanos de Carnitas Asadas",
              valoration: [true, true, true, true, false],
            },
          ],
        },
        {
          id: "2",
          title: "Recetas parecidas",
          recipes: [
            {
              id: "1",
              pathRecipeImage: "https://picsum.photos/200/300?random=1",
              name: "Tacos Mexicanos de Carnitas Asadas",
              valoration: [true, true, true, true, false],
            },
            {
              id: "2",
              pathRecipeImage: "https://picsum.photos/200/300?random=2",
              name: "Tacos Mexicanos",
              valoration: [true, true, true, true, false],
            },
            {
              id: "3",
              pathRecipeImage: "https://picsum.photos/200/300?random=3",
              name: "Tacos Mexicanos de Carnitas Asadas",
              valoration: [true, true, true, true, false],
            },
            {
              id: "4",
              pathRecipeImage: "https://picsum.photos/200/300?random=4",
              name: "Tacos Mexicanos de Carnitas Asadas",
              valoration: [true, true, true, true, false],
            },
            {
              id: "5",
              pathRecipeImage: "https://picsum.photos/200/300?random=5",
              name: "Tacos Mexicanos de Carnitas Asadas",
              valoration: [true, true, true, true, false],
            },
            {
              id: "6",
              pathRecipeImage: "https://picsum.photos/200/300?random=6",
              name: "Tacos Mexicanos de Carnitas Asadas",
              valoration: [true, true, true, true, false],
            },
            {
              id: "7",
              pathRecipeImage: "https://picsum.photos/200/300?random=7",
              name: "Tacos Mexicanos de Carnitas Asadas",
              valoration: [true, true, true, true, false],
            },
          ],
        },
      ],
    };
    return recipe;
  };
}
