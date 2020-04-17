package com.fitme.service;

import com.fitme.model.Message;

public interface MessageService {

	

	boolean save(Message message, String category, String target);

	Object findByCategory(String category, String user1, String user2);

}
