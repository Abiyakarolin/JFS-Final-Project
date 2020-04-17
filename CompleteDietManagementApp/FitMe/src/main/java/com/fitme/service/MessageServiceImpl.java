package com.fitme.service;

import java.util.Set;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitme.Repo.MessageRepo;
import com.fitme.constant.Constant;
import com.fitme.model.Message;
import com.fitme.model.User;

@Service
public class MessageServiceImpl implements MessageService {
	
	@Autowired
	UserService userService;
	
	@Autowired
	BatchService batchService;
	
	@Autowired
	GroupService groupService;
	
	@Autowired
	MessageRepo messageRepo;

	@Override
	public boolean save(Message message, String category, String target) {
		switch(category){
		case Constant.SEND_MESSAGE_TO_USER:
			User to = this.userService.getuserbyEmail(target);
			if(to != null){
				message.setFrom(this.userService.getuserbyEmail(message.getFrom().getEmail()));
				message.setTo(to);
				this.messageRepo.save(message);
				return true;
			}
			return false;
		case Constant.SEND_MESSAGE_TO_GROUP:
			if(this.groupService.findGroupsById(target).isPresent()){
				User[] users = this.userService.findByCategory(Constant.FIND_BY_GROUP, null, null, target);
				for(User user: users){
					Message groupMsg = new Message();
					groupMsg.setTo(user);
					groupMsg.setMessage(message.getMessage());
					groupMsg.setFrom(this.userService.getuserbyEmail(message.getFrom().getEmail()));
					this.messageRepo.save(groupMsg);
				}
				return true;
			}
			return false;
		case Constant.SEND_MESSAGE_TO_BATCH:
			if(this.batchService.findBatchById(target).isPresent()){
				User[] batchUsers = this.userService.findByCategory(Constant.FIND_BY_BATCH, null, target, null);
				for(User user: batchUsers){
					Message batchMsg = new Message();
					batchMsg.setTo(user);
					batchMsg.setMessage(message.getMessage());
					batchMsg.setFrom(this.userService.getuserbyEmail(message.getFrom().getEmail()));
					this.messageRepo.save(batchMsg);
				}
				return true;
			}
			return false;
	}
		return false;
	}

	@Override
	public Object findByCategory(String category, String user1, String user2){
		switch(category){
		case Constant.READ_USERS_FOR_MESSAGE:
			return findAllUniqueUsers(user1);
		case Constant.READ_CONVERSATION_MESSAGES:
			return findConversation(user1, user2);
		}
		return null;
	}

	private Object findConversation(String user1, String user2) {
		Set<Message> messages = this.messageRepo.findByToAndFrom(user1, user2);
		messages.addAll(this.messageRepo.findByToAndFrom(user2, user1));
		TreeSet<Message> sortedMessages = new TreeSet<Message>((message1, message2)->{
			return message1.getDateTime().compareTo(message2.getDateTime());
		});
		sortedMessages.addAll(messages);
		return sortedMessages;
	}

	private Set<String> findAllUniqueUsers(String user) {
		Set<String> users =  this.messageRepo.findAllUniqueUsersFrom(user);
		users.addAll(this.messageRepo.findAllUniqueUsersTo(user));
		return users;
	}
	
	
	

}
