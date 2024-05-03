package org.example.cookbookbackend.model.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "recipes")
public class RecipeEntity extends BaseEntity{

    @Column(nullable = false)
    private String name;

    @Lob
    @Column(nullable = false, length = 1000)
    private String img;

    @Column(nullable = false)
    private String ingredients;

    @Column(nullable = false)
    private String steps;

    @ManyToOne
    private UserEntity owner;

    public String getImg() {
        return img;
    }

    public RecipeEntity setImg(String img) {
        this.img = img;
        return this;
    }

    public String getIngredients() {
        return ingredients;
    }

    public RecipeEntity setIngredients(String ingredients) {
        this.ingredients = ingredients;
        return this;
    }

    public String getName() {
        return name;
    }

    public RecipeEntity setName(String name) {
        this.name = name;
        return this;
    }

    public UserEntity getOwner() {
        return owner;
    }

    public RecipeEntity setOwner(UserEntity owner) {
        this.owner = owner;
        return this;
    }

    public String getSteps() {
        return steps;
    }

    public RecipeEntity setSteps(String steps) {
        this.steps = steps;
        return this;
    }
}
