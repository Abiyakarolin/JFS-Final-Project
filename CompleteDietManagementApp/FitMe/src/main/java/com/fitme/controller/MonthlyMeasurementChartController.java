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
import com.fitme.model.MonthlyMeasurementChart;
import com.fitme.model.response.Response;
import com.fitme.service.MonthlyMeasurementChartService;

@RestController
@CrossOrigin()
@RequestMapping("/fitme")
public class MonthlyMeasurementChartController {
	
	@Autowired
	private MonthlyMeasurementChartService service;
	
	/**
	 * Saves Monthly Measurement Chart
	 * 
	 * @param chart
	 * @return Response with status="SUCCESS" if save is successful, else status ="ERROR"
	 */
	@RequestMapping(value="monthlyMeasurementCharts", method=RequestMethod.POST)
	public Response save(@RequestBody MonthlyMeasurementChart chart){
		boolean result = this.service.save(chart);
		if(result){
			return new Response(Constant.STATUS_SUCCESS);
		}
		return new Response(Constant.STATUS_ERROR);
	}
	
	/**
	 * Find By Category
	 * 
	 * @param category
	 * @param id
	 * @return monthly chart of the user for this month, if category = user, monthly chart Fill Status of all users of the group for this month, if category = group
	 */
	@RequestMapping(value="monthlyMeasurementChart", method=RequestMethod.GET)
	public Object findByCategory(@RequestParam("category") String category, @RequestParam("id") String id){
		return this.service.findByCategory(category, id);
	}
	
	/**
	 * Find All the Monthly Measurement Charts of the User
	 * 
	 * @param userid
	 * @return Set of Monthly Measurement Charts
	 */
	@RequestMapping(value="monthlyMeasurementCharts", method=RequestMethod.GET)
	public Set<MonthlyMeasurementChart> findMonthlyMeasurementChartHistoryByUser(@RequestParam("userid") String userid){
		return this.service.findMonthlyMeasurementChartHistoryByUser(userid);
	}
	
	/**
	 * Find the Measurement Date for the Batch of the User Id
	 * 
	 * @param userid
	 * @return measurement date if user is present and assigned a batch else returns null
	 */
	@RequestMapping(value="monthlyMeasurementChartDate", method=RequestMethod.GET)
	public Integer findMeasurementDateForCurrentMonth(@RequestParam("userid") String userid){
		return this.service.findMeasurementDateForCurrentMonth(userid);
	}
	
	

}
