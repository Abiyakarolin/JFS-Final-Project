package com.fitme.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fitme.constant.Constant;
import com.fitme.model.DailyLog;
import com.fitme.model.response.Response;
import com.fitme.service.DailyLogService;

@CrossOrigin()
@RestController
@RequestMapping("/fitme")
public class DailyLogController {
	
	@Autowired
	private DailyLogService dailyLogService;
	
	/**
	 * Saves Daily Log
	 * 
	 * @param dailyLog
	 * @return Response with status="SUCCESS" if save is successful else Response with status="ERROR"
	 */
	@RequestMapping(value="/dailyLogs", method=RequestMethod.POST)
	public Response save(@RequestBody DailyLog dailyLog) {
		if(this.dailyLogService.save(dailyLog)){
			return new Response(Constant.STATUS_SUCCESS);
		}
		return new Response(Constant.STATUS_ERROR);
	}
	
	/**
	 * Find By Category
	 * 
	 * @param category
	 * @param id
	 * @return daily Log of the user for today, if category = user, daily Log Fill Status of all users of the batch for today, if category = batch, daily Log Fill Status of all users of the group for today, if category = group
	 */
	@RequestMapping(value="/dailyLog", method=RequestMethod.GET)
	public Object findByCategory(@RequestParam("category") String category, @RequestParam("id") String id) {
		return this.dailyLogService.findByCategory(category, id);
	}
	
	/**
	 * Find all daily logs of a user
	 * 
	 * @param userid
	 * @return Set of Daily Logs
	 */
	@RequestMapping(value="/dailyLogs", method=RequestMethod.GET)
	public Set<DailyLog> findDailyLogHistoryByUser(@RequestParam("userid") String userid) {
		return this.dailyLogService.findDailyLogHistoryByUser(userid);
	}

}
