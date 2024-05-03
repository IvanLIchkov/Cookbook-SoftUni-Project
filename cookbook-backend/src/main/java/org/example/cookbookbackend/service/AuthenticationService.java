package org.example.cookbookbackend.service;

import org.example.cookbookbackend.model.domain.UserEntity;
import org.example.cookbookbackend.model.dto.LoginDto;
import org.example.cookbookbackend.model.dto.UserRegisterDto;
import org.example.cookbookbackend.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    public AuthenticationService(AuthenticationManager authenticationManager, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserEntity register(UserRegisterDto input) {
        return userRepository.save(new UserEntity()
                .setEmail(input.getEmail())
                .setPassword(passwordEncoder.encode(input.getPassword())));
    }

    public UserEntity login(LoginDto loginDto) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDto.getEmail(), loginDto.getPassword()
                ));

        System.out.println(userRepository.findByEmail(loginDto.getEmail()));
        return userRepository.findByEmail(loginDto.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
