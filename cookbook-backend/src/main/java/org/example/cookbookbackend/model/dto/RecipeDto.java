package org.example.cookbookbackend.model.dto;

import java.util.List;
import java.util.UUID;

public class RecipeDto {

    private UUID id;
    private String name;
    private String img;
    private List<String> ingredients;
    private List<String> steps;
    private String ownerId;

    public UUID getId() {
        return id;
    }

    public RecipeDto setId(UUID id) {
        this.id = id;
        return this;
    }

    public String getImg() {
        return img;
    }

    public RecipeDto setImg(String img) {
        this.img = img;
        return this;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public RecipeDto setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
        return this;
    }

    public String getName() {
        return name;
    }

    public RecipeDto setName(String name) {
        this.name = name;
        return this;
    }

    public String getOwnerId() {
        return ownerId;
    }

    public RecipeDto setOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }

    public List<String> getSteps() {
        return steps;
    }

    public RecipeDto setSteps(List<String> steps) {
        this.steps = steps;
        return this;
    }
}
