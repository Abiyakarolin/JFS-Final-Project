package com.fitme.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fitme.constant.Constant;
import com.fitme.model.WeeklyPlan;
import com.fitme.model.response.Response;
import com.fitme.service.WeeklyPlanService;

@CrossOrigin()
@RestController
@RequestMapping("/fitme")
public class WeeklyPlanController {
	
	@Autowired
	WeeklyPlanService weeklyPlanService;
	
	/**
	 * Saves weekly plan file against the group id passed for the current week.
	 * 
	 * @param groupid
	 * @param file
	 * @return Response with status="SUCCESS" if save is successful, else return Response with status="ERROR"
	 */
	@RequestMapping(value="/plans", method=RequestMethod.POST)
	public Response save(@RequestParam("groupid")String groupid, @RequestParam("file") MultipartFile file){
		boolean status = this.weeklyPlanService.save(groupid, file);
		if(status){
			return new Response(Constant.STATUS_SUCCESS);
		}
		return new Response(Constant.STATUS_ERROR);
	}
	
	/**
	 * Find list of Week and Month (weeks along with their months in format <Week>W-<Month>) for which weekly plan is available for the user's group
	 * 
	 * @param userid
	 * @return Set of Week-Months
	 */
	@RequestMapping(value="/plans", method=RequestMethod.GET)
	public Set<String> findWeeklyPlanListByUser(@RequestParam("userid") String userid){
		return this.weeklyPlanService.findWeeklyPlanListByUser(userid);
	}
	
	/**
	 * Find Weekly Plan by Week and Month
	 * 
	 * @param planId
	 * @return File to be downloaded
	 */
	@RequestMapping(value="/plans/{planId}", method=RequestMethod.GET)
    public ResponseEntity<Resource> findWeeklyPlanByWeekMonth(@PathVariable String planId) {
        WeeklyPlan weeklyPlan = this.weeklyPlanService.findWeeklyPlanByWeekMonth(planId);
        HttpHeaders headers = new HttpHeaders();
        headers.add("filename", weeklyPlan.getFileName());
        headers.add("filetype", weeklyPlan.getFileType());
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + weeklyPlan.getFileName() + "\"");
        headers.add(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, "filename,filetype,"+HttpHeaders.CONTENT_DISPOSITION);
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(weeklyPlan.getFileType()))
                .headers(headers)
                .body(new ByteArrayResource(weeklyPlan.getFileContent()));
    }
	

}
