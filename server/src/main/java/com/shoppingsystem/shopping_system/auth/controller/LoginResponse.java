package com.shoppingsystem.shopping_system.auth.controller;

public class LoginResponse {
    private String token;
    private String first_name;
    private String last_name;
    private String email;
    private String role;

    public LoginResponse(String token, String first_name, String last_name, String email, String role) {
        this.token = token;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.role = role;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}

