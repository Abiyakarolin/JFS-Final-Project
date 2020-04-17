package com.fitme.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitme.Repo.DonateRepo;
import com.fitme.model.Donate;

@Service
public class DonateServiceImpl implements DonateService{

	@Autowired
	private DonateRepo donateRepo;
	
	/**********************CREATE OPERATION******************************/
	
	/**
	 * Saves donation
	 * 
	 * @param donation
	 * @return true
	 */
	public boolean save(Donate donation){
		this.donateRepo.save(donation);
		return true;
	}

}
