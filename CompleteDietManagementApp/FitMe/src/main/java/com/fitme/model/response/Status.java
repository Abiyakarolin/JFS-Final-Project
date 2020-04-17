package com.fitme.model.response;

public class Status {
	
	private String userEmail;
	private String status;

	

	public Status(String userEmail, String status) {
		this.userEmail = userEmail;
		this.status = status;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	

}
