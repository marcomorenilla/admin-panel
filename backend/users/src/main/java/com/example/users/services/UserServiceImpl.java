/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.users.services;

import com.example.users.models.User;
import com.example.users.repositories.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author marco
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository repository;

    @Override
    public List<User> findAll() {
        return (List<User>) repository.findAll();
    }

    @Override
    public User update(User user) {
        User updatedUser = null;
        System.out.println("Getting user id: "+user.getId());
        Optional<User> opUser = repository.findById(user.getId());

        if (opUser.isPresent()) {
            updatedUser = opUser.orElseThrow();
            updatedUser.setEmail(user.getEmail());
            updatedUser.setUserName(user.getUserName());
            repository.save(updatedUser);
        }

        return updatedUser;

    }

    @Override
    public User findById(Long id) {
        User findedUser = null;
        Optional<User> opUser = repository.findById(id);

        if (opUser.isPresent()) {
            findedUser = opUser.orElseThrow();
        }

        return findedUser;
    }

    @Override
    public User save(User user) {
        return repository.save(user);
    }

    @Override
    public User delete(Long id) {
        User userDeleted = null;
        Optional <User> opUser = repository.findById(id);
        if(opUser.isPresent()){
            userDeleted = opUser.orElseThrow();
            repository.delete(userDeleted);
        }
        
        opUser= repository.findById(id);
        
        if(opUser.isEmpty()){
            userDeleted = null;
        }
        return userDeleted; 
    }

}
