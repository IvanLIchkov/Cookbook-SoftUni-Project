package org.example.cookbookbackend.model.response;

public class LoginResponse {

    private String email;
    private String _id;
    private String accessToken;

    private long expiresIn;


    public String get_id() {
        return _id;
    }

    public LoginResponse set_id(String _id) {
        this._id = _id;
        return this;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public LoginResponse setAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public LoginResponse setEmail(String email) {
        this.email = email;
        return this;
    }

    public long getExpiresIn() {
        return expiresIn;
    }

    public LoginResponse setExpiresIn(long expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
}
