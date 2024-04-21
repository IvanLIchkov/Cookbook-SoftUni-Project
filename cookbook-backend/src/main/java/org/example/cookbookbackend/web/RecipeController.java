package org.example.cookbookbackend.web;

import com.fasterxml.jackson.core.JsonParser;
import com.nimbusds.jose.shaded.gson.Gson;
import org.example.cookbookbackend.model.dto.CreateRecipeDto;
import org.example.cookbookbackend.model.dto.RecipeDto;
import org.example.cookbookbackend.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.UUID;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private final RecipeService recipeService;

    @Autowired
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

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<CreateRecipeDto> createRecipe(@RequestBody CreateRecipeDto createRecipeDto,
                                                  UriComponentsBuilder uriBuilder) {


        return ResponseEntity.status(HttpStatus.CREATED).body(createRecipeDto);
    }
}
