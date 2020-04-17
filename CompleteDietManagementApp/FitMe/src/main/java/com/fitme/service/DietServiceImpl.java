package com.fitme.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fitme.Repo.UserRepo;
import com.fitme.constant.Constant;
import com.fitme.model.User;

@Service
public class DietServiceImpl implements DietService {
	
	@Autowired
	PasswordEncoder encoder;

	@Autowired
	UserRepo userRepo;
	
	@Override
	public String addUser(User user) {
		
		if(this.userRepo.findByReferralCode(user.getFriendsReferralCode()).isPresent())
		{
			if(this.userRepo.findByEmail(user.getEmail()).isPresent()) {
				return Constant.STATUS_EMAIL_ALREADY_EXISTS;}
			String firstPart=user.getFullname().substring(0,(user.getFullname().length()>3?3:user.getFullname().length())).toUpperCase();
			int age = user.getAge();
			String referralCode = firstPart+age;
			while(this.userRepo.findByReferralCode(referralCode).isPresent()){
				System.out.println("inside find refferal method");
				referralCode = referralCode+(age++); 			
			}
			user.setReferralCode(referralCode);
			user.setUserType("Challenger");
			user.setPassword(encoder.encode(Constant.TEMP_CRED));
			user.setApproved(false);
			userRepo.save(user);
			return Constant.STATUS_SUCCESS;
		}
		else
			return Constant.STATUS_INVALID_REFERRAL_CODE;

	}

}
