package com.fitme.payload;

public class JwtResponse {
	
	private String token;
	private String type = "Bearer";
	private int id;
	private String username;
	private String email;
	private String role;
	private String batchStatus;
	
	public JwtResponse(String token, int i, String username, String email, String role, String batchExpiredStatus) {
		
		this.token = token;
		this.id = i;
		this.username = username;
		this.email = email;
		this.role = role;
		this.batchStatus = batchExpiredStatus;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getBatchStatus() {
		return batchStatus;
	}

	public void setBatchStatus(String batchStatus) {
		this.batchStatus = batchStatus;
	}

	
	
	
}
