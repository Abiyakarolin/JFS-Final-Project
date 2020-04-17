package com.fitme.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Groups {
	
	@Id
	private String groupsId;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Batch batch;
	
	@OneToMany(mappedBy = "groupsId", fetch = FetchType.EAGER)
	private List<User> users;

	public String getGroupsId() {
		return groupsId;
	}

	public void setGroupsId(String groupsId) {
		this.groupsId = groupsId;
	}

	public Groups(String groupsId) {
		super();
		this.groupsId = groupsId;
	}

	public Batch getBatch() {
		return batch;
	}

	public void setBatch(Batch batch) {
		this.batch = batch;
	}

	

	public Groups() {
		
	}

	public Groups(String groupsId, Batch batch, List<User> users) {
		super();
		this.groupsId = groupsId;
		this.batch = batch;
		this.users = users;
	}

	@JsonIgnore
	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	
	
	
	

}
