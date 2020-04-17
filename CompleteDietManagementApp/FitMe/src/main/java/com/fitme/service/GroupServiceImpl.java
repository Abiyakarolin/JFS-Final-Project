package com.fitme.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitme.Repo.GroupRepo;
import com.fitme.model.Groups;

@Service
public class GroupServiceImpl implements GroupService {
	
	@Autowired
	GroupRepo groupRepo;

	@Override
	public Optional<Groups> findGroupsById(String groupsId) {
		
		return this.groupRepo.findById(groupsId);
		
	}

}
