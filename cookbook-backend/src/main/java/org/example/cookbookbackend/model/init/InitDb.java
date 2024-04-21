package org.example.cookbookbackend.model.init;

import org.example.cookbookbackend.service.RecipeService;
import org.example.cookbookbackend.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitDb implements CommandLineRunner {

    private UserService userService;
    private RecipeService recipeService;

    private InitDb(UserService userService, RecipeService recipeService) {
        this.userService = userService;
        this.recipeService = recipeService;
    }

    @Override
    public void run(String... args) throws Exception {
        userService.initUsers();
        recipeService.initRecipeDb();
    }
}
