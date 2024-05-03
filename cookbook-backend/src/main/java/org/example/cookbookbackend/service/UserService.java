package org.example.cookbookbackend.service;

import org.example.cookbookbackend.model.domain.UserEntity;
import org.example.cookbookbackend.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<UserEntity> getAllUsers() {
        return this.userRepository.findAll();
    }

    public void initUsers(){
       if (this.userRepository.count() == 0) {
           UserEntity userPetar = new UserEntity().setEmail("peter@abv.bg").setPassword(passwordEncoder.encode("123456"));
           UserEntity userGeorge = new UserEntity().setEmail("george@abv.bg").setPassword(passwordEncoder.encode("123456"));
           UserEntity userAdmin = new UserEntity().setEmail("admin@abv.bg").setPassword(passwordEncoder.encode("admin"));
           List<UserEntity> users = new ArrayList<>();
           users.add(userPetar);
           users.add(userGeorge);
           users.add(userAdmin);
           this.userRepository.saveAll(users);
       }

    }
}
