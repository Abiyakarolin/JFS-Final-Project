package com.fitme.service;

import java.util.Set;

import org.springframework.web.multipart.MultipartFile;

import com.fitme.model.WeeklyPlan;


public interface WeeklyPlanService {

	boolean save(String groupid, MultipartFile file);

	Set<String> findWeeklyPlanListByUser(String userid);

	WeeklyPlan findWeeklyPlanByWeekMonth(String planId);

}
