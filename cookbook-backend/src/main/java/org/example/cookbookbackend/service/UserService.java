package org.example.cookbookbackend.service;

import org.example.cookbookbackend.model.UserEntity;
import org.example.cookbookbackend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserEntity> getAllUsers() {
        return this.userRepository.findAll();
    }

    public void initUsers(){
       if (this.userRepository.count() == 0) {
           UserEntity userPetar = new UserEntity().setEmail("peter@abv.bg").setPassword("123456");
           UserEntity userGeorge = new UserEntity().setEmail("george@abv.bg").setPassword("123456");
           UserEntity userAdmin = new UserEntity().setEmail("admin@abv.bg").setPassword("admin");
           List<UserEntity> users = new ArrayList<>();
           users.add(userPetar);
           users.add(userGeorge);
           users.add(userAdmin);
           this.userRepository.saveAll(users);
       }

    }
}
