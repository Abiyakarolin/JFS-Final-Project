package com.fitme.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fitme.constant.Constant;
import com.fitme.model.Donate;
import com.fitme.model.response.Response;
import com.fitme.service.DonateService;

@RestController
@CrossOrigin()
@RequestMapping("/fitme")
public class DonateController {
	
	@Autowired
	private DonateService donateService;
	
	/**
	 * Save donation
	 * 
	 * @param donation
	 * @return Response with status="SUCCESS" if save is successful, else Response with status="ERROR"
	 */
	@RequestMapping(value="/donate", method=RequestMethod.POST)
	public Response save(@RequestBody Donate donation){
		boolean status = this.donateService.save(donation);
		if(status){
			return new Response(Constant.STATUS_SUCCESS);
		}
		return new Response(Constant.STATUS_ERROR);
	}

}
