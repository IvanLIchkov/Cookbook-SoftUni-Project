package org.example.cookbookbackend.service;

import org.example.cookbookbackend.model.domain.RecipeEntity;
import org.example.cookbookbackend.model.domain.UserEntity;
import org.example.cookbookbackend.model.dto.RecipeDto;
import org.example.cookbookbackend.repository.RecipeRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RecipeService {

    private RecipeRepository recipeRepository;
    private UserService userService;

    private RecipeService(RecipeRepository recipeRepository, UserService userService) {
        this.recipeRepository = recipeRepository;
        this.userService = userService;
    }

    public List<RecipeDto> getAllRecipes() {
         return this.recipeRepository.findAll()
                 .stream()
                 .map(RecipeService::mapToRecipeDto)
                 .toList();
    }

    public RecipeDto getRecipeById(UUID id) {
        RecipeEntity test = this.recipeRepository.findById(id).orElse(null);
        System.out.println();
        return this.recipeRepository.findById(id)
                .map(RecipeService::mapToRecipeDto)
                .orElse(null);
    }
    private static RecipeDto mapToRecipeDto(RecipeEntity recipeEntity) {
        List<String> ingredients = Arrays.stream(recipeEntity.getIngredients().split("\n")).toList();
        List<String> steps = Arrays.stream(recipeEntity.getSteps().split("\n")).toList();

        return new RecipeDto()
                .setId(recipeEntity.getId())
                .setName(recipeEntity.getName())
                .setImg(recipeEntity.getImg())
                .setIngredients(ingredients)
                .setSteps(steps)
                .setOwnerId(recipeEntity.getOwner().getId().toString());
    }

    public void initRecipeDb(){
        if (this.recipeRepository.count() == 0) {
            List<UserEntity> defaultUsers = userService.getAllUsers();
            RecipeEntity defaultRecipe1 = new RecipeEntity()
                    .setName("Easy Lasagna")
                    .setImg("https://www.eatingwell.com/thmb/g2-SPKemdPybZTIGBKowO3DNOrE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1965x1419:1967x1421)/Veggie-Lasagna-beauty-557-5cb561c36d4a409dbd587417b8c6682d.jpg")
                    .setIngredients("1 tbsp Ingredient 1\n" +
                    "2 cups Ingredient 2\n" +
                    "500 g  Ingredient 3\n" +
                    "25 g Ingredient 4")
                    .setSteps("Prepare ingredients\n" +
                            "Mix ingredients\n" +
                            "Cook until done")
                    .setOwner(defaultUsers.get(new Random().nextInt(defaultUsers.size())));


            RecipeEntity defaultRecipe2 = new RecipeEntity()
                    .setName("Grilled Duck Fillet")
                    .setImg("https://images.squarespace-cdn.com/content/v1/5755ddad45bf2169386a1ae0/1624306372215-UT8LN0Q27IW8MBWRTH39/ke17ZwdGBToddI8pDm48kF9aEDQaTpZHfWEO2zppK7Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UX7HUUwySjcPdRBGehEKrDf5zebfiuf9u6oCHzr2lsfYZD7bBzAwq_2wCJyqgJebgg/oven-roasted-moulard-duck-breast.jpg?format=1000w")
                    .setIngredients("500 g  Ingredient 1\n"+
                            "3 tbsp Ingredient 2\n"+
                            "2 cups Ingredient 3")
                    .setSteps("Prepare ingredients\n" +
                            "Mix ingredients\n" +
                            "Cook until done")
                    .setOwner(defaultUsers.get(new Random().nextInt(defaultUsers.size())));


            RecipeEntity defaultRecipe3 = new RecipeEntity()
                    .setName("Roast Trout")
                    .setImg("https://www.seriouseats.com/thmb/3v9ZOwwv4_lWhwaUzf64-WzyZrw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__08__20120828WholeRoastTrout-739a77e0a94148599790ca884a2a2c52.jpg")
                    .setIngredients("500 g  Ingredient 1\n" +
                            "3 tbsp Ingredient 2\n" +
                            "2 cups Ingredient 3")
                    .setSteps("Prepare ingredients\n" +
                            "Mix ingredients\n" +
                            "Cook until done")
                    .setOwner(defaultUsers.get(new Random().nextInt(defaultUsers.size())));

            this.recipeRepository.saveAll(new ArrayList<>(Arrays.asList(defaultRecipe1,defaultRecipe2, defaultRecipe3)));
        }
    }
}
