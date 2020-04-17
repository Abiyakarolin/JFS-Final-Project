package com.fitme.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitme.Repo.DailyLogRepo;
import com.fitme.constant.Constant;
import com.fitme.model.DailyLog;
import com.fitme.model.User;
import com.fitme.model.keys.DailyLogCompositeKey;
import com.fitme.model.response.Status;

@Service
public class DailyLogServiceImpl implements DailyLogService {
	
	
	@Autowired
	DailyLogRepo dailyLogRepo;
	
	@Autowired
	UserService userService;
	
/****************************CREATE OPERATION********************************/
	
	/**
	 * Save Daily Log
	 * 
	 * @param dailyLog
	 * @return true
	 */

	@Override
	public boolean save(DailyLog dailyLog) {
		dailyLog.getDailyLogKey().setUser(userService.getUserbyId(dailyLog.getDailyLogKey().getUser().getUserId())); 
		this.dailyLogRepo.save(dailyLog);
		return true;
	}

	
	/**
	 * Find Based on Category passed.
	 *  
	 * @param category
	 * @param id
	 * @return daily Log of the user for today, if category = user,
	 * daily Log Fill Status of all users of the batch for today, if category = batch,
	 * daily Log Fill Status of all users of the group for today, if category = group
	 */
	@Override
	public Object findByCategory(String category, String id) {
		switch(category) {
		case Constant.FIND_BY_BATCH:
			return findDailyLogStatusByBatch(id);
		case Constant.FIND_BY_GROUP:
			return findDailyLogStatusByGroup(id);
		case Constant.FIND_BY_USER:
			return findByUserId(id);
	}
	return null;
	}

	private DailyLog findByUserId(String userEmail) {
		DailyLogCompositeKey key = new DailyLogCompositeKey();
		User user = userService.getuserbyEmail(userEmail);
		key.setUser(user);
		key.setDate(LocalDate.now());
		Optional<DailyLog> dailyLog = this.dailyLogRepo.findById(key);
		if(dailyLog.isPresent()) {
			return dailyLog.get();
		}
		return null;
	}

	
	/**
	 * Find today's status of daily logs of all users in the group.
	 * 
	 * If user has filled daily log, the status should be "FILLED".
	 * If user has not filled daily log, the status should be "NOT YET FILLED".
	 * 
	 * @param groupid
	 * @return List of Status
	 */

	private List<Status> findDailyLogStatusByGroup(String groupsId) {
		//fetch all users of a group from UserRepository
				User[] users = this.userService.findByCategory(Constant.FIND_BY_GROUP, null, null, groupsId);
				Set<String> filledLogUsers = this.dailyLogRepo.findDailyLogUserListByGroupAndDate(groupsId, LocalDate.now());
				return fillDailyLogStatus(users, filledLogUsers);
	}

	/**
	 * Internal Common Utility API to fill in the status of all Users passed
	 * 
	 * @param allUsers
	 * @param filledLogUsers
	 * @return List of Status
	 */
	private List<Status> fillDailyLogStatus(User[] allUsers, Set<String> filledLogUsers) {
		List<Status> status = new ArrayList<>();
		for(User user: allUsers) {
			Status dailyLogStatus;
			if(user.getUserType().equals(Constant.ROLE_CHALLENGER)){
				if(filledLogUsers.contains(user.getEmail())) {
					dailyLogStatus = new Status(user.getEmail(),Constant.STATUS_FILLED);
					status.add(dailyLogStatus);
				}else {
					dailyLogStatus = new Status(user.getEmail(),Constant.STATUS_NOT_FILLED);
					status.add(dailyLogStatus);
				}
			}
		}
		return status;
	}

	/**
	 * Find today's status of daily logs of all users in the batch.
	 * 
	 * If user has filled daily log, the status should be "FILLED".
	 * If user has not filled daily log, the status should be "NOT YET FILLED".
	 * 
	 * @param batchid
	 * @return List of Status
	 */
	private List<Status> findDailyLogStatusByBatch(String batchid) {
		//fetch all users of a batch from UserRepository
		User[] users = this.userService.findByCategory(Constant.FIND_BY_BATCH, null, batchid, null);
		Set<String> filledLogUsers = this.dailyLogRepo.findDailyLogUserListByBatchAndDate(batchid, LocalDate.now());
		return fillDailyLogStatus(users, filledLogUsers);
	}


	/**
	 * Find all Daily Logs of a User ID
	 * 
	 * @param userid
	 * @return Set of Daily Logs
	 */
	@Override
	public Set<DailyLog> findDailyLogHistoryByUser(String userid) {
		return this.dailyLogRepo.findDailyLogHistoryByUser(userid);
	}

}
