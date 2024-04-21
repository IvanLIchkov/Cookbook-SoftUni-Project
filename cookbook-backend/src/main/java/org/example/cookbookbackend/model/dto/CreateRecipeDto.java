package org.example.cookbookbackend.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;
import java.util.UUID;

public class CreateRecipeDto {

    @JsonProperty("name")
    private String name;

    @JsonProperty("img")
    private String img;

    @JsonProperty("ingredients")
    private List<String> ingredients;

    @JsonProperty("steps")
    private List<String> steps;


}
