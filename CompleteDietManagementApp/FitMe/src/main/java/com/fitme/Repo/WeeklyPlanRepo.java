package com.fitme.Repo;

import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.fitme.model.WeeklyPlan;
import com.fitme.model.keys.WeeklyPlanCompositeKey;

public interface WeeklyPlanRepo extends CrudRepository<WeeklyPlan, WeeklyPlanCompositeKey> {
	
	/**
	 * Find Set of Week-Months For the group passed
	 * 
	 * @param groupid
	 * @return Set of Week-Months
	 */
	@Query("select wp.id.weekMonth from WeeklyPlan wp where wp.id.groupsId.groupsId=:groupsId")
	Set<String> findWeeklyPlanListByGroup(@Param("groupsId") String groupsId);
	
	
	/**
	 * Find Weekly Plan by Week Month
	 * 
	 * @param weekMonth
	 * @return Weekly Plan
	 */
	@Query("select wp from WeeklyPlan wp where wp.id.weekMonth=:weekMonth")
	WeeklyPlan findByWeekMonth(@Param("weekMonth") String weekMonth);
	
	
	
	
	
	

}
