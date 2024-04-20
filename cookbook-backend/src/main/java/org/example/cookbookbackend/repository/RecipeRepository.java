package org.example.cookbookbackend.repository;

import org.example.cookbookbackend.model.RecipeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface RecipeRepository extends JpaRepository<RecipeEntity, UUID> {
}
