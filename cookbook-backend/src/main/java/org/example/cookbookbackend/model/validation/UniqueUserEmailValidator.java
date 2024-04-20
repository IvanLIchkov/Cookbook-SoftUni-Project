package org.example.cookbookbackend.model.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.example.cookbookbackend.repository.UserRepository;

public class UniqueUserEmailValidator implements ConstraintValidator<UniqueUserEmail, String> {

    private UserRepository userRepository;

    public UniqueUserEmailValidator(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        return this.userRepository.findByEmail(s).isEmpty();
    }
}
