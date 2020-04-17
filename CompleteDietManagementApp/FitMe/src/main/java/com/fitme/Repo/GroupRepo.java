package com.fitme.Repo;

import org.springframework.data.repository.CrudRepository;

import com.fitme.model.Groups;
import java.lang.String;

public interface GroupRepo extends CrudRepository<Groups, String> {
	
	

}
