package com.fitme.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.fitme.Repo.UserRepo;
import com.fitme.config.UserPrincipal;
import com.fitme.model.User;

@Service
public class LoginServiceImpl implements UserDetailsService{

	@Autowired
	UserRepo userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> optionalUser=userRepo.findByEmail(username);
		if(!optionalUser.isPresent())
		{
			throw new UsernameNotFoundException("User not Found");
		}
			User user = optionalUser.get();

			return new UserPrincipal(user);
	}

}
