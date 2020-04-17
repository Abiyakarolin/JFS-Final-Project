package com.fitme.service;

import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitme.Repo.MonthlyMeasurementChartRepository;
import com.fitme.constant.Constant;
import com.fitme.model.MonthlyMeasurementChart;
import com.fitme.model.User;
import com.fitme.model.keys.MonthlyMeasurementChartCompositeKey;
import com.fitme.model.response.Status;

@Service
public class MonthlyMeasurementChartServiceImpl implements MonthlyMeasurementChartService {
	
	@Autowired
	private MonthlyMeasurementChartRepository monthlyMeasurementChartRepository;
	
	@Autowired
	private UserService userService;
	
	/**********************CREATE OPERATION**********************************/
	
	/**
	 * Saves monthly measurement chart
	 * 
	 * @param chart
	 * @return true
	 */
	
	@Override
	public boolean save(MonthlyMeasurementChart chart){
		chart.getId().setUser(userService.getUserbyId(chart.getId().getUser().getUserId()));
		this.monthlyMeasurementChartRepository.save(chart);
		return true;
	}
	
	/*******************READ OPERATIONS*****************************************/
	
	/**
	 * Find current month's Monthly Measurement Chart for the User ID passed.
	 * 
	 * @param userid
	 * @return Monthly Measurement Chart object if present, else null.
	 */
	private MonthlyMeasurementChart findByUserId(String userEmail){
		User user = userService.getuserbyEmail(userEmail);
		MonthlyMeasurementChartCompositeKey key = new MonthlyMeasurementChartCompositeKey();
		key.setUser(user);
		Optional<MonthlyMeasurementChart> chart = this.monthlyMeasurementChartRepository.findById(key);
		if(chart.isPresent()){
			return chart.get();
		}
		return null;
	}
	
	/**
	 * Find the Measurement Date of the Batch of the User Id
	 * 
	 * @param userid
	 * @return measurement date if user is present and assigned a batch else returns null
	 */
	public Integer findMeasurementDateForCurrentMonth(String userEmail){
		User user = userService.getuserbyEmail(userEmail);
		if(user != null && user.getGroupsId() != null){
			return user.getGroupsId().getBatch().getMonthlyMeasurementDate();
		}
		return null;
	}
	
	/**
	 * Find All the Monthly Measurement Charts of the User
	 * 
	 * @param userid
	 * @return Set of Monthly Measurement Charts
	 */
	@Override
	public Set<MonthlyMeasurementChart> findMonthlyMeasurementChartHistoryByUser(String userid){
		return this.monthlyMeasurementChartRepository.findMonthlyMeasurementChartHistoryByUser(userid);
	}
	
	/**
	 * Find this month's measurement chart status of all users in the group.
	 * 
	 * If user has filled chart, the status should be "FILLED".
	 * If user has not filled chart, the status should be "NOT YET FILLED".
	 * 
	 * @param groupid
	 * @return List of Status
	 */
	
	private List<Status> findMonthlyMeasurementChartStatusByGroup(String groupid){
		//fetch all users of a group from UserRepository
		User[] users = this.userService.findByCategory(Constant.FIND_BY_GROUP, null, null, groupid);
		Set<String> filledLogUsers = this.monthlyMeasurementChartRepository.findMonthlyMeasurementChartUserListByGroupAndYearMonth(groupid, YearMonth.now());
		return fillMonthlyMeasurementChartStatus(users, filledLogUsers);
	}
	
	/**
	 * Internal Common Utility API to fill in the status of all Users passed
	 * 
	 * @param allUsers
	 * @param filledLogUsers
	 * @return List of Status
	 */
	
	private List<Status> fillMonthlyMeasurementChartStatus(User[] allUsers, Set<String> filledLogUsers){
		List<Status> statuses = new ArrayList<>();
		for(User user: allUsers) {
			if(user.getUserType().equals(Constant.ROLE_CHALLENGER)){
				if(filledLogUsers.contains(user.getEmail())) {
					//user has filled
					Status status = new Status(user.getEmail(),Constant.STATUS_FILLED);
					statuses.add(status);
				}else {
					Status status = new Status(user.getEmail(),Constant.STATUS_NOT_FILLED);
					statuses.add(status);
				}
			}
		}
		return statuses;
	}
	
	/**
	 * Find Based on Category passed.
	 *  
	 * @param category
	 * @param id
	 * @return monthly chart of the user for this month, if category = user,
	 * 
	 * monthly chart Fill Status of all users of the group for this month, if category = group
	 */
	@Override
	public Object findByCategory(String category, String id) {
		switch(category) {
			case Constant.FIND_BY_GROUP:
				return findMonthlyMeasurementChartStatusByGroup(id);
			case Constant.FIND_BY_USER:
				return findByUserId(id);
		}
		return null;
	}

}
