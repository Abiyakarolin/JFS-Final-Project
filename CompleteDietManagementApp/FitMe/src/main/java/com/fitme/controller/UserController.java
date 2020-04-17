package com.fitme.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fitme.constant.Constant;
import com.fitme.model.User;
import com.fitme.model.response.Response;
import com.fitme.service.UserService;

@CrossOrigin()
@RestController
@RequestMapping("/fitme")
public class UserController {
	
	@Autowired
	UserService userService;
	
	
	
	/* Find user by Email */
	
	@GetMapping(value = "/getUser/{email}",produces = "application/json")
	public User getUserbyEmail(@PathVariable("email") String email) {
		return this.userService.getuserbyEmail(email);
	}
	
	/* Find user by Id */
	@GetMapping(value = "/{userId}",produces = "application/json")
	public User getUserbyId(@PathVariable("userId") int userId){
		return this.userService.getUserbyId(userId);
	}
	
	/**
	 * Finds Users by Category
	 * 
	 * @param category
	 * @param fullname
	 * @param batch
	 * @param group
	 * @return if category = "unregistered", returns Array of Users whose registrations have not been accepted, if category = "registered", returns Array of Users whose registrations have been accepted, if category = "nogroup", returns Array of Users who do not belong to any group, if category = "fullname", returns Array of Users whose fullname matches, if category = "group", returns Array of Users who belong to the group, if category = "batch", returns Array of Users who belong to the batch, else returns null.
	 */
	@RequestMapping(value="/users", method=RequestMethod.GET)
	public User[] findByCategory(@RequestParam("category") String category, 
			@RequestParam(value="fullname", required=false) String fullname,
			@RequestParam(value="batch", required=false) String batch,
			@RequestParam(value="group", required=false) String group
			){
		return userService.findByCategory(category, fullname, batch, group
				);
	}
	
	
	/*********Update**********/
	
	/* Change Password */
	
	@RequestMapping(value="/{email}/changePassword", method = RequestMethod.PUT)
	public Response changePassword(@PathVariable("email") String email,@RequestParam("oldPassword") String oldPassword,@RequestParam("newPassword") String newPassword) {
		String status = userService.changePassword(email,oldPassword,newPassword);
		return new Response(status);
	}
	
	
	/* sign Up Review */
	@RequestMapping(value="/{userId}",method=RequestMethod.PUT)
	public Response update(@RequestBody User user) {
		return new Response(userService.update(user));
	}
	
	
	/***************DELETE********************/
	@RequestMapping(value="/{userId}",method=RequestMethod.DELETE)
	public Response delete(@PathVariable("userId")int userid,@RequestParam(value="reason", required=false)String reason) {
		userService.delete(userid, reason);
		return new Response(Constant.STATUS_SUCCESS);
	}
	
	/* sign Out */
	
	@GetMapping(value="/signOut")
	public Response signOut()
	{		
		return new Response(Constant.STATUS_SUCCESS);
	}
	
	/**
	 * User has forgotton password. Sends a mail with a temporary password
	 * 
	 */
	@RequestMapping(value="user/forgotPassword", method=RequestMethod.GET)
	public Response forgotPassword(@RequestParam("email") String email){
		String status= this.userService.forgotPassword(email);
		return new Response(status);
	}
	
	
}
