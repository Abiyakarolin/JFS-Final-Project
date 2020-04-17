package com.fitme.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.fitme.constant.Constant;
import com.fitme.model.Batch;
import com.fitme.model.Groups;
import com.fitme.model.User;

public interface UserRepo extends CrudRepository<User, Integer> {
	
	
	public Optional<User> findByEmail(String email);
	
	public Optional<User> findByReferralCode(String referralCode);
	
	public User[] findByIsApproved(boolean isApproved);
	
	public User[] findByFullname(String fullname);

	@Query("SELECT u FROM User u WHERE u.userType='"+Constant.ROLE_MOTIVATOR+"' AND u.groupsId IS NULL "
			+ "OR u.groupsId IS NULL AND u.userType ='"+Constant.ROLE_CHALLENGER+"' AND isApproved=true")
	public User[] findUsersToAssignBatch();

	@Query("SELECT u FROM User u WHERE u.groupsId.batch=:batch")
	public User[] findByBatch(@Param("batch") Batch batch);

	public User[] findByGroupsId(Groups group);

	@Query("SELECT COUNT(u) FROM User u WHERE u.groupsId=:groups AND u.userType='"+Constant.ROLE_MOTIVATOR+"'")
	public int findMotivatorCountByGroup(@Param("groups")Groups groups);
	
	

}
