package com.fitme.service;


import com.fitme.model.User;

public interface UserService {
	
	
	public User getuserbyEmail(String email);

	public String changePassword(String email, String oldPassword, String newPassword);

	public User[] findByCategory(String category, String fullname, String batch, String group);

	public String update(User user);

	public void delete(int userid, String reason);

	public User getUserbyId(int userId);

	public String forgotPassword(String email);

}