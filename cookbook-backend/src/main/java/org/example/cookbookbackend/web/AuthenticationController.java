package org.example.cookbookbackend.web;


import org.example.cookbookbackend.model.domain.UserEntity;
import org.example.cookbookbackend.model.dto.LoginDto;
import org.example.cookbookbackend.model.dto.UserRegisterDto;
import org.example.cookbookbackend.model.response.LoginResponse;
import org.example.cookbookbackend.model.response.RegisterResponseDto;
import org.example.cookbookbackend.service.AuthenticationService;
import org.example.cookbookbackend.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/users")
@RestController
public class AuthenticationController {

    private final JwtService jwtService;

    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService, JwtService jwtService) {
        this.authenticationService = authenticationService;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponseDto> registerUser(@RequestBody UserRegisterDto userRegisterDto) {
        UserEntity registeredUser = authenticationService.register(userRegisterDto);

        String jwtToken = jwtService.generateToken(registeredUser);

        RegisterResponseDto registeredResponse = new RegisterResponseDto()
                .setEmail(userRegisterDto.getEmail())
                .set_id(registeredUser.getId().toString())
                .setAccessToken(jwtToken);

        return ResponseEntity.ok(registeredResponse);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticateUser(@RequestBody LoginDto loginDto) {
        UserEntity authenticatedUser = authenticationService.login(loginDto);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginResponse loginResponse = new LoginResponse()
                .setAccessToken(jwtToken)
                .setExpiresIn(jwtService.getExpirationTime())
                .setEmail(loginDto.getEmail())
                .set_id(authenticatedUser.getId().toString());

        return ResponseEntity.ok(loginResponse);
    }
}
