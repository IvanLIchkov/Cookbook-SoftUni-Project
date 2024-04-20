package org.example.cookbookbackend.web;

import org.example.cookbookbackend.model.dto.RecipeDto;
import org.example.cookbookbackend.service.RecipeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    public ResponseEntity<List<RecipeDto>> getAllRecipes() {
        return ResponseEntity.ok(recipeService.getAllRecipes());
    }

    @GetMapping("/{uuid}")
    public ResponseEntity<RecipeDto> getRecipeById(@PathVariable String uuid) {
        RecipeDto recipeDto = recipeService.getRecipeById(UUID.fromString(uuid));

        return ResponseEntity.ok(recipeDto);
    }
}
