package org.example.cookbookbackend.model.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import org.example.cookbookbackend.model.validation.UniqueUserEmail;

public class RegisterUserDto {

    @Email(message = "Please insert valid email!")
    @UniqueUserEmail(message = "User with this email already exists!")
    @NotEmpty(message = "Email is required!")
    private String email;

    @NotEmpty(message = "Password must not be empty!")
    @Size(min = 3, message = "Password size must be at lest 3 symbols!")
    private String password;

    @NotEmpty(message = "Password must not be empty!")
    @Size(min = 3, message = "Password size must be at lest 3 symbols!")
    private String confirmPassword;

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public RegisterUserDto setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public RegisterUserDto setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public RegisterUserDto setPassword(String password) {
        this.password = password;
        return this;
    }
}
