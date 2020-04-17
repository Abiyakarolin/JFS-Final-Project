package com.fitme.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fitme.constant.Constant;
import com.fitme.model.Message;
import com.fitme.model.response.Response;
import com.fitme.service.MessageService;

@CrossOrigin()
@RestController
@RequestMapping("/fitme")

public class MessageController {
	
	
	@Autowired
	MessageService messageService;
	
	/**
	 * Save message based on category and target
	 * 
	 * @param message
	 * @param category
	 * @param target
	 * @return Response with status= "SUCCESS" if save is successful else Response with status = "Invalid Recipient!!!"
	 */
	@RequestMapping(value="/messages", method=RequestMethod.POST)
	public Response save(@RequestBody Message message, @RequestParam("category") String category, @RequestParam("target") String target){
		boolean status = this.messageService.save(message, category, target);
		return new Response(status?Constant.STATUS_SUCCESS:Constant.STATUS_INVALID_RECIPIENT);
	}
	
	/**
	 * Find messages based on category
	 * 
	 * @param category
	 * @param user1
	 * @param user2
	 * @return unique users if category = user, unique messages if category=conversation
	 */
	@RequestMapping(value="/messages", method=RequestMethod.GET)
	public Object findByCategory(@RequestParam("category") String category, @RequestParam("user1") String user1, @RequestParam(value="user2", required=false) String user2){
		return this.messageService.findByCategory(category, user1, user2);
	}
	

}
