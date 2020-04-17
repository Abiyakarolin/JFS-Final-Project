package com.fitme.service;

import java.io.IOException;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.fitme.Repo.WeeklyPlanRepo;
import com.fitme.model.Groups;
import com.fitme.model.User;
import com.fitme.model.WeeklyPlan;
import com.fitme.model.keys.WeeklyPlanCompositeKey;

@Service
public class WeeklyPlanServiceImpl implements WeeklyPlanService {

	
	@Autowired
	private WeeklyPlanRepo weeklyPlanRepo;
	
	@Autowired
	private UserService userService;
	
	/**************************CREATE OPERATION*************************************/
	
	/**
	 * Saves file into database against the group id passed
	 * 
	 * The composite key is created based on the group id passed. The key has week-month already populated during creation.
	 * 
	 * @param groupId
	 * @param file
	 * @return true if saved, false if not.
	 */
	
	@Override
	public boolean save(String groupId, MultipartFile file){
		try {
			Groups group = new Groups();
			group.setGroupsId(groupId);
			
			WeeklyPlanCompositeKey key = new WeeklyPlanCompositeKey();
			key.setGroupsId(group);
			
			WeeklyPlan plan = new WeeklyPlan();
			plan.setId(key);
		
			String path = StringUtils.cleanPath(file.getOriginalFilename());
			if(path.contains("..")){
				return false;
			}
			plan.setFileName(path);
			plan.setFileType(file.getContentType());
			plan.setFileContent(file.getBytes());
			this.weeklyPlanRepo.save(plan);
		} catch (IOException e) {
			return false;
		}
		return true;
	}

	@Override
	public Set<String> findWeeklyPlanListByUser(String email) {
		User user = this.userService.getuserbyEmail(email);
		if(user!=null && user.getGroupsId()!=null) {
			return this.weeklyPlanRepo.findWeeklyPlanListByGroup(user.getGroupsId().getGroupsId());
		}
		return null;
	}

	@Override
	public WeeklyPlan findWeeklyPlanByWeekMonth(String weekMonth) {
		return this.weeklyPlanRepo.findByWeekMonth(weekMonth);
	}
	

}
