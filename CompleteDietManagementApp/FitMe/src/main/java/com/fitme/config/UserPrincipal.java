package com.fitme.config;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fitme.model.Groups;
import com.fitme.model.User;

public class UserPrincipal implements UserDetails{

	@Autowired
	User user;
	
	public UserPrincipal(User user) {
		this.user = user;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		Collection<GrantedAuthority> ga = new ArrayList<GrantedAuthority>();
		if(user.getUserType().equals("Admin"))
			ga.add(new SimpleGrantedAuthority("Admin"));
		else if(user.getUserType().equals("Motivator"))
			ga.add(new SimpleGrantedAuthority("Motivator"));
		else
			ga.add(new SimpleGrantedAuthority("Challenger"));
		
		return ga;
			
	}

	public int getId() {
		return user.getUserId();
	}
	
	
	public String getUserType() {
		return user.getUserType();
	}
	
	public String getEmail() {
		return user.getEmail();
	}

	public Groups getGroupsId() {
		return user.getGroupsId();
	}
	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
