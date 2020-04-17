package com.fitme.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.fitme.constant.Constant;
import com.fitme.model.User;


@Service
public class SmtpMailSender implements MailService{
      private JavaMailSender javaMailSender;
      
      @Autowired
      public SmtpMailSender(JavaMailSender javaMailSender) {
          this.javaMailSender = javaMailSender;
           
      }
     
      public void sendApproveMail(User usermodel) {
    	  
    	  String subject = "Your FitMe Registration";
    	  String text = "Congratulations "+usermodel.getFullname()+"!!! Your registration request has been approved. Welcome to FitME!!!\n"
    	  		+ "Your Logon ID is: "+usermodel.getEmail()
    	  		+"\nYour Password is: "+Constant.TEMP_CRED
    	  		+"\nWe request you to change your password after first login."
    			+"\nAlso please note your unique referral code as:"+ usermodel.getReferralCode()+". "
    			+"You can use this code to refer your friends for the program.";
           
           sendMail(usermodel,subject,text);         
           
         
          }
      
     
	@Override
	public void sendRejectedMail(User user, String reason) {
		String subject ="Your FitMe Registration";
		String text="Sorry "+user.getFullname()+"!!! Your registration has not been approved this time as :"+reason+".";
		sendMail(user,subject,text);
		
	}
	
	
	 private void sendMail(User user, String subject, String message) throws MailException
     {
   	  
   	  SimpleMailMessage mail = new SimpleMailMessage();
   	  mail.setTo(user.getEmail());
         mail.setFrom("xyz@gmail.com");
         mail.setSubject(subject);
         mail.setText(message);
         try{
 			javaMailSender.send(mail);
 		}catch(Exception e){
 			e.printStackTrace();
 		}
     }

	@Override
	public void sendUserForgotPasswordMail(User user) {
		String subject = "Your FitMe Password";
		String text="Hi "+user.getFullname()+"! Your New Password is :"+Constant.TEMP_CRED+"! Please login and change your password as soon as possible!";
		sendMail(user,subject,text);
		
	}

}
