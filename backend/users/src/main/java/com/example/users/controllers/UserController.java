/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.users.controllers;

import com.example.users.models.User;
import com.example.users.services.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author marco
 */
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService service;

    @GetMapping
    public List<User> findAll() {
        return service.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        User user = service.findById(id);
        if(user!=null){
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.notFound().build();
    }
    
    @PutMapping
    public ResponseEntity<?> update(@RequestBody User user){
        User userUpdated = service.update(user);
        if(userUpdated!=null){
            return ResponseEntity.ok(userUpdated);
        }
        return ResponseEntity.notFound().build();
    }
    
    @PostMapping
    public ResponseEntity<?> save(@RequestBody User user){
        User userSaved = service.save(user);
        if(userSaved!=null){
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.internalServerError().body("SOmething went wrong while saving the user");
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        User userDeleted = service.delete(id);
        if(userDeleted!=null){
            return ResponseEntity.internalServerError().body("User haven't been deleted, please contact an administrator");
        }
        
        return ResponseEntity.ok("User succesfully deleted!");
    }
    
    
}
