package com.fitme.service;

import com.fitme.model.User;

public interface MailService {
	
	public void sendApproveMail(User user);

	public void sendRejectedMail(User user, String reason);

	public void sendUserForgotPasswordMail(User user);

}
