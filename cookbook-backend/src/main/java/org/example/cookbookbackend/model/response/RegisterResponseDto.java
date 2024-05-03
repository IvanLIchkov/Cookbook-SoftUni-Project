package org.example.cookbookbackend.model.response;

public class RegisterResponseDto {

    private String email;

    private String _id;

    private String accessToken;

    public String get_id() {
        return _id;
    }

    public RegisterResponseDto set_id(String _id) {
        this._id = _id;
        return this;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public RegisterResponseDto setAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public RegisterResponseDto setEmail(String email) {
        this.email = email;
        return this;
    }
}
