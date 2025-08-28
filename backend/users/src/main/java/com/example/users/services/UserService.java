/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.users.services;

import com.example.users.models.User;
import java.util.List;



/**
 *
 * @author marco
 */

public interface UserService {
    

    public List<User> findAll();
    public User update(User user);
    public User findById(Long id);
    public User save(User user);
    public User delete(Long id);

}
