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
    console.log(id);
    const listRecipes = [
      {
        id: "1",
        pathRecipeImage:
          "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214916/RFB-2312-2-tacos.jpg",
        pathAvatarImage: "https://picsum.photos/200/300?random=2",
        nameRecipe: "Tacos Mexicanos de Carnitas",
        valoration: [true, true, true, true, false],
        time: 20,
        ingredientsNumber: 6,
        nameUser: "Jonathan Mancera Tabarez Jimenez",
        likes: 600,
      },
      {
        id: "2",
        pathRecipeImage: "https://picsum.photos/200/300?random=3",
        pathAvatarImage: "https://picsum.photos/200/300?random=4",
        nameRecipe: "Tacos Mexicanos de Carnitas",
        valoration: [true, true, true, true, false],
        time: 20,
        ingredientsNumber: 6,
        nameUser: "Jonathan Mancera",
        likes: 60,
      },
      {
        id: "3",
        pathRecipeImage: "https://picsum.photos/200/300?random=5",
        pathAvatarImage: "https://picsum.photos/200/300?random=6",
        nameRecipe: "Tacos Mexicanos de Carnitas",
        valoration: [true, true, true, true, false],
        time: 20,
        ingredientsNumber: 6,
        nameUser: "Jonathan Mancera",
        likes: 60,
      },
      {
        id: "4",
        pathRecipeImage: "https://picsum.photos/200/300?random=7",
        pathAvatarImage: "https://picsum.photos/200/300?random=8",
        nameRecipe: "Tacos Mexicanos de Carnitas",
        valoration: [true, true, true, true, false],
        time: 20,
        ingredientsNumber: 6,
        nameUser: "Jonathan Mancera",
        likes: 60,
      },
    ];
    return listRecipes;
  };
  public static getRecipe = async (req: Request) => {
    const id = req.params.id;
    console.log(id);
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
