package com.shoppingsystem.shopping_system.cart.controller;

import com.shoppingsystem.shopping_system.cart.dto.CartDTO;
import com.shoppingsystem.shopping_system.cart.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
public class CartController {

    @Autowired
    private CartService cartService;


    @GetMapping("/cart/{userId}")
    public CartDTO getCart(@PathVariable Long userId) {
        return cartService.findByUserId(userId);
    }

    @GetMapping("/cart/{userId}/{productId}")
    public Boolean isProductInUserCart(@PathVariable Long userId, @PathVariable Long productId) {
        return cartService.isProductInUserCart(userId, productId);
    }
}
