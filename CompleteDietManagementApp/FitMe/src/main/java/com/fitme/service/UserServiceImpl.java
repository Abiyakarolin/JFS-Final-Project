package com.fitme.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fitme.Repo.UserRepo;
import com.fitme.constant.Constant;
import com.fitme.model.Batch;
import com.fitme.model.Groups;
import com.fitme.model.User;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepo userRepo;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	MailService mailService;
	
	/******************************READ OPERATIONS******/
	
	
	@Override
	public User[] findByCategory(String category, String fullname, String batch, String group) {
		switch(category) {
		case Constant.FIND_USERS_BY_NOT_APPROVED:
			return findAllnotApprovedUsers();
		case Constant.FIND_USERS_BY_APPROVED:
			return findAllApprovedUsers();
		case Constant.FIND_USERS_BY_NO_GROUP:
			return findToAssignBatch();
		case Constant.FIND_USERS_BY_FULL_NAME:
			return findAllByFullname(fullname);
		case Constant.FIND_USERS_BY_BATCH:
			return findAllByBatch(batch);
		case Constant.FIND_USERS_BY_GROUP:
			return findAllByUser(group);
		}
		return null;
	}
	
	
	private User[] findAllByUser(String groupId) {
		Groups group = new Groups();
		group.setGroupsId(groupId);
		return userRepo.findByGroupsId(group);
	}


	private User[] findAllByBatch(String batchId) {
		Batch batch = new Batch();
		batch.setBatchId(batchId);
		return userRepo.findByBatch(batch);
	}


	private User[] findAllByFullname(String fullname) {
		return userRepo.findByFullname(fullname);
	}


	private User[] findToAssignBatch() {
		User[] users = this.userRepo.findUsersToAssignBatch();
		return users;
	}


	private User[] findAllApprovedUsers() {
		return userRepo.findByIsApproved(true);
	}


	private User[] findAllnotApprovedUsers() {
		return userRepo.findByIsApproved(false);
	}


	@Override
	public User getuserbyEmail(String email) {
		Optional<User> user = userRepo.findByEmail(email);
		if(user.isPresent()) {
			return user.get();
		}
		return null;
	}
	
	@Override
	public User getUserbyId(int userId) {
		
		Optional<User> user = userRepo.findById(userId);
		if(user.isPresent()) {
			return user.get();
		}
		
		return null;
	}
	

	/***************Update Operations*****************/
	
	/******************Change Password****************/
	@Override
	public String changePassword(String email, String oldPassword, String newPassword) {
		
		Optional<User> optionalUser = userRepo.findByEmail(email);
	/*
		 * String status = " "; String encodedOldpassword = encoder.encode(oldPassword);
		 * String currentPassword = optionalUser.getPassword();
		 * System.out.println(currentPassword);
		 * System.out.println("encodeold"+encodedOldpassword);
		 * if(!currentPassword.equals(encodedOldpassword)) { status =
		 * "Wrong Old Password"; return status; }
		 */
		if(optionalUser.isPresent())
		{
			User user = optionalUser.get();
			String encodedNewPassword = encoder.encode(newPassword);
			user.setPassword(encodedNewPassword);
			userRepo.save(user);
			return Constant.STATUS_SUCCESS;
		}
		else
			return Constant.STATUS_USER_NOT_FOUND;
	}


	@Override
	public String update(User user) {
		
		Optional<User> optionalUser = this.userRepo.findByEmail(user.getEmail());
		if(optionalUser.isPresent()) {
			if(user.getUserType().equals(Constant.ROLE_MOTIVATOR)) {
				
				int count = userRepo.findMotivatorCountByGroup(user.getGroupsId());
				if(count>=5) {
					return Constant.STATUS_MOTIVATOR_COUNT_EXCEEDED;
				}
				
			}
			
			User dbUser = optionalUser.get();
			boolean wasApproved = dbUser.isApproved();
			user.setApproved(true);
			this.userRepo.save(user);
			if(!wasApproved && dbUser.isApproved())
			{
				mailService.sendApproveMail(user);
			}		
			return Constant.STATUS_SUCCESS;
			
		}
		
		return Constant.STATUS_USER_NOT_FOUND;
	}


	/*******************DELETE OPERATIONS***************************/
	
	@Override
	public void delete(int userid, String reason) {
		
		User user = this.userRepo.findById(userid).get();
		this.userRepo.deleteById(userid);
		if(reason!=null && reason.isEmpty()) {
			this.mailService.sendRejectedMail(user, reason);
		}
		
	}


	@Override
	public String forgotPassword(String email) {
		Optional<User> optionalUser = this.userRepo.findByEmail(email);
		if(optionalUser.isPresent()) {
			User user = optionalUser.get();
			user.setPassword(encoder.encode(Constant.TEMP_CRED));
			userRepo.save(user);
			this.mailService.sendUserForgotPasswordMail(user);
			return Constant.STATUS_SUCCESS;
			
		}
	
		return Constant.STATUS_USER_NOT_FOUND;
	}


	

	

}
