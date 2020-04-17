package com.fitme.model.keys;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fitme.model.User;

@Embeddable
public class DailyLogCompositeKey implements Serializable{
	
	
	private static final long serialVersionUID = -9075869591969486771L;
	
	@ManyToOne
	@JoinColumn(name="email", referencedColumnName = "email")
	private User user;
	
	//Time of Log
	private LocalDate date = LocalDate.now();

	public DailyLogCompositeKey() {
		
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	

}
