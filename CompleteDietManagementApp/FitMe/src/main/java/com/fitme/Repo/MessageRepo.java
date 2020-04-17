package com.fitme.Repo;

import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.fitme.model.Message;

public interface MessageRepo extends CrudRepository<Message, Integer> {

	/**
	 * Find the set of all unique User IDs (unique as SET has been used) to whom
	 * messages have been sent from the User ID passed.
	 * 
	 * @param from
	 * @return Set of User IDs
	 */
	
	@Query("SELECT m.to.email FROM Message m WHERE m.from.email=:from")
	public Set<String> findAllUniqueUsersFrom(@Param("from") String from);
	
	/**
	 * Find the set of all unique User IDs (unique as SET has been used) who
	 * have sent messages to the User ID passed.
	 * 
	 * @param to
	 * @return Set of User IDs
	 */
	@Query("SELECT m.from.email FROM Message m WHERE m.to.email=:to")
	public Set<String> findAllUniqueUsersTo(@Param("to") String to);
	
	/**
	 * Find all unique messages that have been sent by user1 to user2
	 * @param user1
	 * @param user2
	 * @return Set of Messages
	 */
	@Query("SELECT m FROM Message m WHERE m.from.email=:user1 AND m.to.email=:user2")
	public Set<Message> findByToAndFrom(@Param("user1") String user1, @Param("user2") String user2);

}
